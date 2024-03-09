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

  useEffect(() => {
    if (!loadingFaQs && !loadingGallery) {
      console.log("all Done ------------------------------------");
      console.log(loadingFaQs, loadingGallery);
      setAllDoneLoading(true);
    } else {
      console.log("all Start xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
      console.log(loadingFaQs, loadingGallery);
    }
  }, [loadingFaQs, loadingGallery]);
  return (
    <section>
      <OtherPageBanner
        pageName="GALLERY"
        title="Gallery Us"
        infomation="Although, Final Stages Of The Internal Network Gives A Complete Experience Of The Parameter Of Speculative Environment"
      />
      <Gallery setIsLoading={handleLoadingGallery} />
      <FAQComponent setIsLoading={handleLoadingFaQs} />
      <ContactUs />
      <Footer />
    </section>
  );
};

export default GalleryPage;
