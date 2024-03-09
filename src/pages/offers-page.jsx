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

  useEffect(() => {
    if (!loadingFaQs) {
      console.log("all Done ------------------------------------");
      console.log(loadingFaQs);
      setAllDoneLoading(true);
    } else {
      console.log("all Start xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
      console.log(loadingFaQs);
    }
  }, [loadingFaQs]);

  return (
    <section>
      <OtherPageBanner
        pageName="OFFERS"
        title="Our Offers"
        infomation="Although, Final Stages Of The Internal Network Gives A Complete Experience Of The Parameter Of Speculative Environment"
      />
      <Offers />
      <FAQComponent setIsLoading={handleLoadingFaQs} />
      <ContactUs />
      <Footer />
    </section>
  );
};

export default OffersPage;
