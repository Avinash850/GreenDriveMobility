import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import Services from "@/components/services";
import RateCalculator from "@/components/rate-calculator";
import HowItWorks from "@/components/how-it-works";
import About from "@/components/about";
import Fleet from "@/components/fleet";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Chatbot from "@/components/chatbot";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <Hero />
      <Services />
      <RateCalculator />
      <HowItWorks />
      <About />
      <Fleet />
      <Testimonials />
      <Contact />
      <Footer />
      <Chatbot />
    </div>
  );
}
