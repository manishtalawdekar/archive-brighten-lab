import Layout from "@/components/Layout";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowRight } from "lucide-react";

const products = [
  { brand: "Dorma", category: "Door Controls & Automatic Doors", desc: "World leader in door controls, automatic doors, glass fittings, and access solutions. German engineering meeting architectural beauty." },
  { brand: "Skyfold", category: "Operable Walls", desc: "Revolutionary vertically folding operable walls descending from the ceiling. Ideal for hotels, convention centres, and corporate spaces." },
  { brand: "FunderMax", category: "Exterior & Interior Cladding", desc: "Premium high-pressure laminates for interior and exterior cladding. Austrian-engineered panels with limitless design possibilities." },
  { brand: "McKeon", category: "Fire & Smoke Protection", desc: "Fire and smoke-rated door and shutter systems including rolling fire doors, fire shutters, and smoke curtains for large openings." },
  { brand: "Drainvac", category: "Central Vacuum Systems", desc: "Central vacuum systems for commercial and residential applications. Powerful, quiet, and efficient ducted vacuuming solutions." },
  { brand: "Geggus", category: "Entrance Matting Systems", desc: "Architectural entrance matting systems from Germany. Recessed and surface-mounted mats combining functionality with elegant design." },
];

const Products = () => {
  const { ref, visible } = useScrollReveal();

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
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
