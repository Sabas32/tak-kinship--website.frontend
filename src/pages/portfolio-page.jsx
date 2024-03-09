import { useEffect, useState } from "react";
import FAQComponent from "../components/FAQComponent";
import ContactUs from "../components/contact-us";
import Footer from "../components/footer";
import OtherPageBanner from "../components/other-page-banner";
import Portfolio from "../components/portfolio";

const PortfolioPage = ({ setAllDoneLoading }) => {
  const [loadingFaQs, setLoadingFaQs] = useState(true);

  const handleLoadingFaQs = (isLoading) => {
    setLoadingFaQs(isLoading);
  };

  const [loadingPortFolio, setLoadingPortFolio] = useState(true);

  const handleLoadingPortFolio = (isLoading) => {
    setLoadingPortFolio(isLoading);
  };

  useEffect(() => {
    if (!loadingFaQs && !loadingPortFolio) {
      console.log("all Done ------------------------------------");
      console.log(loadingFaQs, loadingPortFolio);
      setAllDoneLoading(true);
    } else {
      console.log("all Start xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
      console.log(loadingFaQs, loadingPortFolio);
    }
  }, [loadingFaQs, loadingPortFolio]);

  return (
    <section>
      <OtherPageBanner
        pageName="OFFERS"
        title="Our Offers"
        infomation="Although, Final Stages Of The Internal Network Gives A Complete Experience Of The Parameter Of Speculative Environment"
      />
      <Portfolio setIsLoading={handleLoadingPortFolio} />
      <FAQComponent setIsLoading={handleLoadingFaQs} />
      <ContactUs />
      <Footer />
    </section>
  );
};

export default PortfolioPage;
