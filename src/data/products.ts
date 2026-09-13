import jarA2 from "@/assets/jar-a2.jpg";
import jarPahadi from "@/assets/jar-pahadi.jpg";
import jarBuffalo from "@/assets/jar-buffalo.jpg";
import heroGhee from "@/assets/hero-ghee.jpg";
import shilajit from "@/assets/pahadi-shilajit.jpg";

export type ProductType = "Cow" | "Buffalo" | "Shilajit";
export type Weight = "20g" | "200g" | "250g" | "500g" | "1L";

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  type: ProductType;
  weight: Weight;
  price: number;
  mrp: number;
  rating: number;
  reviews: number;
  popularity: number;
  added: number; // newness rank, higher = newer
  image: string;
  tag?: string;
}

export const products: Product[] = [
  {
    id: "shilajit-20",
    name: "Pure Pahadi Shilajit 20g",
    subtitle: "Mineral-rich Himalayan resin, purified in small batches",
    type: "Shilajit",
    weight: "20g",
    price: 1299,
    mrp: 1599,
    rating: 4.7,
    reviews: 146,
    popularity: 88,
    added: 9,
    image: shilajit,
    tag: "Pahadi pure",
  },
  {
    id: "a2-200",
    name: "A2 Gir Cow Ghee 200g",
    subtitle: "Bilona churned, grass-fed Gir cows",
    type: "Cow",
    weight: "200g",
    price: 499,
    mrp: 649,
    rating: 4.6,
    reviews: 214,
    popularity: 72,
    added: 3,
    image: jarA2,
    tag: "Trial pack",
  },
  {
    id: "a2-500",
    name: "A2 Gir Cow Ghee 500g",
    subtitle: "Our bestseller, slow-cooked in earthen pots",
    type: "Cow",
    weight: "500g",
    price: 1149,
    mrp: 1399,
    rating: 4.9,
    reviews: 862,
    popularity: 98,
    added: 5,
    image: heroGhee,
    tag: "Bestseller",
  },
  {
    id: "a2-1l",
    name: "A2 Gir Cow Ghee 1 Litre",
    subtitle: "Family jar, 25 litres of milk per litre of ghee",
    type: "Cow",
    weight: "1L",
    price: 2149,
    mrp: 2599,
    rating: 4.8,
    reviews: 531,
    popularity: 91,
    added: 4,
    image: jarA2,
    tag: "Best value",
  },
  {
    id: "pahadi-200",
    name: "Pure Pahadi Ghee 200g",
    subtitle: "Himalayan hill cows grazing on wild herbs",
    type: "Cow",
    weight: "200g",
    price: 549,
    mrp: 699,
    rating: 4.5,
    reviews: 168,
    popularity: 64,
    added: 7,
    image: jarPahadi,
  },
  {
    id: "pahadi-500",
    name: "Pure Pahadi Ghee 500g",
    subtitle: "Hand-churned in the hills of Uttarakhand",
    type: "Cow",
    weight: "500g",
    price: 1249,
    mrp: 1549,
    rating: 4.7,
    reviews: 392,
    popularity: 85,
    added: 8,
    image: jarPahadi,
    tag: "New",
  },
  {
    id: "pahadi-1l",
    name: "Pure Pahadi Ghee 1 Litre",
    subtitle: "Deep aroma, granular texture, small batch",
    type: "Cow",
    weight: "1L",
    price: 2349,
    mrp: 2799,
    rating: 4.8,
    reviews: 246,
    popularity: 77,
    added: 6,
    image: jarPahadi,
  },
  {
    id: "buffalo-250",
    name: "Buffalo Ghee 250g",
    subtitle: "Creamy white, rich in healthy fats",
    type: "Buffalo",
    weight: "250g",
    price: 449,
    mrp: 549,
    rating: 4.3,
    reviews: 121,
    popularity: 48,
    added: 1,
    image: jarBuffalo,
  },
  {
    id: "buffalo-1l",
    name: "Buffalo Ghee 1 Litre",
    subtitle: "Ideal for sweets, halwa and everyday cooking",
    type: "Buffalo",
    weight: "1L",
    price: 1649,
    mrp: 1999,
    rating: 4.4,
    reviews: 203,
    popularity: 59,
    added: 2,
    image: jarBuffalo,
  },
];

export const reviews = [
  {
    name: "Ananya Sharma",
    city: "Bengaluru",
    rating: 5,
    text: "The A2 500g jar smells exactly like my grandmother's kitchen. Granular, aromatic and it lasts long.",
  },
  {
    name: "Rohit Verma",
    city: "Delhi",
    rating: 5,
    text: "Switched from a supermarket brand and there is no comparison. The Pahadi ghee has a nutty depth to it.",
  },
  {
    name: "Meera Iyer",
    city: "Pune",
    rating: 4,
    text: "Delivery was quick and the jar arrived sealed well. My son's rotis finally taste like home.",
  },
  {
    name: "Karan Gill",
    city: "Chandigarh",
    rating: 5,
    text: "Buffalo ghee for sweets is unbeatable. Ordered the 1 litre jar twice already this year.",
  },
];
