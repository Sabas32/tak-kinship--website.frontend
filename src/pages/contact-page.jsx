import { useEffect, useState } from "react";
import FAQComponent from "../components/FAQComponent";
import ContactUs from "../components/contact-us";
import Footer from "../components/footer";
import OtherPageBanner from "../components/other-page-banner";

const ContactPage = ({ setAllDoneLoading }) => {
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
        pageName="CONTACT"
        title="Contact Us"
        infomation="Although, Final Stages Of The Internal Network Gives A Complete Experience Of The Parameter Of Speculative Environment"
      />
      <ContactUs />
      <FAQComponent setIsLoading={handleLoadingFaQs} />
      <Footer />
    </section>
  );
};

export default ContactPage;
