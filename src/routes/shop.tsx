import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SlidersHorizontal, Star } from "lucide-react";
import { products, type ProductType, type Weight } from "@/data/products";
import { ProductCard } from "@/components/site/ProductCard";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop A2 & Pahadi Ghee Online | Panchganga Organics" },
      {
        name: "description",
        content:
          "Buy bilona-churned A2 cow ghee, pure Pahadi ghee and buffalo ghee in 200g, 250g, 500g and 1 litre jars. Filter by price, weight, type and rating.",
      },
      { property: "og:title", content: "Shop A2 & Pahadi Ghee Online | Panchganga Organics" },
      {
        property: "og:description",
        content: "8 small-batch ghee jars from 200g to 1 litre, filtered the way you shop.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Shop A2 & Pahadi Ghee Online",
          description: "Buy bilona-churned A2 cow ghee, pure Pahadi ghee and buffalo ghee in 200g, 250g, 500g and 1 litre jars.",
          url: "https://panchgangaorganics.com/shop",
          isPartOf: {
            "@type": "WebSite",
            name: "Panchganga Organics",
            url: "https://panchgangaorganics.com/"
          }
        }),
      },
    ],
  }),
  component: ShopPage,
});

const weights: Weight[] = ["20g", "200g", "250g", "500g", "1L", "1kg"];
const types: ProductType[] = ["Ghee", "Honey", "Oil", "Superfood", "Spice", "Resin"];
const sorts = [
  { key: "popularity", label: "Popularity" },
  { key: "newest", label: "Newest" },
  { key: "price-asc", label: "Price: Low to High" },
  { key: "price-desc", label: "Price: High to Low" },
] as const;

function ShopPage() {
  const [maxPrice, setMaxPrice] = useState(2500);
  const [selWeights, setSelWeights] = useState<Weight[]>([]);
  const [selTypes, setSelTypes] = useState<ProductType[]>([]);
  const [minRating, setMinRating] = useState(0);
  const [sort, setSort] = useState<(typeof sorts)[number]["key"]>("popularity");
  const [openFilters, setOpenFilters] = useState(false);

  const toggle = <T,>(list: T[], set: (v: T[]) => void, value: T) =>
    set(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);

  const visible = useMemo(() => {
    const list = products.filter((p) => {
      // Find min price of variants
      const minPrice = Math.min(...p.variants.map((v) => v.price));
      const matchesPrice = minPrice <= maxPrice;
      const matchesWeight =
        selWeights.length === 0 || p.variants.some((v) => selWeights.includes(v.weight));
      const matchesType = selTypes.length === 0 || selTypes.includes(p.type);
      const matchesRating = p.rating >= minRating;

      return matchesPrice && matchesWeight && matchesType && matchesRating;
    });

    const sorted = [...list];
    if (sort === "price-asc") {
      sorted.sort(
        (a, b) => Math.min(...a.variants.map((v) => v.price)) - Math.min(...b.variants.map((v) => v.price))
      );
    }
    if (sort === "price-desc") {
      sorted.sort(
        (a, b) => Math.min(...b.variants.map((v) => v.price)) - Math.min(...a.variants.map((v) => v.price))
      );
    }
    if (sort === "newest") sorted.sort((a, b) => b.added - a.added);
    if (sort === "popularity") sorted.sort((a, b) => b.popularity - a.popularity);
    return sorted;
  }, [maxPrice, selWeights, selTypes, minRating, sort]);

  const reset = () => {
    setMaxPrice(2500);
    setSelWeights([]);
    setSelTypes([]);
    setMinRating(0);
  };

  const filters = (
    <div className="space-y-8">
      <section>
        <h3 className="text-sm font-semibold tracking-wide uppercase">Price</h3>
        <input
          type="range"
          min={400}
          max={2500}
          step={50}
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="mt-4 w-full accent-primary"
        />
        <p className="mt-2 text-sm text-muted-foreground">Up to ₹{maxPrice}</p>
      </section>

      <section>
        <h3 className="text-sm font-semibold tracking-wide uppercase">Weight</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {weights.map((w) => (
            <button
              key={w}
              onClick={() => toggle(selWeights, setSelWeights, w)}
              className={`rounded-full border px-4 py-1.5 text-sm transition ${
                selWeights.includes(w)
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border hover:border-primary"
              }`}
            >
              {w}
            </button>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold tracking-wide uppercase">Type</h3>
        <div className="mt-3 space-y-2">
          {types.map((t) => (
            <label key={t} className="flex cursor-pointer items-center gap-3 text-sm">
              <input
                type="checkbox"
                checked={selTypes.includes(t)}
                onChange={() => toggle(selTypes, setSelTypes, t)}
                className="h-4 w-4 accent-primary"
              />
              {t}
            </label>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold tracking-wide uppercase">Ratings</h3>
        <div className="mt-3 space-y-2">
          {[4.5, 4, 0].map((r) => (
            <label key={r} className="flex cursor-pointer items-center gap-3 text-sm">
              <input
                type="radio"
                name="rating"
                checked={minRating === r}
                onChange={() => setMinRating(r)}
                className="h-4 w-4 accent-primary"
              />
              <span className="inline-flex items-center gap-1">
                {r === 0 ? (
                  "All ratings"
                ) : (
                  <>
                    <Star className="h-3.5 w-3.5 fill-gold text-gold" /> {r} &amp; up
                  </>
                )}
              </span>
            </label>
          ))}
        </div>
      </section>

      <button
        onClick={reset}
        className="w-full rounded-full border border-border py-2.5 text-sm font-medium transition hover:border-primary hover:text-primary"
      >
        Clear all filters
      </button>
    </div>
  );

  return (
    <main className="mx-auto max-w-7xl px-4 py-12">
      <Reveal>
        <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
          The mountain pantry
        </p>
        <h1 className="mt-3 font-display text-4xl leading-tight font-semibold sm:text-5xl">
          Pahadi essentials, made in small batches
        </h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          A2 Gir cow ghee, pure Pahadi ghee, buffalo ghee and mineral-rich Himalayan shilajit.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-10 lg:grid-cols-[260px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <button
            onClick={() => setOpenFilters((o) => !o)}
            className="flex w-full items-center justify-between rounded-2xl border border-border px-4 py-3 text-sm font-medium lg:hidden"
          >
            <span className="inline-flex items-center gap-2">
              <SlidersHorizontal className="h-4 w-4" /> Filters
            </span>
            <span className="text-muted-foreground">{openFilters ? "Hide" : "Show"}</span>
          </button>
          <div
            className={`rounded-3xl border border-border bg-card/70 p-6 backdrop-blur-xl ${
              openFilters ? "mt-4 block" : "hidden"
            } lg:mt-0 lg:block`}
          >
            {filters}
          </div>
        </aside>

        <section>
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-2xl border border-border bg-card/70 px-5 py-3 backdrop-blur-xl sm:flex sm:justify-between">
            <p className="min-w-0 truncate text-sm text-muted-foreground">
              Showing {visible.length} of {products.length} products
            </p>
            <label className="flex shrink-0 items-center gap-2 text-sm">
              <span className="hidden text-muted-foreground sm:inline">Sort by</span>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as typeof sort)}
                className="rounded-full border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
              >
                {sorts.map((s) => (
                  <option key={s.key} value={s.key}>
                    {s.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {visible.length === 0 ? (
            <p className="mt-16 text-center text-muted-foreground">
              No jars match these filters. Try clearing a few.
            </p>
          ) : (
            <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {visible.map((p, i) => (
                <Reveal key={p.id} delay={i * 60}>
                  <ProductCard product={p} />
                </Reveal>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
