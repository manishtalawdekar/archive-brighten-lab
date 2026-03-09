import { DoorOpen, PanelTop, Layers, Flame, Wind, Footprints, LayoutGrid, ShieldCheck, Lock, SlidersHorizontal, LucideIcon } from "lucide-react";
import dormaImg from "@/assets/products/dorma.jpg";
import dormaOpeningImg from "@/assets/products/dorma-opening.jpg";
import dormaSecuringImg from "@/assets/products/dorma-securing.jpg";
import dormaDividingImg from "@/assets/products/dorma-dividing.jpg";
import skyfoldImg from "@/assets/products/skyfold.jpg";
import fundermaxImg from "@/assets/products/fundermax.jpg";
import mckeonImg from "@/assets/products/mckeon.jpg";
import drainvacImg from "@/assets/products/drainvac.jpg";
import geggusImg from "@/assets/products/geggus.jpg";
import armstrongImg from "@/assets/products/armstrong.jpg";
import firedoorImg from "@/assets/products/firedoor.jpg";

export type Product = {
  brand: string;
  category: string;
  desc: string;
  icon: LucideIcon;
  image: string;
  details: string[];
  longDesc: string;
};

export type DormaCatalog = {
  title: string;
  desc: string;
  icon: LucideIcon;
  image: string;
  products: { name: string; desc: string }[];
};

export const dormaCatalogs: DormaCatalog[] = [
  {
    title: "Opening & Closing",
    desc: "Complete range of door closers, automatic doors, and operators for seamless building access.",
    icon: DoorOpen,
    image: dormaOpeningImg,
    products: [
      { name: "Door Closers", desc: "Overhead and concealed door closers for controlled, safe door operation" },
      { name: "Floor Springs", desc: "Heavy-duty floor-mounted pivot systems for glass and timber doors" },
      { name: "Automatic Sliding Doors", desc: "Sensor-activated sliding door systems for high-traffic entrances" },
      { name: "Automatic Swing Doors", desc: "Electromechanical swing door operators for barrier-free access" },
      { name: "Revolving Doors", desc: "Manual and automatic revolving doors for prestigious building entrances" },
      { name: "Industrial Doors", desc: "High-speed and sectional doors for industrial and logistics facilities" },
    ],
  },
  {
    title: "Securing",
    desc: "Electronic access control, locks, and security solutions for modern buildings.",
    icon: Lock,
    image: dormaSecuringImg,
    products: [
      { name: "Electronic Access Control", desc: "Card readers, biometric scanners, and digital access management" },
      { name: "Mechanical Locks", desc: "Mortise locks, cylinder systems, and master key solutions" },
      { name: "Panic & Emergency Exit Hardware", desc: "Touch bars, push pads, and panic bolts for emergency egress" },
      { name: "Glass Door Locks", desc: "Patch fittings and locks designed specifically for frameless glass doors" },
      { name: "Hotel Locking Systems", desc: "RFID card-based hotel room access and management systems" },
      { name: "Time & Attendance", desc: "Integrated workforce management and time recording terminals" },
    ],
  },
  {
    title: "Dividing",
    desc: "Movable walls and partition systems for flexible space management.",
    icon: SlidersHorizontal,
    image: dormaDividingImg,
    products: [
      { name: "Movable Walls – Variflex", desc: "Manually operated acoustic movable wall partitions up to STC 56" },
      { name: "Movable Walls – Variflat", desc: "Glass and solid panel sliding partition systems" },
      { name: "Sliding Wall Systems", desc: "Top-hung sliding walls for banquet halls and conference rooms" },
      { name: "Glass Partitions", desc: "Frameless glass movable walls for modern transparent interiors" },
      { name: "Acoustic Seals", desc: "Drop seals and perimeter seals for superior sound insulation" },
      { name: "Operable Wall Accessories", desc: "Tracks, trolleys, and pass doors for operable wall systems" },
    ],
  },
];

export const products: Product[] = [
  {
    brand: "Dorma",
    icon: DoorOpen,
    image: dormaImg,
    category: "Door Controls & Automatic Doors",
    desc: "World leader in door controls, automatic doors, glass fittings, and access solutions. German engineering meeting architectural beauty.",
    details: [
      "Door closers & floor springs",
      "Automatic sliding & swing door systems",
      "Revolving doors",
      "Electronic access control",
      "Panic & emergency exit hardware",
      "Movable wall – sliding acoustic partitions",
      "Glass fittings & shower enclosures",
      "Hotel locking systems",
      "Industrial high-speed doors",
    ],
    longDesc:
      "Dorma is a global leader in premium access solutions and services. Their comprehensive product range is organised into three catalogs — Opening & Closing, Securing, and Dividing — covering everything from door closers and automatic door systems to electronic access control, locks, movable walls, and glass partitions. With decades of German engineering expertise, Dorma products are found in airports, hospitals, hotels, commercial buildings, and prestigious residences worldwide.",
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
    brand: "FunderMax",
    icon: Layers,
    image: fundermaxImg,
    category: "Exterior & Interior Cladding",
    desc: "Premium high-pressure laminates for interior and exterior cladding. Austrian-engineered panels with limitless design possibilities.",
    details: [
      "Exterior compact HPL panels",
      "Interior decorative laminates",
      "Facade laminates & HPL boards",
      "UV & weather resistant finishes",
      "Wide range of colours & textures",
      "Fire-rated options available",
      "Ventilated facade systems",
    ],
    longDesc:
      "FunderMax is an Austrian manufacturer of premium high-pressure laminates (HPL) for both exterior cladding and interior applications. Their compact panels are engineered for extreme weather resistance, UV stability, and long-term colour retention. Available in hundreds of decors including wood, stone, metallic, and custom digital prints, FunderMax panels enable architects to realise bold, lasting facades. Their ventilated facade systems also provide excellent thermal insulation and energy efficiency.",
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
    brand: "Drainvac",
    icon: Wind,
    image: drainvacImg,
    category: "Central Vacuum Systems",
    desc: "Central vacuum systems for commercial and residential applications. Powerful, quiet, and efficient ducted vacuuming solutions.",
    details: [
      "Central ducted vacuum systems",
      "Commercial & residential models",
      "HEPA filtration technology",
      "Ultra-quiet operation",
      "Automatic dustpan inlets",
      "Low maintenance & long life",
    ],
    longDesc:
      "Drainvac is a North American leader in central vacuum systems, providing powerful, hygienic, and whisper-quiet cleaning solutions. Unlike portable vacuums, Drainvac's ducted systems exhaust dust and allergens completely outside the living space, dramatically improving indoor air quality. Their commercial systems are trusted in hotels, hospitals, and large residential complexes, while residential units deliver convenience with features like automatic dustpan inlets and HEPA filtration.",
  },
  {
    brand: "Geggus",
    icon: Footprints,
    image: geggusImg,
    category: "Entrance Matting Systems",
    desc: "Architectural entrance matting systems from Germany. Recessed and surface-mounted mats combining functionality with elegant design.",
    details: [
      "Recessed entrance mat systems",
      "Surface-mounted matting",
      "Aluminium & rubber profiles",
      "Custom sizes & shapes",
      "Heavy-duty commercial grade",
      "Integrated drainage options",
    ],
    longDesc:
      "Geggus is a German manufacturer specialising in premium entrance matting systems that protect interior flooring while enhancing building aesthetics. Their recessed and surface-mounted mats use a combination of aluminium profiles, rubber inserts, and textile strips to effectively remove dirt, moisture, and debris from footwear. Geggus mats are specified for airports, corporate lobbies, hotels, hospitals, and retail spaces where first impressions and floor protection are equally important.",
  },
  {
    brand: "Armstrong",
    icon: LayoutGrid,
    image: armstrongImg,
    category: "False Ceilings & Flooring",
    desc: "Global leader in ceiling and flooring solutions. Mineral fiber tiles, metal ceilings, and premium flooring for commercial and institutional spaces.",
    details: [
      "Mineral fiber ceiling tiles",
      "Metal ceiling systems",
      "Acoustic ceiling solutions",
      "Suspension grid systems",
      "Commercial vinyl flooring",
      "Custom design & colour options",
    ],
    longDesc:
      "Armstrong is the world's leading manufacturer of ceiling and flooring products, trusted by architects and builders for over a century. Their mineral fiber ceiling tiles deliver superior acoustics, light reflectance, and humidity resistance. Metal ceiling systems offer bold design possibilities for lobbies, airports, and retail spaces. Armstrong's flooring range includes luxury vinyl tiles and commercial-grade resilient flooring engineered for durability and ease of maintenance in high-traffic environments.",
  },
  {
    brand: "Fire Door",
    icon: ShieldCheck,
    image: firedoorImg,
    category: "Fire Rated Doors",
    desc: "Specialised fire-rated door systems for commercial and industrial buildings. Certified doors ensuring life safety and code compliance.",
    details: [
      "Fire-rated steel doors (1–4 hour)",
      "Fire-rated glass doors",
      "Smoke-tight door assemblies",
      "Emergency exit & panic hardware",
      "IS & BS certified products",
      "Custom sizes for large openings",
    ],
    longDesc:
      "Fire Door products provide certified fire-rated door solutions essential for life safety in modern buildings. Their range includes steel, glass, and composite fire doors tested and certified to international standards. These doors are critical components in fire compartmentation strategies, preventing the spread of fire and smoke between building zones. Specified by fire consultants and architects for hospitals, hotels, data centres, and high-rise buildings across India and the Middle East.",
  },
];
