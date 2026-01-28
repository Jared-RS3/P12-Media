import {
  Box,
  Camera,
  FileVideo,
  Film,
  Image,
  Megaphone,
  Mountain,
  Music,
  Palette,
  Tv,
  Users,
  Video,
} from "lucide-react";
import { useState } from "react";

const Services = () => {
  const [showAll, setShowAll] = useState(false);

  const services = [
    {
      icon: Users,
      title: "Event Coverage",
      color: "from-primary to-secondary",
    },
    {
      icon: Megaphone,
      title: "Social Media Content",
      color: "from-secondary to-accent",
    },
    {
      icon: FileVideo,
      title: "Documentaries",
      color: "from-accent to-primary",
    },
    {
      icon: Mountain,
      title: "4x4 Location Shooting",
      color: "from-primary via-secondary to-accent",
    },
    {
      icon: Video,
      title: "Corporate Videos",
      color: "from-secondary to-primary",
    },
    { icon: Tv, title: "TV Commercials", color: "from-accent to-secondary" },
    { icon: Palette, title: "Animation", color: "from-primary to-accent" },
    {
      icon: Box,
      title: "Product Promos",
      color: "from-secondary via-accent to-primary",
    },
    { icon: Music, title: "Music Videos", color: "from-accent to-primary" },
    { icon: Image, title: "Photography", color: "from-primary to-secondary" },
    {
      icon: Camera,
      title: "Multi Camera Productions",
      color: "from-secondary to-accent",
    },
    {
      icon: Film,
      title: "Full Production Services",
      color: "from-accent via-primary to-secondary",
    },
  ];

  return (
    <section id="services" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface to-background"></div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2E4NTVmNyIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-white bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
            From concept to completion, we deliver comprehensive production
            solutions tailored to your vision
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHidden = !showAll && index >= 3;
            return (
              <div
                key={service.title}
                className={`group relative p-8 bg-gradient-to-br from-surface to-background rounded-2xl border border-primary/20 hover:border-primary/50 transition-all duration-500 hover:transform hover:-translate-y-2 ${
                  isHidden ? "hidden md:block" : ""
                }`}
                style={{
                  animation: "fadeInUp 0.6s ease-out both",
                  animationDelay: `${index * 0.05}s`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative">
                  <div
                    className={`w-16 h-16 mb-6 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}
                  >
                    <Icon size={32} className="text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>

                  <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>

                <div className="absolute top-4 right-4 w-20 h-20 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors duration-500"></div>
              </div>
            );
          })}
        </div>

        {!showAll && (
          <div className="mt-8 text-center md:hidden">
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-3 bg-gradient-to-r from-primary via-secondary to-accent rounded-xl font-semibold text-white hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
            >
              See More Services
            </button>
          </div>
        )}

        <div className="mt-16 text-center">
          <p className="text-lg text-muted mb-8">
            Need something specific? We offer customized production packages to
            meet your unique requirements.
          </p>
          <a
            href="#contact"
            className="px-10 py-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-xl font-semibold text-lg text-white hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
          >
            Get a Custom Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
