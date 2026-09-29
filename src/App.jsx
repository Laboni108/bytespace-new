import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import LogoStrip from "./components/sections/LogoStrip";
import Courses from "./components/sections/Courses";
import CategoryIcons from "./components/sections/CategoryIcons";
import Growth from "./components/sections/Growth";
import CTA from "./components/sections/CTA";
import Testimonials from "./components/sections/Testimonials";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <div className="bg-primary-800">
        <Navbar />
        <Hero />
      </div>
      <LogoStrip />
      <Courses />
      <CategoryIcons />
      <Growth />
      <CTA />
      <Testimonials />
      <Footer />
    </div>
  );
}