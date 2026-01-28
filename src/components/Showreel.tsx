import { useState } from "react";
import { useGalleryItems } from "../hooks/useGalleryItems";

const Showreel = () => {
  const [view, setView] = useState<"video" | "gallery">("video");
  const [selected, setSelected] = useState<string | null>(null);
  const { galleryItems, mainVideo } = useGalleryItems();

  const gallery = galleryItems.map((item) => item.url);

  return (
    <section id="showreel" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-background"></div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-5xl md:text-7xl font-bold mb-2 bg-white bg-clip-text text-transparent">
            Showreel
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Experience our creative excellence through our latest work
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mt-6"></div>
        </div>

        {/* Toggle (Video / Gallery) */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-surface rounded-full p-1 shadow-sm">
            <button
              onClick={() => setView("video")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                view === "video"
                  ? "bg-primary text-white shadow"
                  : "text-muted hover:text-primary"
              }`}
              aria-pressed={view === "video"}
            >
              Video
            </button>
            <button
              onClick={() => setView("gallery")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                view === "gallery"
                  ? "bg-primary text-white shadow"
                  : "text-muted hover:text-primary"
              }`}
              aria-pressed={view === "gallery"}
            >
              Gallery
            </button>
          </div>
        </div>

        {/* Video View */}
        {view === "video" && (
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>

            <div className="relative aspect-video bg-gradient-to-br from-surface to-background rounded-3xl overflow-hidden border border-primary/30">
              <iframe
                src={mainVideo.url.replace('youtube.com', 'youtube-nocookie.com') + `?autoplay=1&mute=1&loop=1&playlist=${mainVideo.url.split('/').pop()}&controls=1&modestbranding=1&rel=0&enablejsapi=1&origin=${window.location.origin}`}
                title="P12 Media Showreel"
                allow="autoplay; encrypted-media; picture-in-picture; accelerometer; gyroscope"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        )}

        {/* Gallery View */}
        {view === "gallery" && (
          <div className="mt-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {gallery.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setSelected(src)}
                  className="overflow-hidden rounded-xl border border-primary/20 bg-surface p-2 hover:scale-105 transition-transform duration-200"
                >
                  <img
                    src={src}
                    alt={`Gallery ${i + 1}`}
                    className="w-full h-40 object-cover rounded-md"
                  />
                </button>
              ))}
            </div>

            {gallery.length === 0 && (
              <div className="text-center py-12 text-muted">
                <p>
                  No gallery images yet. Add images through the admin panel.
                </p>
              </div>
            )}

            <p className="text-sm text-muted mt-4">
              Click an image to enlarge. Manage gallery in the admin panel.
            </p>
          </div>
        )}

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "Event Coverage",
            "Documentaries",
            "Commercials",
            "Music Videos",
          ].map((item, index) => (
            <div
              key={item}
              className="p-6 bg-gradient-to-br from-surface to-background rounded-xl border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <p className="text-center text-foreground font-semibold">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6"
          onClick={() => setSelected(null)}
        >
          <div className="max-w-5xl max-h-[90vh] w-full">
            <img
              src={selected}
              alt="Enlarged"
              className="w-full h-full object-contain rounded-lg shadow-xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Showreel;
