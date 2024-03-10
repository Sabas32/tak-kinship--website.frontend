import { useEffect, useState } from "react";
import FAQComponent from "../components/FAQComponent";
import ContactUs from "../components/contact-us";
import Footer from "../components/footer";
import Gallery from "../components/gallery";
import OtherPageBanner from "../components/other-page-banner";

const GalleryPage = ({ setAllDoneLoading }) => {
  const [loadingFaQs, setLoadingFaQs] = useState(true);

  const handleLoadingFaQs = (isLoading) => {
    setLoadingFaQs(isLoading);
  };

  const [loadingGallery, setLoadingGallery] = useState(true);

  const handleLoadingGallery = (isLoading) => {
    setLoadingGallery(isLoading);
  };

  const [loadingContactInfo, setLoadingContactInfo] = useState(true);

  const handleLoadingContactInfo = (isLoading) => {
    setLoadingContactInfo(isLoading);
  };

  const [loadingFooter, setLoadingFooter] = useState(true);

  const handleLoadingFooter = (isLoading) => {
    setLoadingFooter(isLoading);
  };

  useEffect(() => {
    if (
      !loadingFaQs &&
      !loadingGallery &&
      !loadingContactInfo &&
      !loadingFooter
    ) {
      console.log("all Done ------------------------------------");
      console.log(loadingFaQs, loadingGallery, loadingContactInfo);
      setAllDoneLoading(true);
    } else {
      console.log("all Start xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
      console.log(loadingFaQs, loadingGallery, loadingContactInfo);
    }
  }, [loadingFaQs, loadingGallery, loadingContactInfo, loadingFooter]);
  return (
    <section>
      <OtherPageBanner
        pageName="GALLERY"
        title="Gallery Us"
        infomation="Step into our digital museum – where pixels become masterpieces, and each click is a brushstroke in the canvas of coolness. Warning: prolonged exposure may cause an uncontrollable urge to double-click for joy!✌️"
      />
      <Gallery setIsLoading={handleLoadingGallery} />
      <FAQComponent setIsLoading={handleLoadingFaQs} />
      <ContactUs setIsLoading={handleLoadingContactInfo} />
      <Footer setIsLoading={handleLoadingFooter} />
    </section>
  );
};

export default GalleryPage;
