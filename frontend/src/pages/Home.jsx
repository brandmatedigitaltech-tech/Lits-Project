import Hero from "../components/Hero";
import Stats from "../components/Stats";
import About from "../components/About";
import CoursesSection from "../components/CoursesSection";
import Features from "../components/Features";
import Notice from "../components/Notice";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Gallery from "../components/Gallery"; // ✅ FIXED PATH
import Videos from "../components/Videos";

function Home() {
  return (
    <>
      <Hero />

      <Notice />

      <About />

      <Stats />

      <CoursesSection />

      <Features />

      <Testimonials />

      <CTA />

      {/* 🔥 ADD THIS (ABOVE FOOTER) */}
      <Gallery />
      <Videos />

    </>
  );
}

export default Home;