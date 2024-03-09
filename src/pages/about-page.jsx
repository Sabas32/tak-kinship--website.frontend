import { useEffect, useState } from "react";
import FAQComponent from "../components/FAQComponent";
import AboutUs from "../components/about-us";
import ContactUs from "../components/contact-us";
import Footer from "../components/footer";
import OtherPageBanner from "../components/other-page-banner";

const AboutPage = ({ setAllDoneLoading }) => {
  const [loadingAbout, setLoadingAbout] = useState(true);

  const handleLoadingAbout = (isLoading) => {
    setLoadingAbout(isLoading);
  };

  const [loadingFaQs, setLoadingFaQs] = useState(true);

  const handleLoadingFaQs = (isLoading) => {
    setLoadingFaQs(isLoading);
  };

  useEffect(() => {
    if (!loadingAbout && !loadingFaQs) {
      console.log("all Done ------------------------------------");
      console.log(loadingAbout, loadingFaQs);
      setAllDoneLoading(true);
    } else {
      console.log("all Start xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
      console.log(loadingAbout, loadingFaQs);
    }
  }, [loadingAbout, loadingFaQs]);

  return (
    <section>
      <OtherPageBanner
        pageName="ABOUT"
        title="About Us"
        infomation="Although, Final Stages Of The Internal Network Gives A Complete Experience Of The Parameter Of Speculative Environment"
      />
      <AboutUs setIsLoading={handleLoadingAbout} />
      <FAQComponent setIsLoading={handleLoadingFaQs} />
      <ContactUs />
      <Footer />
    </section>
  );
};

export default AboutPage;
