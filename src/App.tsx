import { FloatingContactButtons } from "./components/FloatingContactButtons";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Hero } from "./sections/Hero";
import { Products } from "./sections/Products";
import { Projects } from "./sections/Projects";
import { SlidingFeature } from "./sections/SlidingFeature";
import { StatsTestimonials } from "./sections/StatsTestimonials";
import { WhyUs } from "./sections/WhyUs";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <SlidingFeature />
        <WhyUs />
        <Projects />
        <StatsTestimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingContactButtons />
    </>
  );
}
