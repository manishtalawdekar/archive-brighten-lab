import Layout from "@/components/Layout";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowRight, X, CheckCircle2, DoorOpen, PanelTop, Layers, Flame, Wind, Footprints, LucideIcon } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const products: { brand: string; category: string; desc: string; icon: LucideIcon; details: string[]; longDesc: string }[] = [
  {
    brand: "Dorma",
    icon: DoorOpen,
    category: "Door Controls & Automatic Doors",
    desc: "World leader in door controls, automatic doors, glass fittings, and access solutions. German engineering meeting architectural beauty.",
    details: [
      "Automatic sliding & swing door systems",
      "Door closers & floor springs",
      "Glass fittings & patch fittings",
      "Movable wall systems",
      "Electronic access control solutions",
      "Panic & emergency exit hardware",
    ],
    longDesc:
      "Dorma is a global leader in premium access solutions and services. Their comprehensive product range covers everything from door closers and automatic door systems to glass fittings and movable wall systems. With decades of German engineering expertise, Dorma products are found in airports, hospitals, hotels, commercial buildings, and prestigious residences worldwide. Every product is designed to combine aesthetics with reliability, ensuring seamless architectural integration.",
  },
  {
    brand: "Skyfold",
    icon: PanelTop,
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
    category: "Exterior & Interior Cladding",
    desc: "Premium high-pressure laminates for interior and exterior cladding. Austrian-engineered panels with limitless design possibilities.",
    details: [
      "Exterior compact HPL panels",
      "Interior decorative laminates",
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
];

const Products = () => {
  const { ref, visible } = useScrollReveal();
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <Layout>
      <section className="bg-gradient-navy py-20 md:py-28">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold font-display text-primary-foreground mb-4">
            Our <span className="text-gradient-gold">Products</span>
          </h1>
          <p className="text-primary-foreground/70 max-w-2xl text-lg">
            A comprehensive portfolio of world-class architectural products from the finest global manufacturers.
          </p>
        </div>
      </section>

      <section ref={ref} className="py-20 md:py-28">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <div
                key={p.brand}
                className={`group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:border-accent/30 transition-all duration-500 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="h-44 bg-muted flex items-center justify-center">
                  <span className="text-3xl font-bold font-display text-muted-foreground/30">{p.brand}</span>
                </div>
                <div className="p-6">
                  <span className="text-xs uppercase tracking-wider text-accent font-semibold">{p.category}</span>
                  <h3 className="text-xl font-bold font-display text-foreground mt-1 mb-3">{p.brand}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.desc}</p>
                  <button
                    onClick={() => setSelected(i)}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:gap-2 transition-all cursor-pointer"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Detail Dialog */}
      <Dialog open={selected !== null} onOpenChange={() => setSelected(null)}>
        {selected !== null && (
          <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
            <DialogHeader>
              <span className="text-xs uppercase tracking-wider text-accent font-semibold">
                {products[selected].category}
              </span>
              <DialogTitle className="text-2xl md:text-3xl font-display text-foreground">
                {products[selected].brand}
              </DialogTitle>
              <DialogDescription className="text-muted-foreground leading-relaxed pt-2">
                {products[selected].longDesc}
              </DialogDescription>
            </DialogHeader>

            <div className="mt-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-3">
                Key Products & Features
              </h4>
              <div className="grid sm:grid-cols-2 gap-2">
                {products[selected].details.map((d) => (
                  <div key={d} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    {d}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-border">
              <Link to="/contact" onClick={() => setSelected(null)}>
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold h-11">
                  Enquire About {products[selected].brand}
                </Button>
              </Link>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </Layout>
  );
};

export default Products;
