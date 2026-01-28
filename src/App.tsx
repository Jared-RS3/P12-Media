import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import Services from "./components/Services";
import Showreel from "./components/Showreel";
import WhySupport from "./components/WhySupport";
import Admin from "./pages/Admin";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);

    // Listen for URL changes
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handleLocationChange);
    return () => window.removeEventListener("popstate", handleLocationChange);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
        <div className="text-center">
          <div className="relative w-24 h-24 mx-auto mb-8">
            <div className="absolute inset-0 border-4 border-primary/30 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-transparent border-t-primary rounded-full animate-spin"></div>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-2 tracking-wider">
            P12 MEDIA
          </h1>
          <p className="text-primary text-sm tracking-widest">
            LOADING EXPERIENCE
          </p>
        </div>
      </div>
    );
  }

  // Admin route
  if (currentPath === "/admin") {
    return <Admin />;
  }

  // Main site
  return (
    <div className="bg-background text-foreground overflow-hidden">
      <Navigation />
      <Hero />
      <About />
      <Showreel />
      <Services />
      <WhySupport />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
