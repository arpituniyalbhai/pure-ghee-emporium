import { Link } from "@tanstack/react-router";
import { Leaf, Menu, Search, ShoppingBag, UserRound, X } from "lucide-react";
import { useEffect, useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/our-farms", label: "Our Farms" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="overflow-hidden bg-promo py-2.5 text-promo-foreground">
        <div className="offer-track flex min-w-max items-center gap-12 text-[11px] font-semibold uppercase sm:text-xs">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex items-center gap-12" aria-hidden={copy === 1}>
              <span>Harvest offer: up to 18% off</span><span>✦</span>
              <span>Free delivery above ₹999</span><span>✦</span>
              <span>Small-batch Pahadi ghee</span><span>✦</span>
            </div>
          ))}
        </div>
      </div>
      <header
        className={`sticky top-0 z-50 border-b border-border transition-all duration-500 ${
          scrolled
            ? "bg-background/95 backdrop-blur-xl shadow-soft"
            : "bg-background"
        }`}
      >
        <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-4 px-4 py-4 md:py-5">
          <nav className="hidden items-center gap-7 md:flex">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeProps={{ className: "text-primary" }}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <Link to="/" className="flex min-w-0 items-center justify-center gap-2 text-center">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-primary/25 bg-secondary">
              <Leaf className="h-5 w-5 text-primary" />
            </span>
            <span className="min-w-0">
              <span className="block truncate font-display text-lg leading-tight font-bold text-foreground sm:text-xl">
                Dharti Organics
              </span>
              <span className="block text-[9px] font-semibold tracking-[0.22em] text-primary uppercase">
                From the Himalayan soil
              </span>
            </span>
          </Link>

          <div className="flex items-center justify-end gap-1 sm:gap-2">
            <Link to="/shop" aria-label="Search products" className="hidden h-10 w-10 place-items-center text-foreground transition hover:text-primary sm:grid">
              <Search className="h-5 w-5" />
            </Link>
            <span aria-label="Account" className="hidden h-10 w-10 place-items-center text-foreground sm:grid">
              <UserRound className="h-5 w-5" />
            </span>
            <Link
              to="/shop"
              aria-label="Shopping bag"
              className="grid h-10 w-10 place-items-center text-foreground transition hover:text-primary"
            >
              <ShoppingBag className="h-5 w-5" />
            </Link>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((o) => !o)}
              className="grid h-10 w-10 place-items-center border-l border-border text-foreground md:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="border-t border-border bg-background/95 backdrop-blur-xl md:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col px-4 py-2">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="border-b border-border/60 py-3 text-sm font-medium text-foreground last:border-0"
                >
                  {n.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
