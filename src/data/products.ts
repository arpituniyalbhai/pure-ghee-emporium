import organicProductsAll from "@/assets/organic_products_all.png";
import rawHoney from "@/assets/raw_honey.png";
import mustardOil from "@/assets/mustard_oil.png";
import quinoaPack from "@/assets/quinoa_pack.png";
import turmericPowder from "@/assets/turmeric_powder.png";
import heroGhee from "@/assets/hero-ghee.jpg";
import jarBuffalo from "@/assets/jar-buffalo.jpg";
import shilajit from "@/assets/pahadi-shilajit.jpg";

export type ProductType = "Ghee" | "Honey" | "Oil" | "Superfood" | "Spice" | "Resin";
export type Weight = "20g" | "200g" | "250g" | "500g" | "1L" | "1kg";

export interface ProductVariant {
  id: string;
  weight: Weight;
  price: number;
  mrp: number;
}

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  type: ProductType;
  rating: number;
  reviews: number;
  popularity: number;
  added: number;
  image: string;
  tag?: string;
  variants: ProductVariant[];
  description?: string;
  /** If set, clicking the card goes here instead of /product/:id */
  dedicatedRoute?: string;
  /** If true, item shows as sold out and is not clickable */
  soldOut?: boolean;
}

export const products: Product[] = [
  {
    id: "a2-ghee",
    name: "A2 Gir Cow Ghee",
    subtitle: "Bilona churned, grass-fed Gir cows, slow-cooked in earthen pots",
    type: "Ghee",
    rating: 4.9,
    reviews: 862,
    popularity: 98,
    added: 5,
    image: "/ghee-process-banner.png",
    tag: "Bestseller",
    dedicatedRoute: "/pahadi-a2-ghee",
    description: "Our authentic A2 Gir Cow Ghee is made using the traditional bilona method. 25 litres of fresh milk go into every litre of our hand-churned ghee — nothing else does. Grass-fed and lab-tested for purity.",
    variants: [
      { id: "a2-200", weight: "200g", price: 499, mrp: 649 },
      { id: "a2-500", weight: "500g", price: 999, mrp: 1399 },
      { id: "a2-1l", weight: "1L", price: 1699, mrp: 2599 },
    ],
  },
  {
    id: "raw-honey",
    name: "Organic Raw Honey",
    soldOut: true,
    subtitle: "Unprocessed, unfiltered pure wildflower honey",
    type: "Honey",
    rating: 4.8,
    reviews: 320,
    popularity: 90,
    added: 8,
    image: rawHoney,
    tag: "Pure",
    description: "Harvested directly from wild beehives, our raw honey retains all natural enzymes and pollens. No added sugar, unpasteurized, and completely pure.",
    variants: [
      { id: "honey-250", weight: "250g", price: 349, mrp: 499 },
      { id: "honey-500", weight: "500g", price: 599, mrp: 799 },
    ],
  },
  {
    id: "mustard-oil",
    name: "Cold-Pressed Mustard Oil",
    soldOut: true,
    subtitle: "Kachi ghani, pungent and pure",
    type: "Oil",
    rating: 4.7,
    reviews: 156,
    popularity: 85,
    added: 6,
    image: mustardOil,
    description: "Extracted using traditional wooden kolhus (cold-pressed) at low temperatures to retain its strong flavor, aroma, and nutritional properties. Ideal for Indian cooking.",
    variants: [
      { id: "mustard-500", weight: "500g", price: 249, mrp: 299 },
      { id: "mustard-1l", weight: "1L", price: 449, mrp: 549 },
    ],
  },
  {
    id: "white-quinoa",
    name: "Organic White Quinoa",
    soldOut: true,
    subtitle: "High-protein, gluten-free superfood",
    type: "Superfood",
    rating: 4.6,
    reviews: 210,
    popularity: 82,
    added: 7,
    image: quinoaPack,
    tag: "Healthy",
    description: "Sustainably sourced, our organic white quinoa is a complete protein packed with essential amino acids, fiber, and minerals. Perfect for salads and bowls.",
    variants: [
      { id: "quinoa-500", weight: "500g", price: 399, mrp: 499 },
      { id: "quinoa-1kg", weight: "1kg", price: 699, mrp: 899 },
    ],
  },
  {
    id: "turmeric-powder",
    name: "Organic Turmeric Powder",
    soldOut: true,
    subtitle: "High curcumin, single-origin",
    type: "Spice",
    rating: 4.9,
    reviews: 410,
    popularity: 88,
    added: 9,
    image: turmericPowder,
    description: "Bright yellow and deeply aromatic, our organic turmeric powder is sustainably farmed and stone-ground to preserve its high curcumin content and natural oils.",
    variants: [
      { id: "turmeric-200", weight: "200g", price: 199, mrp: 249 },
    ],
  },
  {
    id: "pahadi-haldi",
    name: "Pahadi Organic Haldi",
    soldOut: true,
    subtitle: "High Curcumin (5%+), stone-ground mountain turmeric from Uttarakhand",
    type: "Spice",
    rating: 4.95,
    reviews: 384,
    popularity: 95,
    added: 2,
    image: "/pahadi-haldi.jpg",
    tag: "High Curcumin",
    description: "Hand-harvested in the high-altitude terraced farms of Uttarakhand, our Pahadi Haldi (Turmeric) is sun-dried and traditionally stone-ground. Known for its distinct vibrant orange-yellow hue, intense aroma, and powerful anti-inflammatory properties with over 5% natural curcumin content.",
    variants: [
      { id: "haldi-200", weight: "200g", price: 249, mrp: 329 },
      { id: "haldi-500", weight: "500g", price: 549, mrp: 699 },
    ],
  },
  {
    id: "pahadi-shilajit",
    name: "Pure Pahadi Shilajit",
    soldOut: true,
    subtitle: "Mineral-rich Himalayan resin, purified in small batches",
    type: "Resin",
    rating: 4.7,
    reviews: 146,
    popularity: 80,
    added: 1,
    image: shilajit,
    description: "Sourced from the pristine heights of the Himalayas, our pure shilajit is meticulously purified. A natural source of fulvic acid and trace minerals.",
    variants: [
      { id: "shilajit-20", weight: "20g", price: 1299, mrp: 1599 },
    ],
  },
];

export const reviews = [
  {
    name: "Ananya Sharma",
    city: "Bengaluru",
    rating: 5,
    text: "The A2 Ghee smells exactly like my grandmother's kitchen in Dehradun. Granular, deeply aromatic, and pure!",
    product: "Pahadi A2 Gir Cow Ghee",
    date: "Verified Buyer",
  },
  {
    name: "Rohit Verma",
    city: "Delhi",
    rating: 5,
    text: "Switched from commercial store brands to Panchganga Organics. The raw honey and Pahadi ghee are unmatched in quality.",
    product: "Organic Raw Wild Honey",
    date: "Verified Buyer",
  },
  {
    name: "Meera Iyer",
    city: "Pune",
    rating: 5,
    text: "Delivery was quick and the amber glass jar arrived sealed in protective padding. My family loves the rich taste.",
    product: "Pahadi A2 Gir Cow Ghee",
    date: "Verified Buyer",
  },
  {
    name: "Karan Gill",
    city: "Chandigarh",
    rating: 5,
    text: "The cold-pressed mustard oil has that authentic, sharp kachi ghani aroma. Perfect for traditional Indian cooking.",
    product: "Cold-Pressed Mustard Oil",
    date: "Verified Buyer",
  },
  {
    name: "Dr. Sunita Rao",
    city: "Hyderabad",
    rating: 5,
    text: "As a nutritionist, I am very picky about oils and ghee. Panchganga Organics lab report transparency sold me completely.",
    product: "Pahadi A2 Gir Cow Ghee",
    date: "Verified Buyer",
  },
  {
    name: "Vikramaditya Joshi",
    city: "Dehradun",
    rating: 5,
    text: "Being a native Pahadi myself, I can verify this is 100% genuine bilona ghee crafted the traditional mountain way.",
    product: "Pahadi A2 Gir Cow Ghee",
    date: "Verified Buyer",
  },
  {
    name: "Pooja Hegde",
    city: "Mumbai",
    rating: 5,
    text: "The stone-ground organic turmeric powder is so vibrant and aromatic. You can immediately tell it has high curcumin.",
    product: "Organic Turmeric Powder",
    date: "Verified Buyer",
  },
  {
    name: "Rajesh Bhatia",
    city: "Jaipur",
    rating: 5,
    text: "Pure Himalayan Shilajit resin. Felt a noticeable boost in energy levels within a week of regular morning use.",
    product: "Pure Pahadi Shilajit",
    date: "Verified Buyer",
  },
  {
    name: "Sneha Mukherjee",
    city: "Kolkata",
    rating: 5,
    text: "The organic white quinoa cooks light and fluffy every single time. Clean, dust-free packaging and great taste!",
    product: "Organic White Quinoa",
    date: "Verified Buyer",
  },
  {
    name: "Amitabh Sen",
    city: "Lucknow",
    rating: 5,
    text: "Honest brand, transparent lab reports, and direct farmer support. Will definitely be reordering every month.",
    product: "Organic Food Staples",
    date: "Verified Buyer",
  },
];
