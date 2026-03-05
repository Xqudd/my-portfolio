"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface ProductImageGalleryProps {
  productId: string;
  productName: string;
  selectedColor: string;
  mainImage: string;
}

export default function ProductImageGallery({
  productId,
  productName,
  selectedColor,
  mainImage,
}: ProductImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [thumbnails, setThumbnails] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  // Update main image and fetch thumbnails when color changes
  useEffect(() => {
    setLoading(true);
    
    // Extract folder name from mainImage (e.g., "hoodie.jpg" -> "hoodie")
    const folderName = mainImage.split(".")[0];
    const colorPath = `${folderName}/${selectedColor}`;

    // Fetch all images from the color-specific folder
    fetch(`/api/images?path=${colorPath}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.files && data.files.length > 0) {
          const imagePaths = data.files.map(
            (file: string) => `/shop/products/${colorPath}/${file}`
          );
          setThumbnails(imagePaths);
          setSelectedImage(imagePaths[0]);
        } else {
          // Fallback if no images found
          const mainImagePath = `/shop/products/${mainImage}`;
          setThumbnails([mainImagePath]);
          setSelectedImage(mainImagePath);
        }
      })
      .catch((error) => {
        console.error("Failed to fetch images:", error);
        const mainImagePath = `/shop/products/${mainImage}`;
        setThumbnails([mainImagePath]);
        setSelectedImage(mainImagePath);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [selectedColor, mainImage]);

  const handleImageSelect = (imagePath: string) => {
    setSelectedImage(imagePath);
  };

  if (loading) {
    return (
      <div
        style={{
          borderRadius: 12,
          overflow: "hidden",
          background: "#fff",
          boxShadow: "0 6px 18px rgba(15,23,42,0.06)",
        }}
      >
        <div
          style={{
            height: 560,
            background: "#f5f5f5",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#9aa4b2",
          }}
        >
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      {/* Main Image Display */}
      <div
        style={{
          borderRadius: 12,
          overflow: "hidden",
          backgroundColor: "#fff",
          boxShadow: "0 6px 18px rgba(15,23,42,0.06)",
        }}
      >
        <div
          style={{
            height: 560,
            backgroundImage: `url('${selectedImage}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#9aa4b2",
            fontSize: 14,
            position: "relative",
            backgroundColor: "#f9f9f9",
          }}
        >
          {!selectedImage && "Image"}
        </div>
      </div>

      {/* Thumbnails Grid - Below Main Image */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(90px, 1fr))",
          gap: "0.75rem",
        }}
      >
        {thumbnails.map((thumbnail, index) => (
          <button
            key={index}
            onClick={() => handleImageSelect(thumbnail)}
            style={{
              width: "100%",
              aspectRatio: "1",
              borderRadius: 8,
              border: selectedImage === thumbnail ? "2px solid #2d3436" : "2px solid #e5e7eb",
              padding: 0,
              cursor: "pointer",
              overflow: "hidden",
              backgroundColor: "#f9f9f9",
              transition: "all 0.2s ease",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            aria-label={`View image ${index + 1}`}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundImage: `url('${thumbnail}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
