import { Play } from "lucide-react";

const Hero = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    else location.hash = `#${id}`; // fallback
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-background"></div>

      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh] py-20 lg:py-0">
          {/* Left Side - Logo */}
          <div
            className="flex items-center justify-center lg:justify-start animate-fadeIn order-2 lg:order-1"
            style={{ animationDelay: "0.3s" }}
          >
            <img
              src="/P12 media Logo Trans-01.png"
              alt="P12 MEDIA"
              className="w-full max-w-md lg:max-w-none h-auto object-contain lg:scale-125"
            />
          </div>

          {/* Right Side - Text Content */}
          <div className="text-center lg:text-left space-y-6 lg:space-y-8 animate-fadeIn order-1 lg:order-2">
            <div className="relative z-20">
              <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 border border-primary/30 rounded-full backdrop-blur-sm mb-1">
                <span className="text-primary text-[10px] sm:text-xs tracking-widest uppercase font-semibold">
                  Level 1 B-BBEE Certified
                </span>
              </div>
            </div>

            <div>
              <h2
                className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-normal leading-tight animate-fadeIn"
                style={{ 
                  animationDelay: "0.2s",
                  fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
                  fontWeight: "400"
                }}
              >
                <span className="block mb-3 sm:mb-4">
                  Full-Service Film Production Company
                </span>
              </h2>
              <p
                className="text-primary text-lg sm:text-xl md:text-2xl lg:text-3xl animate-fadeIn"
                style={{
                  animationDelay: "0.2s",
                  fontFamily:
                    "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
                  fontWeight: "400",
                }}
              >
                Centurion, South Africa
              </p>
            </div>

            <div
              className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 sm:gap-6 animate-fadeIn pt-2 sm:pt-4"
              style={{ animationDelay: "0.4s" }}
            >
              <button className="w-full sm:w-auto group relative px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-primary via-secondary to-accent rounded-lg font-semibold text-lg sm:text-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/50 text-white">
                <a
                  href="#showreel"
                  className="relative z-10 flex items-center justify-center gap-2"
                >
                  <Play size={20} className="sm:w-6 sm:h-6" fill="white" />
                  Watch Showreel
                </a>

                <div className="absolute inset-0 bg-gradient-to-r from-accent via-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <a
                href="#services"
                className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 border-2 border-primary/50 rounded-lg font-semibold text-lg sm:text-xl hover:bg-primary/10 transition-all duration-300 hover:scale-105 hover:border-primary text-foreground backdrop-blur-sm text-center"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <button
        onClick={() => scrollTo("about")}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-primary animate-bounce cursor-pointer hover:text-secondary transition-colors"
      >
        <ChevronDown size={40} />
      </button> */}

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
