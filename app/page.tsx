import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import BestFit from "@/components/BestFit";
import Services from "@/components/Services";
import CaseStudy from "@/components/CaseStudy";
import Founder from "@/components/Founder";
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Problems />
      <BestFit />
      <Services />
      <CaseStudy />
      <Founder />
      <Process />
      <WhyUs />
      <Contact />
      <Footer />
    </main>
  );
}
