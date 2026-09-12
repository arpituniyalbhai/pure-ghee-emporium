import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, FlaskConical, Leaf, ShieldCheck, Sprout, Truck } from "lucide-react";
import { products, reviews } from "@/data/products";
import { ProductCard, Stars } from "@/components/site/ProductCard";
import { Reveal } from "@/components/Reveal";
import heroGhee from "@/assets/hero-ghee.jpg";
import farmers from "@/assets/farmers.jpg";
import bilona from "@/assets/bilona.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dharti Organics — Pure A2 Cow & Pahadi Ghee, Bilona Churned" },
      {
        name: "description",
        content:
          "Buy small-batch A2 Gir cow ghee, pure Pahadi ghee and buffalo ghee in 200g, 250g, 500g and 1 litre jars. Grass-fed, bilona churned, lab-tested.",
      },
      { property: "og:title", content: "Dharti Organics — Pure A2 Cow & Pahadi Ghee" },
      {
        property: "og:description",
        content: "Grass-fed, bilona-churned ghee delivered fresh across India.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const reasons = [
  {
    icon: Sprout,
    t: "Grass-fed indigenous herds",
    d: "Gir and Himalayan hill cows graze freely. No feed concentrate, no hormones, ever.",
  },
  {
    icon: Leaf,
    t: "Traditional bilona method",
    d: "Curd churned by hand and cooked slow on a wood fire — never cream-separated shortcuts.",
  },
  {
    icon: FlaskConical,
    t: "Lab-tested every batch",
    d: "Each batch carries an adulteration and purity report you can scan from the jar.",
  },
  {
    icon: ShieldCheck,
    t: "Fair price to farmers",
    d: "Partner families are paid a fixed premium above the market rate, month after month.",
  },
  {
    icon: Truck,
    t: "Fresh, fast delivery",
    d: "Jarred after churning and shipped within 48 hours, free above ₹999.",
  },
  {
    icon: Leaf,
    t: "Glass, not plastic",
    d: "Amber glass jars keep aroma in and light out. Reuse them, or send them back.",
  },
];

function Home() {
  const featured = [...products].sort((a, b) => b.popularity - a.popularity).slice(0, 4);

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-40 -right-32 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />
        <div className="pointer-events-none absolute top-40 -left-40 h-96 w-96 rounded-full bg-gold/20 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary uppercase">
              <Leaf className="h-3.5 w-3.5" /> Certified organic · Bilona churned
            </span>
            <h1 className="mt-6 font-display text-5xl leading-[1.05] font-semibold sm:text-6xl">
              Golden A2 ghee,
              <span className="block text-primary">churned the slow way</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground">
              From grass-fed Gir cows and Himalayan hill herds. 25 litres of fresh milk go
              into every litre of our hand-churned ghee — nothing else does.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
              >
                Shop the collection <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/our-farms"
                className="rounded-full border border-border px-7 py-3.5 text-sm font-semibold transition hover:border-primary hover:text-primary"
              >
                Meet our farmers
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-8">
              <div>
                <p className="font-display text-2xl font-semibold">4.8/5</p>
                <Stars rating={4.8} className="mt-1" />
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <p className="font-display text-2xl font-semibold">42,000+</p>
                <p className="text-sm text-muted-foreground">jars delivered</p>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <p className="font-display text-2xl font-semibold">120</p>
                <p className="text-sm text-muted-foreground">partner families</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src={heroGhee}
              alt="Jar of golden A2 cow ghee beside fresh green leaves and wheat"
              width={1408}
              height={1008}
              className="w-full rounded-[2.5rem] object-cover shadow-lift"
            />
            <div className="absolute -bottom-6 left-6 rounded-2xl border border-border bg-background/70 px-5 py-4 backdrop-blur-xl shadow-soft">
              <p className="text-xs tracking-wide text-muted-foreground uppercase">Batch #148</p>
              <p className="font-display text-lg font-semibold">Churned 3 days ago</p>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee strip */}
      <div className="border-y border-border bg-cream py-4">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-x-10 gap-y-2 px-4 text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
          <span>100% grass-fed</span>
          <span>No palm oil</span>
          <span>Hand churned</span>
          <span>Glass jars</span>
          <span>Lab tested</span>
          <span>Fair trade milk</span>
        </div>
      </div>

      {/* Promotional banner */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-primary px-8 py-12 sm:px-14">
            <div className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-gold/30 blur-3xl" />
            <div className="relative grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_auto]">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-primary-foreground/75 uppercase">
                  Harvest offer · ends Sunday
                </p>
                <h2 className="mt-3 font-display text-3xl leading-tight font-semibold text-primary-foreground sm:text-4xl">
                  Flat 20% off on 1 litre jars
                  <span className="block text-gold">+ free doorstep delivery</span>
                </h2>
                <p className="mt-3 max-w-xl text-primary-foreground/80">
                  Use code <span className="font-semibold text-gold">PAHADI20</span> at checkout
                  on A2 Gir and Pahadi ghee family jars.
                </p>
              </div>
              <Link
                to="/shop"
                className="inline-flex w-fit items-center gap-2 rounded-full bg-background px-7 py-3.5 text-sm font-semibold text-primary transition hover:bg-background/90"
              >
                Claim the offer <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Featured products */}
      <section className="mx-auto max-w-7xl px-4 pb-8">
        <Reveal>
          <div className="grid gap-4 sm:flex sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                Bestsellers
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
                Pick your jar size
              </h2>
            </div>
            <Link
              to="/shop"
              className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              View all 8 products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {featured.map((p, i) => (
            <Reveal key={p.id} delay={i * 80}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why choose us */}
      <section className="mt-20 bg-cream py-20">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              Why choose us
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold sm:text-4xl">
              Six reasons our jars empty faster than most
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((r, i) => (
              <Reveal key={r.t} delay={i * 70}>
                <div className="h-full rounded-3xl border border-border bg-card/70 p-7 backdrop-blur-xl transition hover:shadow-lift">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10">
                    <r.icon className="h-5 w-5 text-primary" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold">{r.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{r.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Farmers story */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="grid grid-cols-2 gap-4">
              <img
                src={farmers}
                alt="Farmer with his Gir cows in a green field at sunrise"
                loading="lazy"
                width={1200}
                height={800}
                className="col-span-2 h-72 w-full rounded-[2rem] object-cover"
              />
              <img
                src={bilona}
                alt="Curd churned in an earthen pot with a wooden bilona"
                loading="lazy"
                width={1200}
                height={800}
                className="h-48 w-full rounded-[2rem] object-cover"
              />
              <div className="grid h-48 place-items-center rounded-[2rem] bg-primary p-6 text-center">
                <div>
                  <p className="font-display text-3xl font-semibold text-primary-foreground">
                    ₹12 Cr+
                  </p>
                  <p className="mt-1 text-sm text-primary-foreground/80">
                    paid directly to farming families
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              From our farmers
            </p>
            <h2 className="mt-3 font-display text-3xl leading-tight font-semibold sm:text-4xl">
              The people who wake at 4am so your ghee tastes like this
            </h2>
            <p className="mt-4 text-muted-foreground">
              Bhaveshbhai has kept a Gir herd for thirty-one years. His cows graze on open
              pasture, his family sets the curd by evening, and the butter is churned before
              the sun is fully up. We simply keep that rhythm intact and pay for it properly.
            </p>
            <p className="mt-4 text-muted-foreground">
              Every jar you buy is traceable to the valley, the herd and the week it was made.
            </p>
            <Link
              to="/our-farms"
              className="mt-7 inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold transition hover:border-primary hover:text-primary"
            >
              See how it is made <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              Customer reviews
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
              4.8 out of 5 from 2,140 reviews
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {reviews.map((r, i) => (
              <Reveal key={r.name} delay={i * 80}>
                <figure className="flex h-full flex-col rounded-3xl border border-border bg-card/70 p-7 backdrop-blur-xl">
                  <Stars rating={r.rating} />
                  <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/85">
                    “{r.text}”
                  </blockquote>
                  <figcaption className="mt-5 flex items-center gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary/10 font-semibold text-primary">
                      {r.name[0]}
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate text-sm font-semibold">{r.name}</span>
                      <span className="block text-xs text-muted-foreground">
                        Verified buyer · {r.city}
                      </span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="mx-auto max-w-4xl px-4 py-24 text-center">
        <Reveal>
          <h2 className="font-display text-4xl leading-tight font-semibold sm:text-5xl">
            Start with a 200g jar. Stay for the 1 litre.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Free shipping above ₹999 and a full refund if the aroma does not convince you.
          </p>
          <Link
            to="/shop"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
          >
            Shop all ghee <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
