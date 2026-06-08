import { DoorOpen, PanelTop, Layers, Flame, LucideIcon } from "lucide-react";
import dormaImg from "@/assets/products/dorma.jpg";
import skyfoldImg from "@/assets/products/skyfold.jpg";
import mckeonImg from "@/assets/products/mckeon.jpg";
import merinoImg from "@/assets/products/merino.jpg";

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
    brand: "Merino",
    icon: Layers,
    image: merinoImg,
    category: "Laminates & Surfaces",
    desc: "India's leading manufacturer of premium decorative laminates, compact panels, and surfacing solutions for interior and exterior applications.",
    details: [
      "Decorative high-pressure laminates",
      "Exterior compact HPL panels",
      "Restroom cubicle & locker systems",
      "Wide range of decors, woodgrains & solids",
      "Fire-rated & anti-bacterial options",
      "Digital & custom laminates",
      "Ventilated facade systems",
    ],
    longDesc:
      "Merino is one of India's most trusted names in decorative laminates and surfacing solutions, exported to more than 80 countries. Their range spans interior decorative laminates, exterior compact-grade HPL facade panels, restroom cubicle systems, and specialty surfaces. With hundreds of decors across woodgrains, solids, stones, and digital prints, Merino enables designers to create distinctive interiors and resilient building facades that stand up to India's demanding climate.",
  },
];
