import { Link } from "@tanstack/react-router";
import { Leaf, Menu, ShoppingBag, X } from "lucide-react";
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
      <div className="bg-primary py-2 text-center text-xs font-medium tracking-wide text-primary-foreground">
        Free shipping across India on orders above ₹999 · Lab-tested purity in every jar
      </div>
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-border bg-background/70 backdrop-blur-xl shadow-soft"
            : "bg-background/40 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-4 sm:flex sm:justify-between">
          <Link to="/" className="flex min-w-0 items-center gap-2">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary">
              <Leaf className="h-5 w-5 text-primary-foreground" />
            </span>
            <span className="min-w-0">
              <span className="block truncate font-display text-lg leading-tight font-semibold text-foreground">
                Dharti Organics
              </span>
              <span className="block text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
                Pure A2 Ghee
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
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

          <div className="flex items-center gap-2">
            <Link
              to="/shop"
              className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 sm:inline-flex"
            >
              <ShoppingBag className="h-4 w-4" /> Shop ghee
            </Link>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((o) => !o)}
              className="grid h-10 w-10 place-items-center rounded-full border border-border text-foreground md:hidden"
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
