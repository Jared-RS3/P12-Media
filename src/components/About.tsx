import { Film, Heart, Users } from "lucide-react";

const About = () => {
  return (
    <>
      <section id="about" className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-surface to-background"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-foreground dark:bg-white dark:bg-clip-text dark:text-transparent">
              Who We Are
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* VIDEO CARD */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>

              <div className="relative aspect-video bg-surface rounded-2xl overflow-hidden border border-primary/20">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/HEwms1DVw3I?autoplay=1&mute=1&loop=1&playlist=HEwms1DVw3I&controls=1&modestbranding=1&rel=0&enablejsapi=1&origin=${window.location.origin}`}
                  title="P12 Media Showreel"
                  allow="autoplay; encrypted-media; picture-in-picture; accelerometer; gyroscope"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>

            {/* TEXT */}
            <div className="space-y-6 text-muted leading-relaxed">
              <p className="text-lg">
                <span className="text-primary font-bold text-2xl">
                  P12 MEDIA
                </span>{" "}
                is a{" "}
                <span className="text-primary font-semibold">
                  Level 1 B-BBEE certified
                </span>
                , full-service film production company based in Centurion, South
                Africa.
              </p>

              <p className="text-lg">
                Founded by{" "}
                <span className="text-foreground font-semibold">
                  Daron Theunis
                </span>
                , who grew up in the challenging neighborhoods of Cape Town —
                where gang violence, substance abuse, and hardship were everyday
                realities — the company is built on a foundation of{" "}
                <span className="text-primary font-semibold">
                  resilience, vision, and purpose
                </span>
                .
              </p>

              <p className="text-lg">
                At P12 MEDIA we're driven by a commitment to authentic,
                high-quality storytelling. Our work reflects creativity,
                originality, and a deep understanding of the power of narrative.
              </p>
            </div>
          </div>

          {/* VALUES */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative p-8 bg-gradient-to-br from-surface to-background rounded-2xl border border-primary/20 hover:border-primary/50 transition-all duration-500 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 mb-6 bg-primary/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <Film size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Authentic Storytelling
                </h3>
                <p className="text-muted leading-relaxed">
                  High-quality production reflecting creativity, originality,
                  and the power of narrative.
                </p>
              </div>
            </div>

            <div className="group relative p-8 bg-gradient-to-br from-surface to-background rounded-2xl border border-primary/20 hover:border-primary/50 transition-all duration-500 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 mb-6 bg-secondary/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <Heart size={32} className="text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Social Impact
                </h3>
                <p className="text-muted leading-relaxed">
                  Creating meaningful change through project-based employment
                  and job creation across South Africa.
                </p>
              </div>
            </div>

            <div className="group relative p-8 bg-gradient-to-br from-surface to-background rounded-2xl border border-primary/20 hover:border-primary/50 transition-all duration-500 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 mb-6 bg-accent/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <Users size={32} className="text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Media Excellence
                </h3>
                <p className="text-muted leading-relaxed">
                  Official media team for Daron's Overlanding & Media, a
                  fast-growing YouTube channel in SA motoring journalism.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients section unchanged */}
      {/* (Your entire DBZ marquee section stays exactly as-is) */}
    </>
  );
};

export default About;
