import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Building2, Factory, Hotel, Landmark, Building, Castle, TowerControl, Warehouse, HardHat, Gem, Crown, BriefcaseBusiness, LucideIcon } from "lucide-react";

const clients: { name: string; icon: LucideIcon }[] = [
  { name: "Oberoi Group", icon: Crown },
  { name: "Reliance Industries", icon: Factory },
  { name: "Taj Hotels", icon: Hotel },
  { name: "Hiranandani", icon: Building2 },
  { name: "Hyatt", icon: Hotel },
  { name: "Godrej Properties", icon: Building },
  { name: "Lodha Group", icon: Landmark },
  { name: "DLF", icon: Castle },
  { name: "Shapoorji Pallonji", icon: HardHat },
  { name: "L&T Realty", icon: Warehouse },
  { name: "Raheja", icon: Gem },
  { name: "K Raheja Corp", icon: BriefcaseBusiness },
];

const ClientsSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section ref={ref} className="py-20 md:py-28">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-3">
            Trusted by <span className="text-accent">Industry Leaders</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Our products grace some of India's most iconic buildings and developments.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {clients.map((client, i) => (
            <div
              key={client.name}
              className={`group bg-card border border-border rounded-xl p-5 flex flex-col items-center justify-center text-center gap-3 hover:border-accent/30 hover:shadow-md transition-all duration-500 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <client.icon className="w-7 h-7 text-accent/50 group-hover:text-accent transition-colors" />
              <span className="text-sm font-semibold text-muted-foreground">{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
