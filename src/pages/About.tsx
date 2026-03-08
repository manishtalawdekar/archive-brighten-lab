import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { Target, Eye, Heart, Building2 } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const About = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <Layout>
      <SEOHead
        title="About Alumina Engineering | Architectural Products Company Mumbai"
        description="Learn about Alumina Engineering Pvt. Ltd., Mumbai's trusted supplier of premium architectural products from Dorma, Skyfold, FunderMax, McKeon, Armstrong, Drainvac and Geggus."
        canonical="https://www.aluminaengg.com/about"
      />
      {/* Hero */}
      <section className="bg-gradient-navy py-20 md:py-28">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold font-display text-primary-foreground mb-4">
            About <span className="text-gradient-gold">Alumina Engineering</span>
          </h1>
          <p className="text-primary-foreground/70 max-w-2xl text-lg leading-relaxed">
            Alumina Engineering Pvt. Ltd. is a Mumbai-based company specializing in the supply and service of premium architectural products from world-renowned manufacturers.
          </p>
        </div>
      </section>

      {/* Story */}
      <section ref={ref} className="py-20 md:py-28">
        <div className="container">
          <div className={`max-w-3xl mx-auto transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="w-8 h-8 text-accent" />
              <h2 className="text-3xl font-bold font-display text-foreground">Our Story</h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded with a vision to bridge the gap between global architectural innovation and the Indian market, Alumina Engineering has established itself as a trusted name in the construction industry.
              </p>
              <p>
                We represent some of the world's finest brands — Dorma, Skyfold, FunderMax, McKeon Door Company, Drainvac, and Geggus — bringing cutting-edge architectural products to India's most prestigious projects.
              </p>
              <p>
                From automatic door systems to operable walls, from high-pressure laminates to fire protection solutions, our comprehensive portfolio addresses every aspect of modern architectural requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Target, title: "Mission", desc: "To provide world-class architectural products and solutions that elevate the built environment, delivering innovation, quality, and reliability." },
              { icon: Eye, title: "Vision", desc: "To be recognized as India's foremost supplier of premium architectural products, setting benchmarks in quality and service." },
              { icon: Heart, title: "Values", desc: "Integrity, excellence, and customer-centricity define every engagement. We build lasting relationships through transparency and commitment." },
            ].map((item) => (
              <div key={item.title} className="bg-card border border-border rounded-xl p-8 hover:shadow-lg hover:border-accent/30 transition-all">
                <item.icon className="w-8 h-8 text-accent mb-4" />
                <h3 className="text-xl font-bold font-display text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
