import { useEffect, useState } from "react";

export interface GalleryItem {
  id: string;
  url: string;
  type: "image" | "video";
  title?: string;
}

const defaultGallery: GalleryItem[] = [
  { id: "1", url: "/0719.png", type: "image" },
  { id: "2", url: "/0719(7).png", type: "image" },
  { id: "3", url: "/0320(1).png", type: "image" },
  { id: "4", url: "/0320(22).jpg", type: "image" },
  { id: "5", url: "/0824(2).jpg", type: "image" },
  { id: "6", url: "/0830.jpg", type: "image" },
  { id: "7", url: "/P1244806.JPG", type: "image" },
  { id: "8", url: "/0824(7).jpg", type: "image" },
];

const defaultVideo: GalleryItem = {
  id: "main-video",
  url: "https://www.youtube-nocookie.com/embed/HEwms1DVw3I",
  type: "video",
  title: "Main Showreel",
};

export const useGalleryItems = () => {
  const [galleryItems, setGalleryItems] =
    useState<GalleryItem[]>(defaultGallery);
  const [mainVideo, setMainVideo] = useState<GalleryItem>(defaultVideo);

  useEffect(() => {
    const loadFromStorage = () => {
      const savedGallery = localStorage.getItem("p12_gallery_items");
      const savedVideo = localStorage.getItem("p12_main_video");

      if (savedGallery) {
        try {
          setGalleryItems(JSON.parse(savedGallery));
        } catch (error) {
          console.error("Error parsing gallery items:", error);
          setGalleryItems(defaultGallery);
        }
      }

      if (savedVideo) {
        try {
          setMainVideo(JSON.parse(savedVideo));
        } catch (error) {
          console.error("Error parsing main video:", error);
          setMainVideo(defaultVideo);
        }
      }
    };

    loadFromStorage();

    window.addEventListener("storage", loadFromStorage);
    window.addEventListener("galleryUpdated", loadFromStorage as EventListener);

    return () => {
      window.removeEventListener("storage", loadFromStorage);
      window.removeEventListener(
        "galleryUpdated",
        loadFromStorage as EventListener,
      );
    };
  }, []);

  return { galleryItems, mainVideo };
};
