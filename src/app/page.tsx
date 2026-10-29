import Hero from "./components/home/Hero";
import QuoteDemo from "./components/home/QuoteDemo";
import PainSection from "./components/home/PainSection";
import WhatsAppStory from "./components/home/WhatsAppStory";
import Steps from "./components/home/Steps";
import BrandSection from "./components/home/BrandSection";
import Pricing from "./components/home/Pricing";
import Founder from "./components/home/Founder";
import HomeFAQ from "./components/home/HomeFAQ";
import FinalCTA from "./components/home/FinalCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <div className="qq">
        <Hero />
        <QuoteDemo />
        <PainSection />
        <WhatsAppStory />
        <Steps />
        <BrandSection />
        <Pricing />
        <Founder />
        <HomeFAQ />
        <FinalCTA />
      </div>
      <Footer />
    </>
  );
}
