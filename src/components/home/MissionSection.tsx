import { Target, Eye, Heart } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const items = [
  {
    icon: Target,
    title: "Our Mission",
    desc: "To provide world-class architectural products and solutions that elevate the built environment, delivering innovation, quality, and reliability to every project we undertake.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    desc: "To be recognized as India's foremost supplier of premium architectural products, setting benchmarks in quality and service across the construction industry.",
  },
  {
    icon: Heart,
    title: "Our Values",
    desc: "Integrity, excellence, and customer-centricity define every engagement. We build lasting relationships through transparency, technical expertise, and unwavering commitment.",
  },
];

const MissionSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section ref={ref} className="py-20 md:py-28">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-3">
            Why <span className="text-accent">Alumina Engineering</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Driven by purpose, guided by vision, anchored in values.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div
              key={item.title}
              className={`group p-8 rounded-xl border border-border bg-card hover:shadow-xl hover:border-accent/30 transition-all duration-500 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <item.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold font-display mb-3 text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
