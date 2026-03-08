import { useScrollReveal } from "@/hooks/useScrollReveal";

const clients = [
  "Oberoi Group", "Reliance Industries", "Taj Hotels", "Hiranandani",
  "Hyatt", "Godrej Properties", "Lodha Group", "DLF",
  "Shapoorji Pallonji", "L&T Realty", "Raheja", "K Raheja Corp",
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
              key={client}
              className={`bg-card border border-border rounded-xl p-5 flex items-center justify-center text-center hover:border-accent/30 hover:shadow-md transition-all duration-500 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <span className="text-sm font-semibold text-muted-foreground">{client}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
