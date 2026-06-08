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
      description="Mumbai-based supplier of dormakaba automatic doors, Skyfold operable walls, McKeon fire doors and Merino laminates for India's finest projects."
      canonical="https://www.aluminaengg.com/"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Alumina Engineering — Premium Architectural Products",
        "description": "Representing dormakaba, Skyfold, McKeon and Merino in India.",
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