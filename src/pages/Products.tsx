import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { products, dormaCatalogs } from "@/data/products";

const Products = () => {
  const { ref, visible } = useScrollReveal();
  const { ref: catRef, visible: catVisible } = useScrollReveal();
  const [selected, setSelected] = useState<number | null>(null);
  const [selectedCatalog, setSelectedCatalog] = useState<number | null>(null);

  return (
    <Layout>
      <SEOHead
        title="Products | Dorma, Skyfold, FunderMax, McKeon, Armstrong — Alumina Engineering"
        description="Explore our range of architectural products: Dorma automatic doors, Skyfold operable walls, FunderMax HPL cladding, McKeon fire doors, Armstrong ceilings, Drainvac vacuum systems, Geggus matting & fire rated doors."
        canonical="https://www.aluminaengg.com/products"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Alumina Engineering Product Portfolio",
          "description": "Premium architectural products from world-renowned manufacturers",
          "numberOfItems": products.length,
          "itemListElement": products.map((p, i) => ({
            "@type": "ListItem",
            "position": i + 1,
            "name": p.brand,
            "description": p.desc,
          })),
        }}
      />
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

      {/* Dorma Catalogs Section */}
      <section ref={catRef} className="py-20 md:py-28 bg-muted/30">
        <div className="container">
          <div className="text-center mb-14">
            <span className="text-xs uppercase tracking-wider text-accent font-semibold">Dorma Product Catalogs</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mt-2 mb-3">
              Opening & Closing · Securing · Dividing
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Dorma's complete range organised into three core catalogs covering every aspect of door technology, access control, and space division.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {dormaCatalogs.map((cat, i) => (
              <div
                key={cat.title}
                className={`group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:border-accent/30 transition-all duration-500 cursor-pointer ${
                  catVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
                onClick={() => setSelectedCatalog(i)}
              >
                <div className="h-52 overflow-hidden relative">
                  <img
                    src={cat.image}
                    alt={`Dorma ${cat.title}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
                  <div className="absolute bottom-4 left-5 right-5">
                    <div className="flex items-center gap-2 mb-1">
                      <cat.icon className="w-5 h-5 text-accent" />
                      <span className="text-xs font-semibold text-accent uppercase tracking-wider">Dorma</span>
                    </div>
                    <h3 className="text-xl font-bold font-display text-primary-foreground">{cat.title}</h3>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{cat.desc}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent group-hover:gap-2 transition-all">
                    View Products <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Products Grid */}
      <section ref={ref} className="py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-3">
              All <span className="text-accent">Brands</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Our complete portfolio of world-class architectural product brands.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((p, i) => (
              <div
                key={p.brand}
                className={`group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:border-accent/30 transition-all duration-500 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={p.image}
                    alt={`${p.brand} - ${p.category}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                  <div className="absolute bottom-3 left-4 flex items-center gap-2">
                    <p.icon className="w-5 h-5 text-accent" />
                    <span className="text-sm font-bold font-display text-primary-foreground/90">{p.brand}</span>
                  </div>
                </div>
                <div className="p-5">
                  <span className="text-xs uppercase tracking-wider text-accent font-semibold">{p.category}</span>
                  <h3 className="text-lg font-bold font-display text-foreground mt-1 mb-2">{p.brand}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">{p.desc}</p>
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

      {/* Brand Detail Dialog */}
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

      {/* Dorma Catalog Detail Dialog */}
      <Dialog open={selectedCatalog !== null} onOpenChange={() => setSelectedCatalog(null)}>
        {selectedCatalog !== null && (
          <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
            <DialogHeader>
              <span className="text-xs uppercase tracking-wider text-accent font-semibold">
                Dorma Catalog
              </span>
              <DialogTitle className="text-2xl md:text-3xl font-display text-foreground">
                {dormaCatalogs[selectedCatalog].title}
              </DialogTitle>
              <DialogDescription className="text-muted-foreground leading-relaxed pt-2">
                {dormaCatalogs[selectedCatalog].desc}
              </DialogDescription>
            </DialogHeader>

            <div className="mt-2 rounded-xl overflow-hidden">
              <img
                src={dormaCatalogs[selectedCatalog].image}
                alt={`Dorma ${dormaCatalogs[selectedCatalog].title}`}
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>

            <div className="mt-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-3">
                Product Range
              </h4>
              <div className="space-y-3">
                {dormaCatalogs[selectedCatalog].products.map((p) => (
                  <div key={p.name} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <div>
                      <span className="text-sm font-semibold text-foreground">{p.name}</span>
                      <p className="text-sm text-muted-foreground">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-border">
              <Link to="/contact" onClick={() => setSelectedCatalog(null)}>
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold h-11">
                  Enquire About Dorma {dormaCatalogs[selectedCatalog].title}
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
