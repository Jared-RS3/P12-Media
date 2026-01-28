import { Award, Briefcase, Heart, Sparkles, TrendingUp } from "lucide-react";

const WhySupport = () => {
  const reasons = [
    {
      icon: Award,
      title: "Level 1 B-BBEE Certified",
      description:
        "Proudly Level 1 B-BBEE certified — the highest rating in South Africa's framework. Partnering with us enhances your company's compliance and procurement scorecard while supporting meaningful economic transformation.",
      gradient: "from-primary to-secondary",
    },
    {
      icon: Sparkles,
      title: "Authentic, Impact-Driven Storytelling",
      description:
        "We specialize in creating powerful, relatable content that connects with audiences on a deeper level. Our work is rooted in authenticity and shaped by real-life experience, ensuring emotional depth and cultural relevance.",
      gradient: "from-secondary to-accent",
    },
    {
      icon: Heart,
      title: "Socially Conscious Business Model",
      description:
        "P12 Media goes beyond film production — we're committed to social upliftment. By offering project-based employment and skills development, we actively contribute to reducing unemployment and empowering local communities.",
      gradient: "from-accent to-primary",
    },
    {
      icon: Briefcase,
      title: "Full-Service Production Expertise",
      description:
        "From concept development to post-production, we provide end-to-end production services tailored to your needs. Our team combines technical excellence with creative flair to deliver visually stunning, professionally polished content.",
      gradient: "from-primary via-secondary to-accent",
    },
    {
      icon: TrendingUp,
      title: "Emerging Force in Motoring Media",
      description:
        "As the media team behind Daron's Overlanding & Media — a fast-growing YouTube channel in South African motoring journalism — we bring a dynamic, digital-first perspective that's especially effective for brands targeting younger, online-savvy audiences.",
      gradient: "from-accent via-primary to-secondary",
    },
  ];

  return (
    <section id="why-support" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-background"></div>

      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>

      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-1/3 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-foreground dark:bg-white dark:bg-clip-text dark:text-transparent">
            Why Support P12 Media
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
            Partner with a production company that delivers excellence while
            driving meaningful social impact
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mt-6"></div>
        </div>

        <div className="space-y-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="group relative"
                style={{
                  animation: "fadeInUp 0.6s ease-out both",
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

                <div className="relative p-8 md:p-10 bg-gradient-to-br from-surface to-background rounded-3xl border border-primary/20 hover:border-primary/50 transition-all duration-500">
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div
                      className={`flex-shrink-0 w-20 h-20 bg-gradient-to-br ${reason.gradient} rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}
                    >
                      <Icon size={40} className="text-white" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                          {reason.title}
                        </h3>
                        <div className="hidden md:block flex-1 h-0.5 bg-gradient-to-r from-primary/50 to-transparent"></div>
                      </div>

                      <p className="text-muted text-lg leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>

                  <div className="absolute top-8 right-8 w-32 h-32 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 text-center p-12 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-3xl border border-primary/30 backdrop-blur-sm">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Create Something Amazing?
          </h3>
          <p className="text-xl text-muted mb-8 max-w-2xl mx-auto">
            Let's bring your vision to life with authentic storytelling and
            professional excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-10 py-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-xl font-semibold text-lg text-white hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105">
              Start Your Project
            </button>
            <button className="px-10 py-4 border-2 border-primary/50 rounded-xl font-semibold text-lg hover:bg-primary/10 transition-all duration-300 hover:scale-105 text-foreground">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default WhySupport;
