import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Award,
  CheckCircle2,
  ChevronRight,
  Flame,
  Leaf,
  MessageSquareQuote,
  ShieldCheck,
  ShoppingBag,
  Star,
  Truck,
  ZapIcon,
} from "lucide-react";
import { toast } from "sonner";
import bilona from "@/assets/bilona.jpg";
import pahadiBilona from "@/assets/pahadi-bilona.jpg";
import farmersImg from "@/assets/farmers.jpg";

// ── images ────────────────────────────────────────────────────────────
// Product images first, then Pahadi/farmer storytelling images
const gheeJarHero   = "/ghee-jar-hero.jpg";
const gheebenefits  = "/ghee-benefits.jpg";
const gheePure      = "/ghee-pure.jpg";
const bilonaProcess = "/bilona-process.jpg";
const pahadiFarm    = "/pahadi-farm.jpg";

// ── SEO ────────────────────────────────────────────────────────────────
export const Route = createFileRoute("/pahadi-a2-ghee")({
  head: () => ({
    meta: [
      {
        title:
          "Pahadi A2 Gir Cow Bilona Ghee | 100% Pure & Traditional | Dharti Organics",
      },
      {
        name: "description",
        content:
          "Buy authentic Pahadi A2 Gir Cow Bilona Ghee online. Hand-churned using traditional bilona method from grass-fed Gir cows in the Himalayas. Lab tested, 100% pure, no additives. Available in 200g, 500g & 1L.",
      },
      {
        name: "keywords",
        content:
          "A2 ghee, Gir cow ghee, bilona ghee, pahadi ghee, pure desi ghee, organic ghee, grass-fed ghee, Himalayan ghee, buy pure ghee online, traditional ghee India",
      },
      { property: "og:title", content: "Pahadi A2 Gir Cow Bilona Ghee | Dharti Organics" },
      {
        property: "og:description",
        content:
          "Authentic bilona-method ghee from Himalayan Gir cows. 25L of milk per 1L of ghee. Lab tested. Order now.",
      },
      { property: "og:type", content: "product" },
    ],
  }),
  component: A2GheePage,
});

// ── Data ───────────────────────────────────────────────────────────────
const variants = [
  { id: "200g", label: "200g", price: 499, mrp: 649 },
  { id: "500g", label: "500g", price: 1149, mrp: 1399, popular: true },
  { id: "1L",   label: "1 Litre", price: 2149, mrp: 2599 },
];

const gallery = [
  { src: gheeJarHero,   alt: "Pahadi A2 Gir Cow Bilona Ghee amber jar with granular golden ghee" },
  { src: gheePure,      alt: "100% A2 Milk — No Additives, No Chemicals, Lab Tested, Bilona Churned" },
  { src: gheebenefits,  alt: "Benefits of A2 Desi Ghee: Balanced MUFA & SFA, Aids Muscle Recovery, Supports Digestion, Warming Properties" },
  { src: bilonaProcess, alt: "Traditional bilona hand-churning process by Pahadi artisan in rustic kitchen" },
  { src: pahadiFarm,    alt: "Gir cows freely grazing on lush Himalayan terraced farms in Uttarakhand" },
];

const trustBadges = [
  { icon: Leaf,       label: "100% A2 Milk",      sub: "Only Gir cow A2 protein" },
  { icon: Flame,      label: "Bilona Method",      sub: "Traditional hand-churned" },
  { icon: ShieldCheck,label: "Lab Tested Pure",    sub: "3rd-party quality certified" },
  { icon: ZapIcon,    label: "25L → 1L",           sub: "25 litres of milk per jar" },
  { icon: Truck,      label: "Free Delivery",      sub: "Pan-India, packed in glass" },
  { icon: Award,      label: "No Preservatives",   sub: "Pure, natural, chemical-free" },
];

const benefits = [
  {
    title: "Boosts Immunity & Energy",
    desc: "Rich in fat-soluble vitamins A, D, E, K and powerful antioxidants from Himalayan grass-fed cows that strengthen natural immunity.",
  },
  {
    title: "Supports Gut & Digestion",
    desc: "Contains butyric acid that nourishes the intestinal lining, improving digestion and reducing inflammation naturally.",
  },
  {
    title: "Good Fat for the Brain",
    desc: "Omega-3 fatty acids and medium-chain triglycerides in A2 ghee support sharp cognitive function and mental clarity.",
  },
  {
    title: "Lactose & Casein Free",
    desc: "The bilona process removes virtually all lactose and casein, making this ghee suitable even for lactose-sensitive individuals.",
  },
  {
    title: "High Smoke Point",
    desc: "With a smoke point above 250°C, it is the safest fat for high-heat Indian cooking — frying, tadka, or rotis.",
  },
  {
    title: "Ayurvedic Superfood",
    desc: "Described in ancient Ayurvedic texts as Sattvik Aahar — the most sacred and life-giving food for all doshas.",
  },
];

const nutrition = [
  { label: "Energy",            per100: "897 kcal" },
  { label: "Total Fat",         per100: "99.5g" },
  { label: "Saturated Fat",     per100: "65.1g" },
  { label: "Mono Unsaturated",  per100: "28.7g" },
  { label: "Poly Unsaturated",  per100: "3.7g" },
  { label: "Cholesterol",       per100: "256mg" },
  { label: "Carbohydrates",     per100: "0g" },
  { label: "Protein",           per100: "0g" },
  { label: "Sodium",            per100: "2mg" },
  { label: "Vitamin A",         per100: "3069 IU" },
];

const howMade = [
  {
    step: "01",
    title: "Grass-Fed Gir Cows",
    desc: "Our Gir cows roam free on the pristine slopes of the Himalayas, grazing on wild mountain herbs — no hormones, no GMO feed, ever.",
  },
  {
    step: "02",
    title: "Curd & Fermentation",
    desc: "Fresh A2 milk is first cultured overnight into curd using a natural earthen pot starter — locking in live cultures and beneficial bacteria.",
  },
  {
    step: "03",
    title: "Bilona Hand-Churning",
    desc: "The curd is bi-directionally churned using traditional wooden bilona — separating fresh butter from buttermilk, the ancient Ayurvedic way.",
  },
  {
    step: "04",
    title: "Slow Wood-Fire Cooking",
    desc: "Butter is slowly simmered over a wood fire in an earthen pot at low temperatures — until the milk solids settle and pure golden ghee is born.",
  },
];

const productReviews = [
  {
    name: "Ananya Sharma",
    city: "Bengaluru",
    rating: 5,
    text: "The A2 Ghee smells exactly like my grandmother's kitchen in Dehradun. Granular, deeply aromatic, and pure — you can tell it is made the right way.",
    verified: true,
  },
  {
    name: "Dr. Sunita Rao",
    city: "Hyderabad",
    rating: 5,
    text: "As a nutritionist I am extremely selective about ghee. The lab reports from Dharti are transparent and complete. This is genuinely A2 bilona ghee.",
    verified: true,
  },
  {
    name: "Vikramaditya Joshi",
    city: "Dehradun",
    rating: 5,
    text: "Being a native Pahadi, I can verify that this is 100% authentic bilona ghee crafted the traditional mountain way. The texture and aroma are unmistakable.",
    verified: true,
  },
  {
    name: "Meera Iyer",
    city: "Pune",
    rating: 5,
    text: "The amber glass jar arrived perfectly sealed. The ghee has that beautiful grainy crystalline texture — exactly as traditional bilona ghee should look.",
    verified: true,
  },
];

const faqs = [
  {
    q: "What is the difference between A1 and A2 ghee?",
    a: "A1 ghee comes from hybrid breeds like HF or Jersey cows. A2 ghee is sourced only from indigenous Gir cows which produce A2 beta-casein protein — considered easier to digest and nutritionally superior by modern research and Ayurveda.",
  },
  {
    q: "Why does bilona ghee cost more than regular ghee?",
    a: "25 litres of full-fat A2 milk are required to produce just 1 litre of bilona ghee. The entire process — curd setting, bilona churning, slow wood-fire cooking — takes 2–3 days of handcraft. This is the real cost of purity.",
  },
  {
    q: "How should I store the ghee?",
    a: "Keep the amber glass jar at room temperature (away from direct sunlight). No refrigeration needed. The ghee stays fresh for 12 months. Always use a dry, clean spoon.",
  },
  {
    q: "Is this ghee suitable for lactose intolerant people?",
    a: "Yes. The bilona churning and slow-cooking process removes virtually all lactose and casein proteins, leaving only pure clarified fat. Most lactose-sensitive individuals tolerate it well.",
  },
  {
    q: "Do you ship pan-India?",
    a: "Yes, we deliver across India. Orders are shipped in insulated, eco-friendly packaging to protect the glass jar. Standard delivery takes 3–5 business days.",
  },
];

// ── Component ──────────────────────────────────────────────────────────
function Stars({ rating }: { rating: number }) {
  return (
    <span className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i <= rating ? "fill-amber-400 text-amber-400" : "text-muted-foreground/30"}`}
        />
      ))}
    </span>
  );
}

function A2GheePage() {
  const [activeVariant, setActiveVariant] = useState(variants[1]);
  const [activeImage, setActiveImage] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [qty, setQty] = useState(1);

  const currentVariant = activeVariant || variants[0];
  const currentImage = gallery[activeImage] || gallery[0];
  const off = Math.round(((currentVariant.mrp - currentVariant.price) / currentVariant.mrp) * 100);

  return (
    <main className="bg-background min-h-screen">
      {/* ── Breadcrumb ── */}
      <div className="border-b border-border bg-muted/20">
        <div className="mx-auto max-w-7xl px-4 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link to="/shop" className="hover:text-primary transition-colors">Shop</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground font-medium">Pahadi A2 Gir Cow Bilona Ghee</span>
          </nav>
        </div>
      </div>

      {/* ── Hero Product Section ── */}
      <section className="mx-auto max-w-7xl px-4 py-10 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-10 xl:gap-16">

          {/* ── Image Gallery ── */}
          <div className="flex flex-col gap-4">
            {/* Main image */}
            <div className="relative overflow-hidden rounded-3xl bg-[#f9f4eb] aspect-square flex items-center justify-center">
              <img
                src={currentImage.src}
                alt={currentImage.alt}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <span className="absolute top-4 left-4 rounded-full bg-primary px-4 py-1.5 text-xs font-bold tracking-widest text-primary-foreground uppercase shadow">
                Bestseller
              </span>
              <span className="absolute top-4 right-4 rounded-full bg-green-600 px-3 py-1.5 text-xs font-bold text-white shadow">
                {off}% OFF
              </span>
            </div>
            {/* Thumbnails */}
            <div className="grid grid-cols-6 gap-2">
              {gallery.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`rounded-xl overflow-hidden aspect-square border-2 transition-all ${
                    activeImage === i ? "border-primary shadow-md scale-105" : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* ── Product Details ── */}
          <div className="flex flex-col">
            <span className="text-xs font-bold tracking-widest text-primary uppercase">
              Dharti Organics · Pahadi A2 Ghee
            </span>

            <h1 className="mt-3 font-display text-3xl sm:text-4xl xl:text-5xl leading-tight font-bold text-foreground">
              Pahadi A2 Gir Cow<br />
              <span className="text-primary">Bilona Ghee</span>
            </h1>

            <p className="mt-3 text-base text-muted-foreground leading-relaxed">
              Hand-churned using the ancient bilona method from grass-fed Gir cows grazing freely on Himalayan meadows. <strong>25 litres of pure A2 milk yield just 1 litre</strong> of this golden, granular, life-giving ghee.
            </p>

            {/* Stars */}
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <Stars rating={5} />
              <span className="font-semibold text-sm">4.9 / 5</span>
              <span className="text-muted-foreground text-sm">·</span>
              <span className="text-sm text-muted-foreground underline decoration-dashed cursor-pointer hover:text-primary">862 Verified Reviews</span>
            </div>

            {/* Price */}
            <div className="mt-6 flex items-end gap-4 border-t border-b border-border py-5">
              <span className="font-display text-4xl font-bold text-primary">
                ₹{currentVariant.price}
              </span>
              <span className="text-xl text-muted-foreground line-through">₹{currentVariant.mrp}</span>
              <span className="ml-1 rounded-lg bg-green-100 px-3 py-1 text-sm font-bold text-green-700">
                Save ₹{currentVariant.mrp - currentVariant.price}
              </span>
            </div>
            <p className="mt-1.5 text-xs text-muted-foreground">Inclusive of all taxes. Free delivery on orders above ₹499.</p>

            {/* Variant Selector */}
            <div className="mt-7">
              <p className="text-sm font-semibold mb-3 text-foreground">Select Size:</p>
              <div className="flex flex-wrap gap-3">
                {variants.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setActiveVariant(v)}
                    className={`relative rounded-2xl border-2 px-6 py-3 text-sm font-bold transition-all ${
                      currentVariant.id === v.id
                        ? "border-primary bg-primary/8 text-primary shadow-md scale-[1.03]"
                        : "border-border bg-background text-muted-foreground hover:border-primary/50 hover:text-foreground"
                    }`}
                  >
                    {v.label}
                    <br />
                    <span className="text-xs font-semibold">₹{v.price}</span>
                    {v.popular && (
                      <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 rounded-full bg-primary px-2 py-0.5 text-[10px] font-bold text-primary-foreground whitespace-nowrap">
                        Most Popular
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-7 flex items-center gap-4">
              <p className="text-sm font-semibold">Quantity:</p>
              <div className="flex items-center border border-border rounded-full overflow-hidden">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="px-4 py-2 text-lg font-bold text-muted-foreground hover:bg-muted transition-colors"
                >−</button>
                <span className="px-5 py-2 font-bold text-base min-w-[2.5rem] text-center">{qty}</span>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  className="px-4 py-2 text-lg font-bold text-muted-foreground hover:bg-muted transition-colors"
                >+</button>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() =>
                  toast.success(
                    `${qty}× Pahadi A2 Ghee (${currentVariant.label}) added to cart!`,
                  )
                }
                className="flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-bold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-xl active:scale-[0.98]"
              >
                <ShoppingBag className="h-5 w-5" />
                Add to Cart — ₹{currentVariant.price * qty}
              </button>
              <button
                onClick={() =>
                  toast.success("Proceeding to checkout…")
                }
                className="flex flex-1 items-center justify-center gap-2 rounded-full border-2 border-primary px-8 py-4 text-base font-bold text-primary transition-all hover:bg-primary hover:text-primary-foreground active:scale-[0.98]"
              >
                Buy Now
              </button>
            </div>

            {/* Quick Trust badges */}
            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                { icon: Leaf,        label: "100% A2 Milk" },
                { icon: ShieldCheck, label: "Lab Certified" },
                { icon: Truck,       label: "Free Delivery" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-1.5 rounded-2xl bg-muted/40 py-3 px-2 text-center">
                  <Icon className="h-5 w-5 text-primary" />
                  <span className="text-xs font-semibold text-foreground">{label}</span>
                </div>
              ))}
            </div>

            {/* Highlights */}
            <div className="mt-7 rounded-2xl border border-border bg-muted/30 p-5 space-y-2.5">
              {[
                "Made from 100% grass-fed Himalayan Gir cows",
                "Traditional bilona method — 25L milk per 1L ghee",
                "Zero additives, preservatives, or artificial flavours",
                "Packed in premium, food-safe amber glass jars",
                "3rd-party lab tested for purity & A2 protein presence",
                "Directly sourced from small Pahadi farmers",
              ].map((point) => (
                <div key={point} className="flex items-start gap-2.5 text-sm text-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Full-width Trust Badges ── */}
      <section className="bg-[#f9f4eb] border-y border-border py-10">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
            {trustBadges.map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex flex-col items-center text-center gap-2.5">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 border border-primary/20">
                  <Icon className="h-6 w-6 text-primary" />
                </span>
                <div>
                  <p className="text-sm font-bold text-foreground">{label}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It's Made ── */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest text-primary uppercase">The Ancient Art</span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-foreground">How Every Jar Is Made</h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              Our bilona ghee follows a 4-step Vedic process that has not changed in thousands of years. There are no shortcuts.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howMade.map((step) => (
              <div key={step.step} className="relative rounded-2xl border border-border bg-muted/20 p-7 overflow-hidden group hover:shadow-md transition-all">
                <span className="absolute -top-4 -right-4 text-8xl font-black text-primary/6 select-none group-hover:text-primary/10 transition-colors">
                  {step.step}
                </span>
                <span className="inline-block rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground mb-4">
                  Step {step.step}
                </span>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Process image strip */}
          <div className="mt-10 grid grid-cols-3 gap-4 rounded-3xl overflow-hidden">
            <img src={bilona} alt="Bilona churning process" className="w-full h-52 object-cover" />
            <img src={pahadiBilona} alt="Traditional pahadi bilona ghee" className="w-full h-52 object-cover" />
            <img src={farmersImg} alt="Gir cow farmers in Himalayas" className="w-full h-52 object-cover" />
          </div>
        </div>
      </section>

      {/* ── Health Benefits ── */}
      <section className="py-16 lg:py-20 bg-[#f9f4eb]">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest text-primary uppercase">Why Choose A2 Ghee</span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-foreground">
              Science & Ayurveda Combined
            </h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              Traditional wisdom backed by modern nutrition science — A2 bilona ghee is unlike any other fat on earth.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-2xl bg-background border border-border p-7 hover:shadow-md transition-all group">
                <div className="flex items-start gap-3 mb-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </span>
                  <h3 className="font-display text-base font-bold text-foreground">{b.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed pl-12">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Nutrition Facts ── */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold tracking-widest text-primary uppercase">Transparency First</span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Nutrition Facts Per 100g
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We believe in full transparency. Every batch of our A2 ghee is tested in an FSSAI-accredited third-party laboratory. The nutritional values below are based on the most recent lab analysis.
              </p>
              <div className="rounded-2xl border border-border overflow-hidden">
                <div className="bg-foreground text-background px-5 py-3 font-bold text-sm">
                  Nutritional Information (Per 100g)
                </div>
                {nutrition.map((row, i) => (
                  <div
                    key={row.label}
                    className={`flex items-center justify-between px-5 py-3 text-sm ${
                      i % 2 === 0 ? "bg-background" : "bg-muted/30"
                    }`}
                  >
                    <span className="text-foreground font-medium">{row.label}</span>
                    <span className="font-bold text-primary">{row.per100}</span>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                * Values are approximate and may vary slightly batch to batch. Our lab reports are available on request.
              </p>
            </div>

            <div className="relative">
              <img
                src={pahadiFarm}
                alt="Lush Pahadi cow farm in Himalayas"
                className="w-full rounded-3xl object-cover aspect-[4/5] shadow-xl"
              />
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-background/90 backdrop-blur-sm border border-border p-5">
                <p className="font-bold text-foreground mb-1">Sourced from Altitudes above 2,000m</p>
                <p className="text-xs text-muted-foreground">
                  Our Gir cows graze on wild Himalayan herbs, giving the ghee its unique nutritional profile and golden colour.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Reviews ── */}
      <section className="py-16 lg:py-20 bg-[#f9f4eb]">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest text-primary uppercase">Customer Reviews</span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-foreground">
              What Our Customers Say
            </h2>
            <div className="mt-4 flex items-center justify-center gap-2">
              <Stars rating={5} />
              <span className="font-bold">4.9 out of 5</span>
              <span className="text-muted-foreground">· 862 verified reviews</span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {productReviews.map((rev) => (
              <div
                key={rev.name}
                className="rounded-2xl bg-background border border-border p-6 flex flex-col gap-3 hover:shadow-md transition-all"
              >
                <MessageSquareQuote className="h-6 w-6 text-primary/40" />
                <Stars rating={rev.rating} />
                <p className="text-sm text-foreground leading-relaxed">{rev.text}</p>
                <div className="mt-auto pt-3 border-t border-border flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-foreground">{rev.name}</p>
                    <p className="text-xs text-muted-foreground">{rev.city}</p>
                  </div>
                  {rev.verified && (
                    <span className="text-[10px] font-semibold text-green-600 flex items-center gap-1">
                      <CheckCircle2 className="h-3 w-3" /> Verified
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="mx-auto max-w-3xl px-4">
          <div className="text-center mb-10">
            <span className="text-xs font-bold tracking-widest text-primary uppercase">FAQ</span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-foreground">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border bg-background overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-foreground hover:bg-muted/30 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronRight
                    className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${openFaq === i ? "rotate-90" : ""}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-16 bg-primary">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground">
            Ready to Taste Real Pahadi Ghee?
          </h2>
          <p className="mt-4 text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Over 862 families across India have already switched to Dharti Organics. Join them and feel the difference of 100% pure, tradition-crafted A2 bilona ghee.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => toast.success("Added to cart!")}
              className="flex items-center gap-2 rounded-full bg-background px-8 py-4 text-base font-bold text-primary transition-all hover:bg-background/90 hover:shadow-xl active:scale-[0.98]"
            >
              <ShoppingBag className="h-5 w-5" />
              Order Now — Starting ₹499
            </button>
            <Link
              to="/shop"
              className="flex items-center gap-2 rounded-full border-2 border-primary-foreground px-8 py-4 text-base font-bold text-primary-foreground transition-all hover:bg-primary-foreground/10"
            >
              Browse All Products
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
