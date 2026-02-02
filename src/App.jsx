import { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

// Common components
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Loader from "./components/common/Loader";

// UI components
import GradientOrbs from "./components/UI/GradientOrbs";

// Lazy loaded sections
const HeroSection = lazy(() => import("./sections/HeroSection"));
const About = lazy(() => import("./sections/About"));
const Skills = lazy(() => import("./sections/Skills"));
const Education = lazy(() => import("./sections/Education"));
const Projects = lazy(() => import("./sections/Projects"));
const Blogs = lazy(() => import("./sections/Blogs"));
const Contact = lazy(() => import("./sections/Contact"));

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
          <Suspense fallback={<div className="min-h-screen" />}>
            <HeroSection />
            <About />
            <Skills />
            <Education />
            <Projects />
            <Blogs />
            <Contact />
          </Suspense>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
