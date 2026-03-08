const brands = ["DORMA", "SKYFOLD", "FunderMax", "McKEON", "DRAINVAC", "GEGGUS"];

const BrandsCarousel = () => (
  <section className="py-10 bg-muted/50 border-y border-border overflow-hidden">
    <div className="flex animate-scroll-left whitespace-nowrap">
      {[...brands, ...brands].map((brand, i) => (
        <div key={i} className="flex-shrink-0 px-12 flex items-center">
          <span className="text-2xl font-bold tracking-wider text-muted-foreground/50 font-display select-none">
            {brand}
          </span>
        </div>
      ))}
    </div>
  </section>
);

export default BrandsCarousel;
