import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  ChevronRight,
  Flame,
  FlaskConical,
  Heart,
  HeartHandshake,
  Leaf,
  MapPin,
  Mountain,
  ShieldCheck,
  Sparkles,
  Sprout,
  Star,
  Truck,
  UtensilsCrossed,
} from "lucide-react";
import { products, reviews } from "@/data/products";
import { ProductCard, Stars } from "@/components/site/ProductCard";
import { Reveal } from "@/components/Reveal";
import organicProductsAll from "@/assets/organic_products_all.png";
import farmers from "@/assets/farmers.jpg";
import bilona from "@/assets/bilona.jpg";
import heroGhee from "@/assets/hero-ghee.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Panchganga Organics — 100% Pure Pahadi Organic Foods & Staples" },
      {
        name: "description",
        content:
          "Operating directly from high-altitude Pahadi farms. 100% pure, unadulterated A2 Gir cow ghee, raw honey, cold-pressed oils, and Himalayan shilajit.",
      },
      { property: "og:title", content: "Panchganga Organics — 100% Pure Pahadi Organic Staples" },
      {
        property: "og:description",
        content: "Grass-fed, bilona-churned Pahadi ghee & pure organic food directly from Himalayan farms.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Panchganga Organics",
          url: "https://panchgangaorganics.com/",
          logo: "https://panchgangaorganics.com/logo.png",
          description: "100% pure, unadulterated A2 Gir cow ghee, raw honey, cold-pressed oils, and Himalayan shilajit directly from high-altitude Pahadi farms."
        }),
      },
    ],
  }),
  component: Home,
});

const reasons = [
  {
    icon: Sprout,
    t: "High-Altitude Pahadi Grazing",
    d: "Our Gir and Pahadi hill cows roam freely in pesticide-free Himalayan valleys, grazing on wild medicinal herbs.",
  },
  {
    icon: Leaf,
    t: "Ancient Bilona Method",
    d: "Cultured curd churned manually by hand and slowly simmered on traditional wood fires — zero machinery shortcuts.",
  },
  {
    icon: FlaskConical,
    t: "100% Pure & Lab-Tested",
    d: "Every single batch is third-party lab-certified for 0% adulteration, zero preservatives, and maximum nutrient purity.",
  },
  {
    icon: ShieldCheck,
    t: "Direct Fair Trade with Hill Farmers",
    d: "We empower remote Pahadi farmer families by paying double the local market rates directly into their hands.",
  },
  {
    icon: Truck,
    t: "Farm-Fresh Direct Dispatch",
    d: "Hand-jarred immediately after small-batch preparation and dispatched directly from our mountain hub within 48 hours.",
  },
  {
    icon: Heart,
    t: "Eco-Friendly Glass Jars",
    d: "Bottled in food-grade UV amber glass jars that preserve pure natural aroma, rich taste, and therapeutic benefits.",
  },
];

const farmHighlights = [
  {
    title: "Rooted in the Himalayas",
    desc: "We operate directly from untouched Pahadi villages in Uttarakhand and Himachal. The air is pristine, soil untouched by synthetic fertilizers, and water sourced from fresh glacier streams.",
  },
  {
    title: "100% Unadulterated Pure Guarantee",
    desc: "We pledge 100% purity with absolute transparency. What goes into our glass jars is 100% real, natural food harvested exactly as mother nature intended.",
  },
  {
    title: "Rigorous Batch Testing",
    desc: "Each jar comes with QR codes linking to certified lab test results showing zero heavy metals, no chemical residues, and verified A2 protein integrity.",
  },
];

import mustardOil from "@/assets/mustard_oil.png";
import turmericPowder from "@/assets/turmeric_powder.png";
import shilajit from "@/assets/pahadi-shilajit.jpg";

const pahadiProcessSteps = [
  {
    step: "01",
    time: "4:00 AM",
    title: "Fresh Morning Milking by Hill Farmers",
    desc: "Our partner Pahadi farmers wake up at 4 AM every morning in remote Himalayan villages to hand-milk free-grazing indigenous cows under pristine mountain skies.",
    icon: Sprout,
    image: farmers,
    badge: "4:00 AM Sourcing",
  },
  {
    step: "02",
    time: "Ancient Method",
    title: "Local Mountain Refining & Churning",
    desc: "Milk is boiled over traditional wood fires in earthen pots, cultured overnight into curd, and hand-churned (bilona) to extract rich, natural white butter.",
    icon: Flame,
    image: bilona,
    badge: "Clay Pot Bilona",
  },
  {
    step: "03",
    time: "Direct Transit",
    title: "Dispatched to Our Processing Hub",
    desc: "Small batches are sealed in natural containers and brought directly down from high-altitude Pahadi farm clusters through mountain roads to our central hub.",
    icon: Truck,
    image: shilajit,
    badge: "Mountain Transit",
  },
  {
    step: "04",
    time: "100% Certified",
    title: "Purity Testing & Quality Check",
    desc: "Every single lot undergoes strict lab testing for curcumin, A2 protein integrity, heavy metal safety, and 0% synthetic chemical adulteration.",
    icon: FlaskConical,
    image: turmericPowder,
    badge: "Lab Certified",
  },
  {
    step: "05",
    time: "To Your Door",
    title: "Packed in Glass & Delivered Home",
    desc: "Finally, we pack the pure products in UV-protective glass jars and ship them straight to your doorstep across India with free delivery above ₹999.",
    icon: ShieldCheck,
    image: heroGhee,
    badge: "Glass Jar Delivery",
  },
];

function Home() {
  const featured = [...products].sort((a, b) => b.popularity - a.popularity);
  const pahadiGhee = products.find((p) => p.id === "a2-ghee") || products[0];

  return (
    <main className="bg-muted/10 pb-0">
      {/* Top Hero / Main Banner */}
      <section className="bg-background pt-6 pb-8">
        <div className="mx-auto max-w-7xl px-4">
          <div className="overflow-hidden rounded-[2rem] bg-cream border border-border/80 shadow-sm">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary uppercase">
                  <Mountain className="h-3.5 w-3.5" /> Direct From Pahadi Himalayan Farms
                </span>
                <h1 className="mt-6 font-display text-4xl leading-[1.1] font-semibold sm:text-5xl lg:text-6xl">
                  Shop 100% Pure Organic Foods & Staples
                </h1>
                <p className="mt-4 max-w-md text-base sm:text-lg text-muted-foreground">
                  Operating directly from Himalayan villages. We craft unadulterated Pahadi A2 Ghee, raw honey, cold-pressed oils, and natural superfoods directly for your family.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    to="/shop"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 shadow-lg"
                  >
                    Shop Collection <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/our-farms"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3.5 text-sm font-semibold text-foreground transition hover:bg-cream"
                  >
                    Our Himalayan Origin
                  </Link>
                </div>
              </div>
              <div className="relative h-72 lg:h-auto min-h-[340px]">
                <img
                  src={organicProductsAll}
                  alt="Organic Pahadi products assortment"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products (Top Sellers / Main Store Catalog) */}
      <section className="mx-auto max-w-7xl px-4 py-10">
        <Reveal>
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-semibold tracking-widest text-primary uppercase">Our Farm Collection</span>
              <h2 className="font-display text-2xl font-semibold sm:text-3xl">Pure Organic Food Products</h2>
            </div>
            <Link to="/shop" className="text-sm font-medium text-primary hover:underline flex items-center gap-1">
              Explore Store <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3">
          {featured.map((p, i) => (
            <Reveal key={p.id} delay={i * 70}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* SECTION 2: Detailed Pahadi A2 Gir Cow Bilona Ghee Showcase (MOVED AFTER PRODUCTS) */}
      <section className="mx-auto max-w-7xl px-4 py-10">
        <Reveal>
          <div className="overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-cream via-background to-cream border-2 border-primary/20 p-8 md:p-12 shadow-md">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="relative group">
                <div className="overflow-hidden rounded-3xl border border-border bg-background shadow-soft">
                  <img
                    src={heroGhee}
                    alt="Authentic Pahadi A2 Bilona Ghee Jar"
                    className="h-96 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-full shadow-md uppercase tracking-wider flex items-center gap-1">
                  <Mountain className="h-3.5 w-3.5" /> High-Altitude Pahadi Craft
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2">
                    <Stars rating={5} />
                    <span className="text-xs font-semibold text-muted-foreground">(862 verified Pahadi kitchen reviews)</span>
                  </div>
                  <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl text-foreground">
                    Pahadi A2 Gir Cow Bilona Ghee
                  </h2>
                  <p className="mt-2 text-sm font-semibold text-primary">
                    Grass-Fed Himalayan Cows &bull; Hand-Churned Curd &bull; Wood Fire Cooked
                  </p>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  Crafted high in the pristine Himalayan valleys, our authentic Pahadi Ghee is churned slowly using the ancient two-way wooden bilona method from cultured curd of grass-fed Gir cows. It takes over 25 litres of pure whole milk to extract 1 single litre of this golden, highly aromatic, naturally granular ghee. Unprocessed, heat-stable, and packed with digestive A2 beta-casein proteins.
                </p>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="flex items-start gap-2 text-xs font-medium">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Lab-tested 100% pure, 0% chemicals</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs font-medium">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>High smoke point for healthy Indian cooking</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs font-medium">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Granular golden texture & rich nuttiness</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs font-medium">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Sealed in eco-friendly amber glass jar</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-border/80">
                  <div>
                    <span className="text-xs text-muted-foreground block">Starting price</span>
                    <span className="text-2xl font-bold font-display text-foreground">
                      ₹{pahadiGhee?.variants?.[0]?.price ?? 499}{" "}
                      <span className="text-sm line-through text-muted-foreground font-normal">
                        ₹{pahadiGhee?.variants?.[0]?.mrp ?? 649}
                      </span>
                    </span>
                  </div>
                  <div className="flex items-center gap-3 ml-auto">
                    <Link
                      to="/pahadi-a2-ghee"
                      className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 shadow-lg"
                    >
                      Buy Pahadi Ghee Now &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* NEW SECTION 3: Deep Visual Pahadi Process & Craft Story */}
      <section className="bg-background py-16 border-y border-border">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-cream px-4 py-1 text-xs font-semibold text-primary uppercase tracking-wider">
                <Mountain className="h-3.5 w-3.5" /> 100% Pure Pahadi Journey
              </span>
              <h2 className="font-display text-3xl font-semibold sm:text-4xl mt-3">
                How We Prepare 100% Pure Food In Pahadi Valleys
              </h2>
              <p className="mt-3 text-sm sm:text-base text-muted-foreground">
                Follow our step-by-step authentic Pahadi journey — from 4:00 AM morning milking in remote mountain villages to lab testing and delivery at your door.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pahadiProcessSteps.map((step, idx) => (
              <Reveal key={step.step} delay={idx * 80}>
                <div className="group rounded-[2rem] border border-border bg-cream/30 p-7 shadow-sm transition hover:shadow-md hover:border-primary/40 flex flex-col justify-between h-full">
                  <div>
                    {/* Header Badges & Step Counter */}
                    <div className="flex items-center justify-between gap-2 mb-6">
                      <span className="font-display text-2xl font-bold text-primary bg-primary/10 px-3 py-1 rounded-xl">
                        Step {step.step}
                      </span>
                      <span className="bg-primary text-primary-foreground text-[11px] font-semibold uppercase px-3 py-1 rounded-full shadow-sm">
                        {step.badge}
                      </span>
                    </div>

                    {/* Step Details & Description */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0">
                          <step.icon className="h-6 w-6" />
                        </span>
                        <h3 className="font-semibold text-lg sm:text-xl text-foreground leading-snug">{step.title}</h3>
                      </div>
                      <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-border/60 flex items-center justify-between">
                    <span className="text-xs font-semibold text-muted-foreground">{step.time}</span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
                      <CheckCircle2 className="h-4 w-4" /> 100% Himalayan Quality
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-16">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-cream px-4 py-1 text-xs font-semibold text-primary uppercase tracking-wider">
              <Star className="h-3.5 w-3.5 fill-primary text-primary" /> Verified Customer Stories
            </span>
            <h2 className="font-display text-3xl font-semibold sm:text-4xl mt-3">
              Loved By 10,000+ Indian Kitchens
            </h2>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground">
              Read real feedback from families who switched to our unadulterated Pahadi organic staples.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {reviews.map((r, i) => (
            <Reveal key={r.name + i} delay={i * 50}>
              <div className="rounded-2xl border border-border bg-background p-5 shadow-sm hover:shadow-md hover:border-primary/40 transition flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <Stars rating={r.rating} />
                    <span className="text-[10px] font-semibold bg-cream text-primary px-2 py-0.5 rounded-full border border-primary/20">
                      {r.date}
                    </span>
                  </div>
                  <p className="text-xs text-foreground/80 leading-relaxed italic">&ldquo;{r.text}&rdquo;</p>
                </div>

                <div className="mt-4 pt-3 border-t border-border/60">
                  <h4 className="font-semibold text-xs text-foreground">{r.name}</h4>
                  <div className="flex items-center justify-between mt-1 text-[10px] text-muted-foreground">
                    <span>{r.city}</span>
                    <span className="font-medium text-primary">{r.product}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* NEW SECTION: Pure Text Brand Story (NO BOXES, NO AI GRAPHICS) */}
      <section className="mx-auto max-w-4xl px-4 py-16 text-center sm:text-left">
        <Reveal>
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-primary uppercase">
              <span>✦</span> Our Brand Story
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight text-foreground">
              Why We Founded Panchganga Organics: Bringing Honesty Back to Pure Mountain Food
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed font-normal">
              <p>
                When we looked closely at the supermarket shelves selling so-called &ldquo;organic&rdquo; foods, we were deeply disappointed. Despite fancy green labels and high price tags, most products were chemically processed, diluted with artificial preservatives, or mass-manufactured in industrial city plants. Even worse, the hard-working Pahadi farmers in remote Himalayan villages who toil endlessly under harsh weather were barely paid fair prices by middleman traders.
              </p>
              <p>
                We built Panchganga Organics to change this forever. Operating directly from untouched Pahadi valleys across Uttarakhand and Himachal, we cut out all middlemen. Our partner hill farmers wake up at 4 AM to milk free-grazing indigenous cows and cultivate heirloom grains using traditional methods passed down through generations.
              </p>
              <p>
                By paying our farmers double the standard market rates directly into their hands, we ensure their livelihood thrives while guaranteeing you receive 100% pure, unadulterated food. No hidden chemicals, no machine shortcuts—just authentic Pahadi purity delivered from our soil straight to your family kitchen.
              </p>
            </div>
          </div>
        </Reveal>
      </section>



      {/* Dual Promo Blocks */}
      <section className="mx-auto max-w-7xl px-4 py-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative overflow-hidden rounded-[2rem] bg-background border border-border p-8 md:p-10 shadow-sm">
            <div className="relative z-10 max-w-[65%]">
              <h3 className="font-display text-2xl font-semibold">Pahadi Staples For Whole Health</h3>
              <p className="mt-2 text-sm text-muted-foreground">Nourish your family with authentic, unadulterated mountain ingredients.</p>
              <Link to="/shop" className="mt-6 inline-block rounded-full bg-cream px-5 py-2 text-sm font-semibold text-primary hover:bg-primary/10 border border-primary/20">
                Explore Staples &rarr;
              </Link>
            </div>
            <img src={bilona} alt="Traditional bilona" className="absolute -right-8 -bottom-8 w-56 h-56 object-cover rounded-full shadow-lg border-4 border-white" />
          </div>
          <div className="relative overflow-hidden rounded-[2rem] bg-cream border border-border p-8 md:p-10 shadow-sm">
            <div className="relative z-10 max-w-[65%]">
              <h3 className="font-display text-2xl font-semibold">Supporting Himalayan Farmers</h3>
              <p className="mt-2 text-sm text-muted-foreground">Sourced directly, empowering local hill farming families with fair wages.</p>
              <Link to="/our-farms" className="mt-6 inline-block rounded-full bg-background px-5 py-2 text-sm font-semibold text-primary hover:bg-primary/10 border border-primary/20">
                Our Mountain Farms &rarr;
              </Link>
            </div>
            <img src={farmers} alt="Farmers" className="absolute -right-8 -bottom-8 w-56 h-56 object-cover rounded-full shadow-lg border-4 border-white" />
          </div>
        </div>
      </section>



      {/* Promotional Banner (Panchganga Organics Delivers to You) - AT THE BOTTOM AFTER PRODUCTS */}
      <section className="mx-auto max-w-7xl px-4 py-10">
        <Reveal>
          <div className="relative flex flex-col md:flex-row items-center justify-between overflow-hidden rounded-[2rem] bg-cream p-8 md:p-12 shadow-sm border border-border">
            <div className="max-w-xl text-center md:text-left z-10">
              <span className="text-xs font-semibold tracking-widest text-primary uppercase">Farm-to-Door Delivery</span>
              <h2 className="mt-1 font-display text-3xl font-semibold sm:text-4xl uppercase">
                Panchganga Organics Delivers to You
              </h2>
              <p className="mt-3 text-muted-foreground text-sm sm:text-base">
                Farm-fresh shipping. Free delivery over ₹999 on pure, organic staples directly from our Pahadi farms to your kitchen.
              </p>
              <Link
                to="/shop"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary px-6 py-2.5 text-sm font-semibold text-primary transition hover:bg-primary/5 bg-background shadow-sm"
              >
                Shop Fresh Staples
              </Link>
            </div>
            <div className="mt-8 md:mt-0 md:absolute md:right-12 relative w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-white shadow-soft shrink-0">
              <img src={farmers} alt="Farmers delivering" className="h-full w-full object-cover" />
            </div>
          </div>
        </Reveal>
      </section>

      {/* Newsletter Subscription Block */}
      <section className="bg-cream py-16 border-t border-border">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight uppercase">Subscribe to Pahadi Harvest</h2>
          <p className="mt-3 text-muted-foreground text-sm sm:text-base">Receive direct updates from our Pahadi farms, seasonal harvest alerts, and organic living tips.</p>
          <form className="mt-8 flex flex-col sm:flex-row max-w-md mx-auto items-center gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 w-full rounded-full border border-border bg-background px-6 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 shadow-sm"
              required
            />
            <button
              type="submit"
              className="w-full sm:w-auto rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition shadow-sm"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
