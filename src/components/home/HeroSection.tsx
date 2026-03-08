import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => (
  <section className="relative min-h-[85vh] flex items-center bg-gradient-navy overflow-hidden">
    {/* Decorative elements */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-gold blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-gold-light blur-3xl" />
    </div>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,transparent_0%,hsl(220_70%_8%/0.6)_100%)]" />

    <div className="container relative z-10 py-20">
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 text-gold text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          Since Inception — Trusted Across India
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-display text-primary-foreground leading-tight mb-6">
          Engineering Excellence for{" "}
          <span className="text-gradient-gold">Iconic Architecture</span>
        </h1>
        <p className="text-lg sm:text-xl text-primary-foreground/70 max-w-2xl mb-10 leading-relaxed">
          India's premier supplier of world-class architectural products — from automatic doors and operable walls to high-pressure laminates and fire shutters.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link to="/products">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-base px-8 h-12">
              Explore Our Solutions
              <ArrowRight className="w-5 h-5 ml-1" />
            </Button>
          </Link>
          <Link to="/contact">
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-base px-8 h-12">
              Get in Touch
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
