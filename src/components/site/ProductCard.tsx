import { Star, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
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
  const cheapestVariant = product.variants.reduce((prev, curr) =>
    prev.price < curr.price ? prev : curr
  );
  const off = Math.round(((cheapestVariant.mrp - cheapestVariant.price) / cheapestVariant.mrp) * 100);
  const href = product.dedicatedRoute ?? `/product/${product.id}`;
  const isSoldOut = !!product.soldOut;

  const cardContent = (
    <>
      {/* Image */}
      <div className="relative overflow-hidden bg-cream">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className={`h-64 w-full object-cover transition-transform duration-700 ${
            isSoldOut ? "grayscale opacity-55" : "group-hover:scale-105"
          }`}
        />
        {/* Sold Out overlay */}
        {isSoldOut && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/25">
            <span className="rounded-full bg-neutral-900/85 px-5 py-2 text-sm font-bold tracking-widest text-white uppercase shadow-lg backdrop-blur-sm">
              Sold Out
            </span>
          </div>
        )}
        {/* Tag — only when available */}
        {!isSoldOut && product.tag && (
          <span className="absolute top-4 left-4 rounded-full bg-primary px-3 py-1 text-[11px] font-semibold tracking-wide text-primary-foreground uppercase shadow-sm">
            {product.tag}
          </span>
        )}
        {/* Discount badge — only when available */}
        {!isSoldOut && (
          <span className="absolute top-4 right-4 rounded-full bg-background/90 px-3 py-1 text-[11px] font-semibold text-primary backdrop-blur-md shadow-sm">
            Upto {off}% off
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2 text-[11px] font-semibold tracking-wide text-primary uppercase">
          <span>{product.type}</span>
          <span className="h-1 w-1 rounded-full bg-primary/50" />
          <span>{product.variants.length} Size{product.variants.length > 1 ? "s" : ""}</span>
        </div>
        <h3 className={`mt-2 font-display text-xl leading-snug font-semibold ${isSoldOut ? "text-muted-foreground" : ""}`}>
          {product.name}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{product.subtitle}</p>

        <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
          <Stars rating={product.rating} />
          <span>{product.rating} ({product.reviews})</span>
        </div>

        <div className="mt-auto flex items-end justify-between gap-3 pt-6 border-t border-border mt-6">
          <div>
            {isSoldOut ? (
              <span className="text-sm font-medium text-muted-foreground italic">Currently Unavailable</span>
            ) : (
              <>
                <p className="text-xs text-muted-foreground mb-0.5">Starts from</p>
                <span className="font-display text-xl font-semibold text-primary">₹{cheapestVariant.price}</span>
                <span className="ml-2 text-sm text-muted-foreground line-through">₹{cheapestVariant.mrp}</span>
              </>
            )}
          </div>
          {!isSoldOut && (
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
              <ArrowRight className="h-4 w-4" />
            </span>
          )}
        </div>
      </div>
    </>
  );

  /* Sold-out: non-clickable wrapper */
  if (isSoldOut) {
    return (
      <div className="flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-border bg-card shadow-sm opacity-75 cursor-not-allowed">
        {cardContent}
      </div>
    );
  }

  /* Available: clickable Link */
  return (
    <Link
      to={href}
      className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-border bg-card shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lift"
    >
      {cardContent}
    </Link>
  );
}

