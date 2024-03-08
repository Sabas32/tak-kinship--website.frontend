import React, { useState, useEffect } from "react";

const GalleryImage = ({ imageId, altText, handleOpenFullImage, key }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(null);

  useEffect(() => {
    const loadImage = () => {
      if (imageId) {
        // Replace 'your_cloud_name', 'your_api_key', and 'your_api_secret' with your Cloudinary credentials
        const cloudName = "palnet";
        const apiKey = "your_api_key";
        const apiSecret = "your_api_secret";

        const imageUrl = `https://res.cloudinary.com/${cloudName}/image/upload/v1/${imageId}`;

        fetch(imageUrl)
          .then((response) => response.blob())
          .then((blob) => {
            const reader = new FileReader();
            reader.onloadend = () => {
              setIsImageLoaded(reader.result);
            };
            reader.readAsDataURL(blob);
          })
          .catch((error) => {
            console.error("Error loading image:", error);
            setIsImageLoaded(null);
          });
      }
    };

    loadImage();
  }, [imageId]);

  return (
    <div className="image" key={key}>
      {isImageLoaded ? (
        <img
          onClick={handleOpenFullImage}
          src={isImageLoaded}
          className={`${isImageLoaded ? "fadeIn" : ""}`}
          alt={altText || "Image"}
        />
      ) : (
        // <div className="loading-shimmer"></div>
        // <p>Loading...</p>
        <div className="loading-shimmer"></div>
      )}
    </div>
  );
};

export default GalleryImage;
