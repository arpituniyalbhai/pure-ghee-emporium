import { Link } from "@tanstack/react-router";
import { Leaf } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-forest text-forest-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-primary">
              <Leaf className="h-4 w-4 text-primary-foreground" />
            </span>
            <span className="font-display text-lg font-semibold">Panchganga Organics</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-forest-foreground/70">
            Small-batch A2 and Pahadi ghee, bilona churned by partner families across
            Gujarat and Uttarakhand.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Shop</h3>
          <ul className="mt-4 space-y-2 text-sm text-forest-foreground/70">
            <li>
              <Link to="/shop" className="hover:text-primary">
                All ghee
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-primary">
                A2 Cow ghee
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-primary">
                Pahadi ghee
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-primary">
                Buffalo ghee
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Company</h3>
          <ul className="mt-4 space-y-2 text-sm text-forest-foreground/70">
            <li>
              <Link to="/our-farms" className="hover:text-primary">
                Our farms
              </Link>
            </li>
            <li>Purity reports</li>
            <li>Shipping &amp; returns</li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Stay in touch</h3>
          <p className="mt-4 text-sm text-forest-foreground/70">
            Recipes, harvest notes and early access to new batches.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-4 flex overflow-hidden rounded-md border border-forest-foreground/25 bg-background"
          >
            <input
              type="email"
              required
              placeholder="you@email.com"
              className="min-w-0 flex-1 bg-transparent px-4 py-2.5 text-sm outline-none"
            />
            <button className="bg-primary px-4 text-sm font-semibold text-primary-foreground">
              Join
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-forest-foreground/15 py-5 text-center text-xs text-forest-foreground/60">
        © {new Date().getFullYear()} Panchganga Organics. All rights reserved.
      </div>
    </footer>
  );
}
