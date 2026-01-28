import { Image as ImageIcon, Plus, Trash2, Upload, Video } from "lucide-react";
import { useEffect, useState } from "react";
import type { GalleryItem } from "../hooks/useGalleryItems";

const YOUTUBE_EMBED_PREFIX = "https://www.youtube.com/embed/";

const convertToEmbedUrl = (url: string) => {
  if (url.includes("youtube.com/embed")) return url;

  // youtu.be/<id>
  if (url.includes("youtu.be/")) {
    const id = url.split("youtu.be/")[1].split("?")[0];
    return `${YOUTUBE_EMBED_PREFIX}${id}`;
  }

  // youtube.com/watch?v=<id>
  if (url.includes("watch?v=")) {
    const id = url.split("watch?v=")[1].split("&")[0];
    return `${YOUTUBE_EMBED_PREFIX}${id}`;
  }

  return url;
};

const GalleryManager = () => {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [mainVideo, setMainVideo] = useState<GalleryItem | null>(null);
  const [newImageUrl, setNewImageUrl] = useState("");
  const [newVideoUrl, setNewVideoUrl] = useState("");
  const [saveMessage, setSaveMessage] = useState("");

  useEffect(() => {
    const savedGallery = localStorage.getItem("p12_gallery_items");
    const savedVideo = localStorage.getItem("p12_main_video");

    if (savedGallery) {
      setGalleryItems(JSON.parse(savedGallery));
    } else {
      setGalleryItems([
        { id: "1", url: "/public/0719.png", type: "image" },
        { id: "2", url: "/public/0719(7).png", type: "image" },
        { id: "3", url: "/public/0320(1).png", type: "image" },
        { id: "4", url: "/public/0320(22).jpg", type: "image" },
        { id: "5", url: "/public/0824(2).jpg", type: "image" },
        { id: "6", url: "/public/0830.jpg", type: "image" },
        { id: "7", url: "/public/P1244806.JPG", type: "image" },
        { id: "8", url: "/public/0824(7).jpg", type: "image" },
      ]);
    }

    if (savedVideo) {
      setMainVideo(JSON.parse(savedVideo));
    } else {
      setMainVideo({
        id: "main-video",
        url: "https://www.youtube-nocookie.com/embed/HEwms1DVw3I",
        type: "video",
        title: "Main Showreel",
      });
    }
  }, []);

  const handleAddImage = () => {
    if (!newImageUrl.trim()) return;

    const updated = [
      ...galleryItems,
      { id: Date.now().toString(), url: newImageUrl, type: "image" },
    ];

    setGalleryItems(updated);
    localStorage.setItem("p12_gallery_items", JSON.stringify(updated));
    setNewImageUrl("");
    setSaveMessage("Image added successfully!");
    setTimeout(() => setSaveMessage(""), 3000);

    window.dispatchEvent(new Event("galleryUpdated"));
  };

  const handleDeleteImage = (id: string) => {
    const updated = galleryItems.filter((item) => item.id !== id);
    setGalleryItems(updated);
    localStorage.setItem("p12_gallery_items", JSON.stringify(updated));
    setSaveMessage("Image deleted successfully!");
    setTimeout(() => setSaveMessage(""), 3000);

    window.dispatchEvent(new Event("galleryUpdated"));
  };

  const handleUpdateVideo = () => {
    if (!newVideoUrl.trim()) return;

    const convertedUrl = convertToEmbedUrl(newVideoUrl);

    const updated: GalleryItem = {
      id: "main-video",
      url: convertedUrl,
      type: "video",
      title: "Main Showreel",
    };

    setMainVideo(updated);
    localStorage.setItem("p12_main_video", JSON.stringify(updated));
    setNewVideoUrl("");
    setSaveMessage("Video updated successfully!");
    setTimeout(() => setSaveMessage(""), 3000);

    window.dispatchEvent(new Event("galleryUpdated"));
  };

  return (
    <div className="space-y-8">
      {/* Main Video */}
      <div className="bg-surface rounded-2xl border border-primary/20 p-6 shadow-lg">
        <h3 className="text-xl font-bold flex items-center gap-2 mb-4">
          <Video className="text-primary" />
          Main Showreel
        </h3>

        {mainVideo && (
          <div className="mb-4 rounded-lg overflow-hidden border border-primary/10">
            {mainVideo.url.includes("youtube.com") ? (
              <iframe
                src={mainVideo.url}
                className="w-full aspect-video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <video src={mainVideo.url} controls className="w-full" />
            )}
          </div>
        )}

        <input
          value={newVideoUrl}
          onChange={(e) => setNewVideoUrl(e.target.value)}
          placeholder="/public/video.mp4 or YouTube link"
          className="w-full px-4 py-3 rounded-lg border border-primary/30 mb-3"
        />

        <button
          onClick={handleUpdateVideo}
          className="w-full flex justify-center items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-semibold"
        >
          <Upload size={18} />
          Update Video
        </button>
      </div>

      {/* Gallery */}
      <div className="bg-surface rounded-2xl border border-primary/20 p-6 shadow-lg">
        <h3 className="text-xl font-bold flex items-center gap-2 mb-4">
          <ImageIcon className="text-primary" />
          Gallery Images ({galleryItems.length})
        </h3>

        <div className="flex gap-2 mb-6">
          <input
            value={newImageUrl}
            onChange={(e) => setNewImageUrl(e.target.value)}
            placeholder="/public/image.jpg or https://..."
            className="flex-1 px-4 py-2 rounded-lg border border-primary/30"
          />
          <button
            onClick={handleAddImage}
            className="flex items-center gap-2 px-6 py-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-semibold"
          >
            <Plus size={18} />
            Add
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="relative group rounded-lg overflow-hidden border"
            >
              <img
                src={item.url}
                className="w-full h-32 object-cover"
                onError={(e) =>
                  ((e.target as HTMLImageElement).src =
                    "https://via.placeholder.com/300x200")
                }
              />
              <button
                onClick={() => handleDeleteImage(item.id)}
                className="absolute top-2 right-2 p-2 bg-red-500 rounded-lg opacity-0 group-hover:opacity-100"
              >
                <Trash2 size={16} className="text-white" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {saveMessage && (
        <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-500">
          {saveMessage}
        </div>
      )}
    </div>
  );
};

export default GalleryManager;
