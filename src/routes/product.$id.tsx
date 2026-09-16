import { createFileRoute, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ShoppingBag, Truck, ShieldCheck, Leaf } from "lucide-react";
import { toast } from "sonner";
import { products } from "@/data/products";
import { Stars } from "@/components/site/ProductCard";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/product/$id")({
  loader: ({ params }) => {
    const product = products.find((p) => p.id === params.id);
    if (!product) throw notFound();
    return product;
  },
  component: ProductPage,
});

function ProductPage() {
  const product = Route.useLoaderData();
  const [selectedVariantId, setSelectedVariantId] = useState(product.variants?.[0]?.id ?? "");

  const selectedVariant = product.variants?.find((v) => v.id === selectedVariantId) || product.variants?.[0] || { id: "", weight: "", price: 0, mrp: 1 };
  const off = selectedVariant.mrp > 0 ? Math.round(((selectedVariant.mrp - selectedVariant.price) / selectedVariant.mrp) * 100) : 0;

  return (
    <main className="bg-muted/10 min-h-screen py-12">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] bg-background border border-border shadow-sm">
            <div className="grid lg:grid-cols-2">
              
              {/* Product Image Section */}
              <div className="bg-cream p-8 md:p-16 flex items-center justify-center relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full max-w-md object-contain rounded-2xl shadow-soft"
                />
                {product.tag && (
                  <span className="absolute top-8 left-8 rounded-full bg-primary px-4 py-1.5 text-xs font-semibold tracking-wide text-primary-foreground uppercase shadow-sm">
                    {product.tag}
                  </span>
                )}
              </div>

              {/* Product Details Section */}
              <div className="p-8 md:p-12 lg:p-16 flex flex-col">
                <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-primary uppercase">
                  <span>{product.type}</span>
                </div>
                
                <h1 className="mt-3 font-display text-4xl leading-tight font-semibold">
                  {product.name}
                </h1>
                
                <p className="mt-2 text-lg text-muted-foreground">
                  {product.subtitle}
                </p>

                <div className="mt-4 flex items-center gap-3 text-sm text-muted-foreground border-b border-border pb-6">
                  <Stars rating={product.rating} />
                  <span className="font-medium text-foreground">
                    {product.rating} Rating
                  </span>
                  <span>|</span>
                  <span className="underline decoration-dashed underline-offset-4 cursor-pointer hover:text-primary">
                    {product.reviews} Reviews
                  </span>
                </div>

                <div className="mt-6 flex items-end gap-4">
                  <div>
                    <span className="font-display text-4xl font-semibold text-primary">
                      ₹{selectedVariant.price}
                    </span>
                    <span className="ml-3 text-lg text-muted-foreground line-through">
                      ₹{selectedVariant.mrp}
                    </span>
                  </div>
                  <span className="rounded bg-primary/10 px-2 py-1 text-xs font-semibold text-primary">
                    {off}% OFF
                  </span>
                </div>
                <p className="mt-2 text-xs text-muted-foreground">Inclusive of all taxes</p>

                {/* Variant Selection */}
                {product.variants.length > 1 && (
                  <div className="mt-8">
                    <p className="text-sm font-semibold mb-3">Select Size</p>
                    <div className="flex flex-wrap gap-3">
                      {product.variants.map((variant) => (
                        <button
                          key={variant.id}
                          onClick={() => setSelectedVariantId(variant.id)}
                          className={`rounded-xl border-2 px-5 py-3 text-sm font-semibold transition-all ${
                            selectedVariantId === variant.id
                              ? "border-primary bg-primary/5 text-primary"
                              : "border-border bg-background text-muted-foreground hover:border-primary/50"
                          }`}
                        >
                          {variant.weight}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Add to Cart */}
                <div className="mt-10">
                  <button
                    onClick={() => toast.success(`${product.name} (${selectedVariant.weight}) added to cart`)}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg active:scale-[0.98]"
                  >
                    <ShoppingBag className="h-5 w-5" /> Add to Cart
                  </button>
                </div>

                {/* Trust Badges */}
                <div className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8">
                  <div className="flex flex-col items-center text-center gap-2">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-cream">
                      <Truck className="h-5 w-5 text-primary" />
                    </span>
                    <span className="text-xs font-medium text-muted-foreground">Fast & Free<br/>Delivery</span>
                  </div>
                  <div className="flex flex-col items-center text-center gap-2">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-cream">
                      <ShieldCheck className="h-5 w-5 text-primary" />
                    </span>
                    <span className="text-xs font-medium text-muted-foreground">100% Secure<br/>Checkout</span>
                  </div>
                  <div className="flex flex-col items-center text-center gap-2">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-cream">
                      <Leaf className="h-5 w-5 text-primary" />
                    </span>
                    <span className="text-xs font-medium text-muted-foreground">Certified<br/>Organic</span>
                  </div>
                </div>
                
                {/* Description */}
                {product.description && (
                  <div className="mt-10 border-t border-border pt-8">
                    <h3 className="font-display text-xl font-semibold mb-3">About this item</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {product.description}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
