import BottomContactBar from "./components/BottomContactBar";
import CompanyIntro from "./components/CompanyIntro";
import ConsultationWidget from "./components/ConsultationWidget";
import CoreAdvantages from "./components/CoreAdvantages";
import HeroCard from "./components/HeroCard";
import ProductCategories from "./components/ProductCategories";
import ProductRecommendations from "./components/ProductRecommendations";

export default function App() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[430px] bg-[#f5f5f7] px-4 pb-[120px] pt-4">
      <HeroCard />
      <CoreAdvantages />
      <ProductCategories />
      <ProductRecommendations />
      <CompanyIntro />
      <ConsultationWidget />
      <BottomContactBar />
    </main>
  );
}
