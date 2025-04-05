
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import FeaturedCampaigns from "@/components/FeaturedCampaigns";
import ResourcesSection from "@/components/ResourcesSection";
import ImpactStats from "@/components/ImpactStats";
import BlogPreview from "@/components/BlogPreview";
import GetInvolved from "@/components/GetInvolved";
import Newsletter from "@/components/Newsletter";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <Hero />
        <ImpactStats />
        <FeaturedCampaigns />
        <ResourcesSection />
        <BlogPreview />
        <GetInvolved />
        <Newsletter />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
