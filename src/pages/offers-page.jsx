import { useEffect, useState } from "react";
import FAQComponent from "../components/FAQComponent";
import ContactUs from "../components/contact-us";
import Footer from "../components/footer";
import OtherPageBanner from "../components/other-page-banner";
import Offers from "../components/our-offers";

const OffersPage = ({ setAllDoneLoading }) => {
  const [loadingFaQs, setLoadingFaQs] = useState(true);

  const handleLoadingFaQs = (isLoading) => {
    setLoadingFaQs(isLoading);
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
    if (!loadingFaQs && !loadingContactInfo && !loadingFooter) {
      console.log("all Done ------------------------------------");
      console.log(loadingFaQs, loadingContactInfo);
      setAllDoneLoading(true);
    } else {
      console.log("all Start xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
      console.log(loadingFaQs, loadingContactInfo);
    }
  }, [loadingFaQs, loadingContactInfo, loadingFooter]);

  return (
    <section>
      <OtherPageBanner
        pageName="OFFERS"
        title="Our Offers"
        infomation=" Let every service be the spark that fuels your vision and propels your goals. Your success, our mission – together, we code the path to achievement."
      />
      <Offers />
      <FAQComponent setIsLoading={handleLoadingFaQs} />
      <ContactUs setIsLoading={handleLoadingContactInfo} />
      <Footer setIsLoading={handleLoadingFooter} />
    </section>
  );
};

export default OffersPage;
