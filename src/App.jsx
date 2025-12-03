import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

// Common components
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Loader from "./components/common/Loader";

// UI components
import GradientOrbs from "./components/ui/GradientOrbs";

// Page sections
import HeroSection from "./sections/HeroSection";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Education from "./sections/Education";
import Projects from "./sections/Projects";
import Blogs from "./sections/Blogs";
import Contact from "./sections/Contact";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // 2.5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e293b] relative">
        {/* Animated Background Orbs */}
        <GradientOrbs />
        
        {/* Main Content */}
        <div className="relative z-10">
          <Navbar />
          <HeroSection />
          <About />
          <Skills />
          <Education />
          <Projects />
          <Blogs />
          <Contact />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
