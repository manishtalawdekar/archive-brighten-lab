import { DoorOpen, PanelTop, Layers, Flame, LucideIcon } from "lucide-react";
import dormaImg from "@/assets/products/dorma.jpg";
import skyfoldImg from "@/assets/products/skyfold.jpg";
import mckeonImg from "@/assets/products/mckeon.jpg";
import marinoImg from "@/assets/products/marino.jpg";

export type Product = {
  brand: string;
  category: string;
  desc: string;
  icon: LucideIcon;
  image: string;
  details: string[];
  longDesc: string;
};

export const products: Product[] = [
  {
    brand: "dormakaba",
    icon: DoorOpen,
    image: dormaImg,
    category: "Door Controls & Automatic Doors",
    desc: "World leader in door controls, automatic doors, glass fittings, and access solutions. German-Swiss engineering meeting architectural beauty.",
    details: [
      "Door closers & floor springs",
      "Hinges & pivot systems",
      "Glass fittings & accessories",
      "Shower enclosures",
      "Manual sliding systems",
      "Automatic sliding & swing door systems",
      "Movable wall – sliding acoustic partitions",
      "Electronic access control solutions",
      "Panic & emergency exit hardware",
    ],
    longDesc:
      "dormakaba is a global leader in premium access solutions and services. Their comprehensive product range covers everything from door closers, floor springs, and hinges to automatic door systems, glass fittings, shower enclosures, and movable wall systems. With decades of German-Swiss engineering expertise, dormakaba products are found in airports, hospitals, hotels, commercial buildings, and prestigious residences worldwide. Every product is designed to combine aesthetics with reliability, ensuring seamless architectural integration.",
  },
  {
    brand: "Skyfold",
    icon: PanelTop,
    image: skyfoldImg,
    category: "Operable Walls",
    desc: "Revolutionary vertically folding operable walls descending from the ceiling. Ideal for hotels, convention centres, and corporate spaces.",
    details: [
      "Vertically folding operable walls",
      "Acoustic separation up to STC 55",
      "Fully automatic operation",
      "No floor tracks required",
      "Custom finishes & panel options",
      "Ideal for ballrooms & conference halls",
    ],
    longDesc:
      "Skyfold is the world's only vertically folding operable wall, stored entirely above the ceiling when not in use. At the touch of a button, panels descend silently to create acoustically separated spaces — no floor tracks, no manual handling, no storage requirements. Skyfold walls are specified by leading architects for five-star hotels, convention centres, boardrooms, and educational institutions where flexible space division and premium aesthetics are non-negotiable.",
  },
  {
    brand: "McKeon",
    icon: Flame,
    image: mckeonImg,
    category: "Fire & Smoke Protection",
    desc: "Fire and smoke-rated door and shutter systems including rolling fire doors, fire shutters, and smoke curtains for large openings.",
    details: [
      "Rolling fire doors (up to 4-hour rating)",
      "Fire-rated counter shutters",
      "Smoke & draft curtains",
      "Horizontal sliding fire doors",
      "UL listed & FM approved",
      "Automatic release on fire alarm",
    ],
    longDesc:
      "McKeon Door Company has been the industry standard in fire and smoke protection for over 40 years. Their life-safety products protect large openings in commercial, industrial, and institutional buildings. McKeon fire doors and shutters are UL listed, FM approved, and trusted by fire engineers and building code consultants worldwide. From convention centres to shopping malls, McKeon products provide code-compliant protection without compromising architectural design.",
  },
  {
    brand: "Marino Toilet Partitions",
    icon: Layers,
    image: marinoImg,
    category: "Toilet Cubicle Systems",
    desc: "Premium toilet partition and cubicle systems engineered for commercial washrooms — durable, hygienic, and architecturally refined.",
    details: [
      "Compact laminate cubicle systems",
      "Floor-mounted & ceiling-hung options",
      "Moisture, impact & scratch resistant",
      "Anti-bacterial surface finishes",
      "Stainless steel hardware & fittings",
      "Wide range of decors & colours",
      "Custom sizes for any washroom layout",
    ],
    longDesc:
      "Marino Toilet Partitions deliver premium cubicle systems for commercial, institutional, and hospitality washrooms. Built around compact-grade laminate panels, every system is engineered to withstand heavy traffic while maintaining a clean, contemporary aesthetic. Moisture-proof construction, anti-bacterial surfaces, and corrosion-resistant stainless steel hardware ensure long service life. With a wide palette of decors, finishes, and configurations — including floor-mounted and ceiling-hung options — Marino partitions suit airports, malls, offices, hotels, and educational campuses.",
  },
];
