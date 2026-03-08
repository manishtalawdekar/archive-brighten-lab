import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import HeroSection from "@/components/home/HeroSection";
import BrandsCarousel from "@/components/home/BrandsCarousel";
import MissionSection from "@/components/home/MissionSection";
import ProductsOverview from "@/components/home/ProductsOverview";
import ClientsSection from "@/components/home/ClientsSection";
import ContactCTA from "@/components/home/ContactCTA";

const Index = () => (
  <Layout>
    <SEOHead
      title="Alumina Engineering Pvt. Ltd. | Premium Architectural Products India"
      description="Mumbai-based supplier of Dorma automatic doors, Skyfold operable walls, FunderMax cladding, McKeon fire doors, Armstrong ceilings, Drainvac vacuum systems & Geggus entrance matting for India's finest projects."
      canonical="https://www.aluminaengg.com/"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Alumina Engineering — Premium Architectural Products",
        "description": "Representing Dorma, Skyfold, FunderMax, McKeon, Armstrong, Drainvac & Geggus in India.",
        "url": "https://www.aluminaengg.com/",
        "isPartOf": { "@type": "WebSite", "name": "Alumina Engineering Pvt. Ltd.", "url": "https://www.aluminaengg.com" },
      }}
    />
    <HeroSection />
    <BrandsCarousel />
    <MissionSection />
    <ProductsOverview />
    <ClientsSection />
    <ContactCTA />
  </Layout>
);

export default Index;