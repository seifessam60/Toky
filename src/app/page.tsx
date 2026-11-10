import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import TrendingSection from "@/components/TrendingSection";
import CategoriesSection from "@/components/CategoriesSection";
import BranchesPreview from "@/components/BranchesPreview";
import NewArrivalsSection from "@/components/NewArrivalsSection";
import PerksSection from "@/components/PerksSection";
import PromoSection from "@/components/PromoSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <PerksSection />
        <TrendingSection />
        <CategoriesSection />
        <PromoSection />
        <NewArrivalsSection />
        <BranchesPreview />
      </main>
      <Footer />
    </>
  );
}
