import axios from "axios";
import { useEffect, useState } from "react";
import "../css/gallery.css";

import image1 from "../testImages/ADVANCED-TALKS-1200-x-675-px-2-1140x855.webp";
import image2 from "../testImages/Bianca-Belair-WWE-SmackDown.webp";
import image3 from "../testImages/FxAZ51hWIAACdds.jpeg";
import image4 from "../testImages/MV5BNDZjMDQzMTUtYjg5MS00ZWVmLTlhODEtOWYyOWE4OTM0MGJmXkEyXkFqcGdeQXVyMjUyNDk2ODc@._V1_.jpg";
import image5 from "../testImages/PA-2517440.webp";
import image6 from "../testImages/Untitled-design-2021-06-17T215720.388-185x480.webp";
import image7 from "../testImages/Untitled-design-2021-06-17T215720.388.webp";
import image8 from "../testImages/images (1).jpg";
import image9 from "../testImages/images.jpg";
import image10 from "../testImages/skysports-transfers-transfer-rumours_6386408.jpg";
import GalleryImage from "./gallery-adds/gallery-image";
import configHeaders from "./config-headers";

const Gallery = ({ setIsLoading }) => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    const handleFetchImages = async () => {
      try {
        const response = await axios.get(
          "https://tak-devs-web-6dd969e7026b.herokuapp.com/api/gallery/",
          {
            headers: configHeaders,
          }
        );
        setIsLoading(false);
        console.log(response);
        console.log(response.data);
        setImages(response.data);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    };

    handleFetchImages();
  }, []);
  //   console.log(document.querySelector(".testImg"));
  const [isOpenFullImage, setIsOpenFullImage] = useState(false);
  const [isOpenFullImageInSide, setIsOpenFullImageInSide] = useState(false);
  const [srcFullImage, setSrcFullImage] = useState("");
  // useEffect(() => {
  //   if (isOpenFullImage) {
  //     document.querySelector("html").style.overflow = "hidden";
  //   } else {
  //     document.querySelector("html").style.overflow = "auto";
  //   }
  // }, [isOpenFullImage]);
  //   const togleOpenFullImage = () => {};
  const handleOpenFullImage = (e) => {
    setSrcFullImage(e.target.src);
    // document.querySelector(".fullImage").appendChild(e.target);
    console.log(e.target);
    setIsOpenFullImage((prev) => !prev);
    setIsOpenFullImageInSide((prev) => !prev);
  };

  const handleOpenFullImageInSideClose = () => {
    setTimeout(() => {
      setIsOpenFullImage((prev) => !prev);
    }, 700);
    setIsOpenFullImageInSide((prev) => !prev);
  };

  return (
    <div className="gallery">
      <div className={`fullImage ${isOpenFullImage ? "visible" : ""}`}>
        <div className="cancel" onClick={handleOpenFullImageInSideClose}>
          close
        </div>
        <img
          className={` ${isOpenFullImageInSide ? "" : "close"}`}
          src={srcFullImage}
          alt=""
        />
      </div>
      {/* <img onClick={handleOpenFullImage} src={image1} alt="" /> */}
      {images.map((e) => (
        <GalleryImage
          imageId={`${e.image}`}
          altText="test"
          handleOpenFullImage={handleOpenFullImage}
          key={e.image}
        />
      ))}
    </div>
  );
};
export default Gallery;
