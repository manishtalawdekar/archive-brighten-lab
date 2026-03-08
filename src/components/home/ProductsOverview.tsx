import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { products } from "@/data/products";

const ProductsOverview = () => {
  const [active, setActive] = useState(0);
  const { ref, visible } = useScrollReveal();

  return (
    <section ref={ref} className="py-20 md:py-28 bg-muted/30">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-3">
            Our <span className="text-accent">Principals</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Representing the finest global brands in architectural products.
          </p>
        </div>

        <div
          className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {products.map((p, i) => (
              <button
                key={p.brand}
                onClick={() => setActive(i)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  active === i
                    ? "bg-accent text-accent-foreground shadow-lg"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-accent/30"
                }`}
              >
                {p.brand}
              </button>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-card rounded-2xl border border-border p-8 md:p-12 shadow-sm">
              <span className="text-xs uppercase tracking-wider text-accent font-semibold">
                {products[active].category}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold font-display text-foreground mt-2 mb-4">
                {products[active].brand}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {products[active].desc}
              </p>
              <div className="mt-8 h-48 rounded-xl overflow-hidden">
                <img
                  src={products[active].image}
                  alt={`${products[active].brand} - ${products[active].category}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsOverview;
