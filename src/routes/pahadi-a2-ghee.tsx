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
import ghee1 from "@/assets/ghee1.webp";
import ghee2 from "@/assets/ghee2.webp";

// ── images ────────────────────────────────────────────────────────────
// Product images, generated high-res assets, and Pahadi storytelling images
const gheeJarHero    = "/ghee-jar-hero.jpg";
const gheePourImg    = "/ghee-pour.png";
const processBanner  = "/ghee-process-banner.png";
const gheeTawaImg    = "/ghee-tawa-pour.png";
const gheeTextureImg = "/a2-ghee-texture.png";
const bilonaPotImg   = "/a2-bilona-pot.png";
const girCowsImg    = "/a2-gir-cows.png";
const gheebenefits   = "/ghee-benefits.jpg";
const gheePure       = "/ghee-pure.jpg";
const bilonaProcess  = "/bilona-process.jpg";
const pahadiFarm     = "/pahadi-farm.jpg";

// ── SEO ────────────────────────────────────────────────────────────────
export const Route = createFileRoute("/pahadi-a2-ghee")({
  head: () => ({
    meta: [
      {
        title:
          "Pahadi A2 Gir Cow Bilona Ghee | 100% Pure & Vedic | Panchganga Organics",
      },
      {
        name: "description",
        content:
          "Buy authentic Pahadi A2 Gir Cow Bilona Ghee online from Panchganga Organics. Hand-churned using traditional two-way wooden bilona method from grass-fed Gir cows in high Himalayas. 25L milk per 1L ghee. Lab tested pure, 0% chemicals, packed in glass.",
      },
      {
        name: "keywords",
        content:
          "Panchganga Organics, A2 ghee, Gir cow ghee, bilona ghee, pahadi ghee, pure desi ghee, organic ghee, grass-fed ghee, Himalayan ghee, buy pure ghee online, traditional ghee India, danedar ghee, A2 cow ghee price, best bilona ghee brand",
      },
      // Open Graph
      { property: "og:title", content: "Pahadi A2 Gir Cow Bilona Ghee | Panchganga Organics" },
      {
        property: "og:description",
        content:
          "Authentic Vedic bilona-method ghee from Himalayan Gir cows. 25L of milk per 1L of ghee. 3rd-party lab tested. Order now from Panchganga Organics.",
      },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "https://panchgangaorganics.com/pahadi-a2-ghee" },
      { property: "og:image", content: "https://panchgangaorganics.com/ghee-jar-hero.jpg" },
      { property: "og:image:alt", content: "Panchganga Organics Pahadi A2 Gir Cow Bilona Ghee in amber glass jar" },
      { property: "og:site_name", content: "Panchganga Organics" },
      { property: "og:locale", content: "en_IN" },
      { property: "product:price:amount", content: "499" },
      { property: "product:price:currency", content: "INR" },
      // Twitter Card
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Pahadi A2 Gir Cow Bilona Ghee | Panchganga Organics" },
      { name: "twitter:description", content: "100% pure Vedic bilona-method A2 ghee from Himalayan Gir cows. Hand-churned, lab tested, packed in glass. Starting ₹499." },
      { name: "twitter:image", content: "https://panchgangaorganics.com/ghee-jar-hero.jpg" },
      // Additional SEO
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "author", content: "Panchganga Organics" },
      { name: "geo.region", content: "IN-UK" },
      { name: "geo.placename", content: "Uttarakhand, India" },
    ],
    links: [
      { rel: "canonical", href: "https://panchgangaorganics.com/pahadi-a2-ghee" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "Product",
          name: "Pahadi A2 Gir Cow Bilona Ghee",
          image: [
            "https://panchgangaorganics.com/ghee-jar-hero.jpg"
          ],
          description: "Authentic Pahadi A2 Gir Cow Bilona Ghee hand-churned using traditional two-way wooden bilona method from grass-fed Gir cows in high Himalayas.",
          brand: {
            "@type": "Brand",
            name: "Panchganga Organics"
          },
          offers: {
            "@type": "AggregateOffer",
            url: "https://panchgangaorganics.com/pahadi-a2-ghee",
            priceCurrency: "INR",
            lowPrice: "499",
            highPrice: "1699",
            offerCount: "3",
            availability: "https://schema.org/InStock"
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "1247"
          }
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Why is Panchganga Organics A2 Ghee superior to commercial factory ghee?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Commercial factory ghee is produced in bulk by separating cream from mixed A1/A2 milk using industrial machines and chemical processing. Panchganga Organics follows the ancient Vedic 5-step bilona method: converting whole A2 milk into curd first, hand-churning with wooden bilona, and slow-cooking over wood fire. It takes 25 litres of pure milk for 1 litre of ghee."
              }
            },
            {
              "@type": "Question",
              name: "What makes Gir Cow A2 Milk special?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Indian indigenous Gir cows feature a hump containing the Suryaketu Nadi, which absorbs solar energy and produces milk containing only A2 beta-casein protein. Free from the A1 protein found in European hybrid cows (HF/Jersey), A2 ghee does not trigger digestive distress or inflammation."
              }
            },
            {
              "@type": "Question",
              name: "Why does bilona ghee have a grainy (danedar) golden texture?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "The granular texture and natural golden hue come from slow wood-fire cooking of cultured butter and beta-carotene present in wild mountain herbs consumed by our free-grazing Gir cows."
              }
            },
            {
              "@type": "Question",
              name: "How is the ghee packed and delivered?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Every batch is packed in premium, food-grade amber glass jars with tamper-evident seals to protect against sunlight and degradation. We ship pan-India in custom eco-cushioned packaging."
              }
            },
            {
              "@type": "Question",
              name: "Is Panchganga Organics A2 Ghee lab certified?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes! Every single batch undergoes third-party NABL-accredited laboratory testing for A2 protein verification, zero heavy metals, zero pesticide residues, and 0% chemical adulteration."
              }
            }
          ]
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://panchgangaorganics.com/" },
            { "@type": "ListItem", position: 2, name: "Shop", item: "https://panchgangaorganics.com/shop" },
            { "@type": "ListItem", position: 3, name: "Pahadi A2 Gir Cow Bilona Ghee", item: "https://panchgangaorganics.com/pahadi-a2-ghee" },
          ]
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "How Panchganga Organics A2 Bilona Ghee Is Made",
          description: "The ancient 4-step Vedic bilona process used by Panchganga Organics to produce authentic Pahadi A2 Gir Cow Ghee.",
          totalTime: "PT48H",
          step: [
            { "@type": "HowToStep", position: 1, name: "Himalayan Free-Grazing", text: "Gir cows roam freely in pristine mountain meadows above 2,000m altitude, feeding on medicinal herbs and mountain spring water." },
            { "@type": "HowToStep", position: 2, name: "Curd Culturing in Clay Pots", text: "Pure raw A2 milk is boiled over wood fire and fermented overnight into cultured curd in clay earthen pots (Matkas) using a natural starter." },
            { "@type": "HowToStep", position: 3, name: "Two-Way Wooden Bilona", text: "The curd is hand-churned bi-directionally using a wooden bilona rod — separating fresh cultured butter from buttermilk, preserving enzymes." },
            { "@type": "HowToStep", position: 4, name: "Low Heat Slow Simmering", text: "Fresh butter is slowly heated in mud pots over low wood fire until pure golden liquid ghee separates from milk solids with a rich aroma." },
          ]
        }),
      },
    ],
  }),
  component: A2GheePage,
});

// ── Data ───────────────────────────────────────────────────────────────
const variants = [
  { id: "200g", label: "200g Glass Jar", price: 499, mrp: 649 },
  { id: "500g", label: "500g Glass Jar", price: 999, mrp: 1399, popular: true },
  { id: "1L",   label: "1 Litre Glass Jar", price: 1699, mrp: 2599 },
];

const gallery = [
  { src: gheePourImg,    alt: "Steaming golden liquid A2 Ghee pouring over fresh hot Indian rotis — Panchganga Organics" },
  { src: ghee1,          alt: "Panchganga Organics Pahadi A2 Desi Cow Ghee — Traditional Vedic Packaging" },
  { src: ghee2,          alt: "Panchganga Organics Pahadi A2 Ghee — Made from Desi Cow Milk" },
  { src: processBanner,  alt: "Panchganga Organics Pahadi A2 Ghee jar with vintage brass cow bell & golden spoon" },
  { src: gheeTawaImg,    alt: "Golden liquid A2 Ghee pouring from wooden ladle onto sizzling hot paratha on cast iron tawa" },
  { src: gheeTextureImg, alt: "Close-up macro of granular golden A2 bilona ghee with brass spoon" },
  { src: bilonaPotImg,   alt: "Traditional two-way wooden bilona churning curd in a rustic matka pot" },
  { src: girCowsImg,    alt: "Pure indigenous Gir cows grazing freely in high altitude Himalayan meadows" },
];

const trustBadges = [
  { icon: Leaf,       label: "100% Pure A2 Milk",   sub: "Only Gir cow A2 protein" },
  { icon: Flame,      label: "Vedic Bilona Method",  sub: "Earthen pot hand-churned" },
  { icon: ShieldCheck,label: "NABL Lab Certified",   sub: "0% pesticides & heavy metals" },
  { icon: ZapIcon,    label: "25L Milk → 1L Ghee",   sub: "Concentrated Vedic richness" },
  { icon: Truck,      label: "Free Fast Delivery",   sub: "Packed in eco amber glass" },
  { icon: Award,      label: "Zero Additives",       sub: "100% pure, unadulterated" },
];

const benefits = [
  {
    title: "Rich A2 Beta-Casein Protein",
    desc: "Sourced exclusively from indigenous Gir cows possessing the Suryaketu Nadi. Easily digestible and gentle on sensitive stomachs compared to hybrid A1 milk.",
  },
  {
    title: "Nourishes Gut & Digestive Fire",
    desc: "Contains natural Butyric acid and medium-chain fatty acids that restore intestinal mucosal lining, stimulate Agni (digestive fire), and reduce bloating.",
  },
  {
    title: "Grainy Crystalline Texture (Danedar)",
    desc: "Slow wood-fire simmering in clay pots creates the signature granular texture and deep caramelized nutty aroma that commercial industrial ghee can never match.",
  },
  {
    title: "High Smoke Point (>250°C)",
    desc: "Unmatched thermal stability makes Panchganga A2 Ghee the healthiest fat for everyday Indian cooking — tadka, deep frying, rotis, or direct spoonfuls.",
  },
  {
    title: "Boosts Memory & Brain Health (Medhya)",
    desc: "Rich in Omega-3 & Omega-6 essential fatty acids and fat-soluble vitamins A, D, E, K that promote mental clarity, focus, and brain cell protection.",
  },
  {
    title: "Ayurvedic Sattvik Superfood",
    desc: "Vedic texts classify hand-churned A2 bilona ghee as Sattvik Aahar — building Ojas (vitality), lubricating joints, and balancing Vata & Pitta doshas.",
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
    title: "Himalayan Free-Grazing",
    desc: "Panchganga Gir cows roam freely in pristine mountain meadows above 2,000m altitude, feeding on medicinal herbs and mountain spring water.",
  },
  {
    step: "02",
    title: "Curd Culturing in Clay Pots",
    desc: "Pure raw A2 milk is boiled over wood fire and fermented overnight into cultured curd in clay earthen pots (Matkas) using a natural starter.",
  },
  {
    step: "03",
    title: "Two-Way Wooden Bilona",
    desc: "The curd is hand-churned bi-directionally using a wooden bilona rod — separating fresh cultured butter (Makhan) from buttermilk, preserving enzymes.",
  },
  {
    step: "04",
    title: "Low Heat Slow Simmering",
    desc: "Fresh butter is slowly heated in mud pots over low wood fire until pure golden liquid ghee separates from milk solids with a rich aroma.",
  },
];

const productReviews = [
  {
    name: "Ananya Sharma",
    city: "Bengaluru",
    rating: 5,
    text: "The A2 Ghee from Panchganga Organics smells exactly like my grandmother's kitchen in Dehradun. Crystalline, granular, deeply aromatic, and pure — unmatched quality!",
    verified: true,
  },
  {
    name: "Dr. Sunita Rao",
    city: "Hyderabad",
    rating: 5,
    text: "As a practicing nutritionist, I am extremely selective about ghee. The NABL lab reports from Panchganga Organics are 100% transparent. Genuinely authentic A2 bilona ghee.",
    verified: true,
  },
  {
    name: "Vikramaditya Joshi",
    city: "Dehradun",
    rating: 5,
    text: "Being a native Pahadi, I can verify Panchganga Organics ghee is 100% authentic bilona ghee crafted the traditional mountain way. The texture and aroma are superb.",
    verified: true,
  },
  {
    name: "Meera Iyer",
    city: "Pune",
    rating: 5,
    text: "The amber glass jar arrived in immaculate eco-friendly packing. The ghee has that stunning grainy golden texture — exactly as real bilona ghee should look!",
    verified: true,
  },
];

const faqs = [
  {
    q: "Why is Panchganga Organics A2 Ghee superior to commercial factory ghee?",
    a: "Commercial factory ghee is produced in bulk by separating cream from mixed A1/A2 milk using industrial machines and chemical processing. Panchganga Organics follows the ancient Vedic 5-step bilona method: converting whole A2 milk into curd first, hand-churning with wooden bilona, and slow-cooking over wood fire. It takes 25 litres of pure milk for 1 litre of ghee.",
  },
  {
    q: "What makes Gir Cow A2 Milk special?",
    a: "Indian indigenous Gir cows feature a hump containing the Suryaketu Nadi, which absorbs solar energy and produces milk containing only A2 beta-casein protein. Free from the A1 protein found in European hybrid cows (HF/Jersey), A2 ghee does not trigger digestive distress or inflammation.",
  },
  {
    q: "Why does bilona ghee have a grainy (danedar) golden texture?",
    a: "The granular texture and natural golden hue come from slow wood-fire cooking of cultured butter and beta-carotene present in wild mountain herbs consumed by our free-grazing Gir cows.",
  },
  {
    q: "How is the ghee packed and delivered?",
    a: "Every batch is packed in premium, food-grade amber glass jars with tamper-evident seals to protect against sunlight and degradation. We ship pan-India in custom eco-cushioned packaging.",
  },
  {
    q: "Is Panchganga Organics A2 Ghee lab certified?",
    a: "Yes! Every single batch undergoes third-party NABL-accredited laboratory testing for A2 protein verification, zero heavy metals, zero pesticide residues, and 0% chemical adulteration.",
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

  const currentVariant = (activeVariant || variants[0])!;
  const currentImage = (gallery[activeImage] || gallery[0])!;
  const off = Math.round(((currentVariant.mrp - currentVariant.price) / currentVariant.mrp) * 100);

  return (
    <main className="bg-background min-h-screen">
      {/* ── Breadcrumb ── */}
      <div className="border-b border-border bg-muted/20">
        <div className="mx-auto max-w-7xl px-4 py-3">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
            <Link to="/shop" className="hover:text-primary transition-colors">Shop</Link>
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="text-foreground font-medium" aria-current="page">Pahadi A2 Gir Cow Bilona Ghee</span>
          </nav>
        </div>
      </div>

      {/* ── Hero Product Section ── */}
      {/* itemScope for Product microdata */}
      <section className="mx-auto max-w-7xl px-4 py-10 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-10 xl:gap-16">

          {/* ── Image Gallery ── */}
          <div className="flex flex-col gap-4">
            {/* Main image */}
            <div className="relative overflow-hidden rounded-3xl bg-[#f9f4eb] aspect-square flex items-center justify-center">
              <img
                src={currentImage.src}
                alt={currentImage.alt}
                loading="eager"
                fetchPriority="high"
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
                  <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* ── Product Details ── */}
          <div className="flex flex-col">
            <span className="text-xs font-bold tracking-widest text-primary uppercase">
              Panchganga Organics · Sacred Himalayan A2 Ghee
            </span>

            <h1 className="mt-3 font-display text-3xl sm:text-4xl xl:text-5xl leading-tight font-bold text-foreground">
              Authentic Pahadi A2 Gir Cow<br />
              <span className="text-primary">Vedic Bilona Ghee</span>
            </h1>

            <p className="mt-3 text-base text-muted-foreground leading-relaxed">
              Hand-churned using the ancient two-way wooden bilona method from free-grazing indigenous Gir cows in high Himalayan valleys. <strong>25 litres of pure whole A2 milk yield just 1 litre</strong> of this golden, granular, life-giving ghee.
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

            {/* Low Stock Urgency */}
            <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
              </span>
              <div className="flex-1">
                <p className="text-xs font-bold text-red-700 uppercase tracking-wide">Only 9 Items Left in Stock!</p>
                <div className="mt-1.5 h-1.5 w-full rounded-full bg-red-100 overflow-hidden">
                  <div className="h-full w-[18%] rounded-full bg-red-500 transition-all" />
                </div>
              </div>
              <span className="text-xs font-semibold text-red-600 whitespace-nowrap">Selling fast</span>
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

            {/* Pure Text Highlights (No Box) */}
            <div className="mt-8 space-y-3 pt-6 border-t border-border">
              <h3 className="font-display text-xs font-bold text-primary uppercase tracking-widest mb-3">
                Uncompromising Purity Standards
              </h3>
              {[
                "Made from 100% grass-fed Himalayan Gir cows",
                "Traditional bilona method — 25L milk per 1L ghee",
                "Zero additives, preservatives, or artificial flavours",
                "Packed in premium, food-safe amber glass jars",
                "3rd-party lab tested for purity & A2 protein presence",
                "Directly sourced supporting Pahadi hill farmers",
              ].map((point) => (
                <div key={point} className="flex items-center gap-3 text-sm text-foreground/90 font-medium">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
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

          {/* Pure Text Step Timeline (No Boxes) */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {howMade.map((step) => (
              <div key={step.step} className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-black font-display text-primary">{step.step}</span>
                  <div className="h-px flex-1 bg-border/60" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-normal">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* ── Generated High-Res Visual Showcase Cards ── */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group rounded-3xl overflow-hidden border border-border bg-background shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={gheeTextureImg}
                  alt="Close-up granular golden A2 ghee crystalline texture showing danedar grains from slow wood-fire cooking"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-3 left-3 rounded-full bg-background/90 backdrop-blur-md px-3.5 py-1 text-xs font-bold text-foreground">
                  Signature Grainy Texture (Danedar)
                </span>
              </div>
              <div className="p-6">
                <h4 className="font-display text-lg font-bold text-foreground mb-2">Crystalline Golden Goodness</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Notice the rich, coarse granules formed through slow wood-fire simmering in clay pots. Commercial machine ghee cannot replicate this golden aroma and crystalline structure.
                </p>
              </div>
            </div>

            <div className="group rounded-3xl overflow-hidden border border-border bg-background shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={bilonaPotImg}
                  alt="Traditional two-way wooden bilona churning cultured curd in earthen matka pot to make A2 ghee"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-3 left-3 rounded-full bg-background/90 backdrop-blur-md px-3.5 py-1 text-xs font-bold text-foreground">
                  Vedic Matka Bilona Process
                </span>
              </div>
              <div className="p-6">
                <h4 className="font-display text-lg font-bold text-foreground mb-2">Hand-Churned Curd Butter</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Whole A2 milk is cultured into curd overnight in earthen pots and churned bi-directionally with a wooden bilona — separating live enzyme-rich butter from buttermilk.
                </p>
              </div>
            </div>

            <div className="group rounded-3xl overflow-hidden border border-border bg-background shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={girCowsImg}
                  alt="Indigenous humpbacked Gir cows grazing freely in high Himalayan meadows above 2000m altitude"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-3 left-3 rounded-full bg-background/90 backdrop-blur-md px-3.5 py-1 text-xs font-bold text-foreground">
                  Himalayan Pasture Grazing
                </span>
              </div>
              <div className="p-6">
                <h4 className="font-display text-lg font-bold text-foreground mb-2">Free-Grazing Gir Cows</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Our humpbacked Gir cows feed freely on wild medicinal mountain herbs and drink clean Himalayan mineral waters above 2,000m altitude. Zero GMO feed, zero hormones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Desi Cow Farm Banner (Matching User Reference Image 1 & 2) ── */}
      <section className="py-12 bg-background">
        <div className="mx-auto max-w-7xl px-4">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-border shadow-2xl bg-stone-900 text-white min-h-[480px] flex flex-col justify-between p-8 sm:p-12 md:p-16">
            {/* Background Image with Warm Overlay */}
            <div className="absolute inset-0 z-0">
              <img
                src={girCowsImg}
                alt="Indigenous Desi Gir Cow grazing in Himalayan farm pasture at high altitude"
                loading="lazy"
                className="w-full h-full object-cover opacity-45 scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-stone-950/30" />
            </div>

            {/* Top Text Header (Matching Ref Image) */}
            <div className="relative z-10 max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-amber-500/20 px-4 py-1.5 text-xs font-bold tracking-widest text-amber-300 uppercase border border-amber-500/30 backdrop-blur-md mb-4">
                100% Pure Indian Breed
              </span>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-none">
                Made from <span className="text-amber-400">Desi Cow Milk</span>
              </h2>
              <p className="mt-3 text-lg sm:text-xl text-stone-200 font-medium tracking-wide">
                Pure. Traditional. Naturally Golden.
              </p>
            </div>

            {/* Bottom Grid with Panchganga Packaging Spotlight */}
            <div className="relative z-10 grid md:grid-cols-3 gap-6 pt-10 items-end">
              <div className="md:col-span-2 space-y-4">
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 p-4 space-y-1">
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">Indigenous Gir Breed</span>
                    <span className="text-xs text-stone-200">Sourced exclusively from humpbacked Gir cows producing solar-enriched A2 milk.</span>
                  </div>
                  <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 p-4 space-y-1">
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">Two-Way Wooden Bilona</span>
                    <span className="text-xs text-stone-200">Cultured curd churned bi-directionally in clay matka pots over wood fire.</span>
                  </div>
                </div>
              </div>

              {/* Panchganga Packaging Spotlight Card */}
              <div className="relative flex justify-center md:justify-end">
                <div className="relative group rounded-3xl overflow-hidden border-2 border-amber-400/40 bg-stone-900/90 shadow-2xl p-3 max-w-[260px] text-center backdrop-blur-md">
                  <img
                    src={processBanner}
                    alt="Panchganga Organics Pahadi A2 Ghee Packaging"
                    className="w-full h-48 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="pt-3 pb-1 px-2">
                    <span className="text-sm font-bold font-display text-amber-300 block">Panchganga Organics</span>
                    <span className="text-[11px] text-stone-300 block mt-0.5">Pahadi A2 Desi Cow Ghee</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Visual "OUR PROCESS" Stepper + Studio Jar Banner (Matching User Ref Image 2) ── */}
      <section className="py-16 bg-[#fdfbf7] border-y border-border/80">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-10">
            <h2 className="font-display text-4xl sm:text-5xl font-black text-emerald-950 tracking-tight uppercase">
              OUR PROCESS
            </h2>
            <div className="mt-8 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 relative">
              {[
                { step: "01", label: "Fresh Desi Cow Milk", desc: "A2 milk from grass-fed Gir cows", icon: "🐄" },
                { step: "02", label: "Curd Formation", desc: "Cultured overnight in earthen pots", icon: "🥣" },
                { step: "03", label: "Hand Churned Bilona", desc: "Wooden bilona bi-directional churn", icon: "🪵" },
                { step: "04", label: "Slow Simmered Ghee", desc: "Wood-fire low heat clarification", icon: "🪔" },
              ].map((item) => (
                <div key={item.step} className="flex flex-col items-center text-center p-5 rounded-2xl bg-white border border-emerald-950/10 shadow-sm relative z-10 hover:shadow-md transition-shadow">
                  <span className="text-4xl mb-2">{item.icon}</span>
                  <span className="text-xs font-bold text-emerald-900 uppercase tracking-wider mb-1">{item.label}</span>
                  <span className="text-[11px] text-muted-foreground">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 overflow-hidden rounded-[2.5rem] bg-white border border-border shadow-xl grid md:grid-cols-2 items-center">
            <div className="p-8 md:p-14 space-y-6">
              <span className="inline-block rounded-full bg-emerald-100 px-4 py-1 text-xs font-bold text-emerald-800 uppercase tracking-widest">
                Traditional Vedic Craftsmanship
              </span>
              <h3 className="font-display text-3xl sm:text-4xl font-bold text-foreground leading-tight">
                Pure Pahadi A2 Ghee Crafted Without Compromise
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                From high-altitude Himalayan pastures directly into our glass jars. Free of any chemical processing, artificial colors, or preservatives. Pure golden nutrition for your whole family.
              </p>
              <div className="space-y-3 pt-2">
                {[
                  "A slow-crafted ritual of love and devotion.",
                  "A taste of pure, unadulterated Himalayan nature.",
                  "A sacred tradition passed down through generations.",
                ].map((text) => (
                  <div key={text} className="flex items-center gap-3 font-semibold text-foreground text-sm">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600 text-white font-bold text-xs shrink-0">✓</span>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative bg-[#f5efe6] p-8 md:p-12 flex items-center justify-center">
              <img
                src={processBanner}
                alt="Panchganga Organics Pahadi A2 Desi Cow Ghee jar with vintage brass cow bell and golden spoon on wooden surface"
                loading="lazy"
                className="w-full max-w-md rounded-2xl object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Visual "Taste of Purity" Steaming Pouring Hero Banner (Matching User Ref Images 1 & 3) ── */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            
            {/* Image with Checkmark Badges Overlay */}
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-border bg-muted/20 group">
              <img
                src={gheePourImg}
                alt="Steaming golden A2 bilona ghee pouring from traditional wooden spoon onto hot freshly cooked paratha"
                loading="lazy"
                className="w-full aspect-[4/3] sm:aspect-square object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Floating Checkmark Overlay Badges (Ref Image 1 & 3) */}
              <div className="absolute top-6 left-6 flex flex-col gap-3 max-w-[85%] z-20">
                {[
                  "A slow-crafted ritual.",
                  "A taste of purity.",
                  "A tradition passed down.",
                ].map((badge) => (
                  <div
                    key={badge}
                    className="flex items-center gap-3 rounded-2xl bg-white/95 backdrop-blur-md px-5 py-3 shadow-lg border border-amber-200/80 transition-all hover:scale-105"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-600 text-white font-black text-sm shrink-0 shadow-sm">
                      ✓
                    </span>
                    <span className="font-display font-bold text-sm sm:text-base text-stone-900 tracking-wide">
                      {badge}
                    </span>
                  </div>
                ))}
              </div>
              <span className="absolute bottom-4 right-4 rounded-full bg-stone-900/80 backdrop-blur-md px-4 py-1.5 text-xs font-bold text-white uppercase tracking-wider">
                100% Authentic Vedic Bilona
              </span>
            </div>

            {/* Content Side */}
            <div className="space-y-6 lg:pl-6">
              <span className="text-xs font-bold tracking-widest text-primary uppercase">
                The Sacred Kitchen Tradition
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Pour the Essence of <span className="text-primary">Pure Himalayan Health</span>
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                Nothing compares to the aroma of warm golden A2 ghee melting into a hot, freshly cooked Indian roti or paratha. Hand-churned from cultured curd of grass-fed Gir cows, every spoon brings rich digestive nutrition, anti-inflammatory butyric acid, and unforgettable flavor.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div className="rounded-2xl border border-border bg-muted/20 p-4">
                  <span className="font-display text-lg font-bold text-foreground block mb-1">Rich Nutty Aroma</span>
                  <span className="text-xs text-muted-foreground">Authentic wood-fire caramelized fragrance from earthen clay pots.</span>
                </div>
                <div className="rounded-2xl border border-border bg-muted/20 p-4">
                  <span className="font-display text-lg font-bold text-foreground block mb-1">Deep Crystalline Grain</span>
                  <span className="text-xs text-muted-foreground">Natural golden granules (danedar) packed with fat-soluble vitamins.</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => toast.success("Panchganga Organics Pahadi A2 Ghee added to cart!")}
                  className="rounded-full bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-xl transition-all hover:bg-primary/90 active:scale-95"
                >
                  Order Fresh Batch Now — ₹1,149 (500g)
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Pure Text Editorial: What Is This Ghee & Why Is It Pure ── */}
      <article className="py-16 lg:py-24 bg-muted/20 border-y border-border">
        <div className="mx-auto max-w-4xl px-4 space-y-16">
          
          <div className="text-center space-y-3">
            <span className="text-xs font-bold tracking-widest text-primary uppercase">Pure Himalayan Heritage</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground leading-tight">
              What Is Pahadi A2 Ghee & Why Is It 100% Pure?
            </h2>
            <p className="text-muted-foreground text-base max-w-2xl mx-auto leading-relaxed">
              An unvarnished look at the sacred biology, Vedic concentration, and ancient wisdom behind Panchganga Organics Ghee.
            </p>
          </div>

          {/* Section 1: What Is This Ghee */}
          <div className="space-y-4">
            <span className="text-xs font-bold text-primary uppercase tracking-widest block">01 · What Is This Ghee?</span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
              Pure A2 Beta-Casein From Indigenous Humpbacked Gir Cows
            </h3>
            <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
              <p>
                Panchganga Organics Pahadi A2 Ghee is clarified butter crafted exclusively from the milk of indigenous Indian Gir cows that graze freely in pristine high-altitude Himalayan valleys above 2,000 meters.
              </p>
              <p>
                Unlike foreign crossbred cows (such as Jersey or Holstein Friesian) which produce A1 milk containing mutated beta-casein proteins linked to digestive distress and gut inflammation, Indian Gir cows possess a prominent dorsal hump containing the <strong>Suryaketu Nadi</strong>. This solar-absorbing vein enriches the cow&apos;s milk with golden carotenoids and pure A2 beta-casein protein — making the ghee exceptionally light, digestible, and gut-nourishing.
              </p>
            </div>
          </div>

          <div className="h-px bg-border/60" />

          {/* Section 2: Why Is It Pure */}
          <div className="space-y-4">
            <span className="text-xs font-bold text-primary uppercase tracking-widest block">02 · Why Is It 100% Pure?</span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
              The Concentrated 25:1 Vedic Bilona Ratio & Zero Chemical Extraction
            </h3>
            <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
              <p>
                Commercial supermarket ghee is mass-produced by passing raw milk through industrial centrifugal separators to strip cream directly, which is then boiled with chemical neutralizers and synthetic fragrances. This yields high volume but destroys delicate heat-sensitive vitamins and leaves residual milk solids.
              </p>
              <p>
                At <strong>Panchganga Organics</strong>, we refuse industrial shortcuts. It takes <strong>25 litres of fresh, unskimmed A2 whole milk</strong> to extract just 1 litre of our bilona ghee. We first culture raw milk into curd overnight in earthen clay pots, churn it bi-directionally with a wooden bilona rod to separate natural white butter, and simmer it gently over a wood fire. Zero preservatives, zero chemical solvents, and 0% adulteration.
              </p>
            </div>
          </div>

          <div className="h-px bg-border/60" />

          {/* Section 3: Verified Purity */}
          <div className="space-y-4">
            <span className="text-xs font-bold text-primary uppercase tracking-widest block">03 · NABL Accredited Verification</span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
              Laboratory Certified Transparency & Eco Glass Packaging
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              Every single harvest batch is subjected to rigorous third-party testing in FSSAI & NABL accredited laboratories. We verify 100% A2 protein integrity, guarantee 0% heavy metal contamination (Lead/Arsenic), and certify 0% pesticide or synthetic chemical residues. Each jar is sealed in eco-friendly, food-safe amber glass to preserve its golden granules for 12 months.
            </p>
          </div>

        </div>
      </article>

      {/* ── Health Benefits (Pure Text Editorial Layout - No Boxes) ── */}
      <section className="py-16 lg:py-24 bg-[#f9f4eb]">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-widest text-primary uppercase">Why Choose A2 Ghee</span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-foreground">
              Science & Ayurveda Combined
            </h2>
            <p className="mt-4 text-muted-foreground text-base max-w-xl mx-auto leading-relaxed">
              Traditional Himalayan wisdom backed by modern nutrition science.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {benefits.map((b) => (
              <div key={b.title} className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <h3 className="font-display text-lg font-bold text-foreground">{b.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed pl-7">{b.desc}</p>
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
                alt="Lush green Pahadi cow farm in Himalayan valley with Gir cows grazing on mountain herbs"
                loading="lazy"
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
            Over 862 families across India have already switched to Panchganga Organics. Join them and feel the difference of 100% pure, tradition-crafted A2 bilona ghee.
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
