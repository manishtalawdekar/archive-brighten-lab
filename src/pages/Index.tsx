import Layout from "@/components/Layout";
import HeroSection from "@/components/home/HeroSection";
import BrandsCarousel from "@/components/home/BrandsCarousel";
import MissionSection from "@/components/home/MissionSection";
import ProductsOverview from "@/components/home/ProductsOverview";
import ClientsSection from "@/components/home/ClientsSection";
import ContactCTA from "@/components/home/ContactCTA";

const Index = () => (
  <Layout>
    <HeroSection />
    <BrandsCarousel />
    <MissionSection />
    <ProductsOverview />
    <ClientsSection />
    <ContactCTA />
  </Layout>
);

export default Index;
