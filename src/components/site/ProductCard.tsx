import { ShoppingBag, Star } from "lucide-react";
import { toast } from "sonner";
import type { Product } from "@/data/products";

export function Stars({ rating, className = "" }: { rating: number; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-0.5 ${className}`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`h-3.5 w-3.5 ${
            i <= Math.round(rating) ? "fill-gold text-gold" : "text-border"
          }`}
        />
      ))}
    </span>
  );
}

export function ProductCard({ product }: { product: Product }) {
  const off = Math.round(((product.mrp - product.price) / product.mrp) * 100);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
      <div className="relative overflow-hidden bg-cream">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={800}
          height={800}
          className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {product.tag && (
          <span className="absolute top-4 left-4 rounded-full bg-primary px-3 py-1 text-[11px] font-semibold tracking-wide text-primary-foreground uppercase">
            {product.tag}
          </span>
        )}
        <span className="absolute top-4 right-4 rounded-full bg-background/80 px-3 py-1 text-[11px] font-semibold text-primary backdrop-blur-md">
          {off}% off
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-2 text-[11px] font-medium tracking-wide text-muted-foreground uppercase">
          <span>{product.type === "Shilajit" ? "Himalayan resin" : `${product.type} ghee`}</span>
          <span className="h-1 w-1 rounded-full bg-border" />
          <span>{product.weight}</span>
        </div>
        <h3 className="mt-2 font-display text-lg leading-snug font-semibold">{product.name}</h3>
        <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{product.subtitle}</p>

        <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
          <Stars rating={product.rating} />
          <span>
            {product.rating} ({product.reviews})
          </span>
        </div>

        <div className="mt-auto flex items-end justify-between gap-3 pt-5">
          <div>
            <span className="font-display text-xl font-semibold">₹{product.price}</span>
            <span className="ml-2 text-sm text-muted-foreground line-through">₹{product.mrp}</span>
          </div>
          <button
            onClick={() => toast.success(`${product.name} added to cart`)}
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
          >
            <ShoppingBag className="h-4 w-4" /> Add
          </button>
        </div>
      </div>
    </article>
  );
}
