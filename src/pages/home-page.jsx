import "../css/home.css";
import Offers from "../components/our-offers";
import AboutUs from "../components/about-us";
import Clients from "../components/clients";
import Portfolio from "../components/portfolio";
import Testimonials from "../components/testimonials";
import Team from "../components/team";
import Home from "../components/home";
import OtherPageBanner from "../components/other-page-banner";
import Footer from "../components/footer";
import ContactUs from "../components/contact-us";
import FAQComponent from "../components/FAQComponent";
import { useEffect, useState } from "react";

const HomePage = ({ setAllDoneLoading }) => {
  // const [isDoneAll, setIsDoneAll] = useState(false);

  const [loadingAbout, setLoadingAbout] = useState(true);

  const handleLoadingAbout = (isLoading) => {
    setLoadingAbout(isLoading);
  };

  const [loadingClients, setLoadingClients] = useState(true);

  const handleLoadingClients = (isLoading) => {
    setLoadingClients(isLoading);
  };

  const [loadingPortFolio, setLoadingPortFolio] = useState(true);

  const handleLoadingPortFolio = (isLoading) => {
    setLoadingPortFolio(isLoading);
  };

  const [loadingTestimonial, setLoadingTestimonial] = useState(true);

  const handleLoadingTestimonial = (isLoading) => {
    setLoadingTestimonial(isLoading);
  };

  const [loadingTeam, setLoadingTeam] = useState(true);

  const handleLoadingTeam = (isLoading) => {
    setLoadingTeam(isLoading);
  };

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
    if (
      !loadingAbout &&
      !loadingClients &&
      !loadingFaQs &&
      !loadingPortFolio &&
      !loadingTeam &&
      !loadingTestimonial &&
      !loadingContactInfo &&
      !loadingFooter
    ) {
      setAllDoneLoading(true);
    } else {
      // console.log("all Start xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
      // console.log(
      //   loadingAbout,
      //   loadingClients,
      //   loadingFaQs,
      //   loadingPortFolio,
      //   loadingTeam,
      //   loadingTestimonial,
      //   loadingContactInfo
      // );
    }
  }, [
    loadingAbout,
    loadingClients,
    loadingFaQs,
    loadingPortFolio,
    loadingTeam,
    loadingTestimonial,
    loadingContactInfo,
    loadingFooter,
  ]);

  return (
    <section>
      <Home />
      <Offers />
      <AboutUs setIsLoading={handleLoadingAbout} />
      <Clients setIsLoading={handleLoadingClients} />
      <Portfolio setIsLoading={handleLoadingPortFolio} />
      <Testimonials setIsLoading={handleLoadingTestimonial} />
      <Team setIsLoading={handleLoadingTeam} />
      <FAQComponent setIsLoading={handleLoadingFaQs} />
      <ContactUs setIsLoading={handleLoadingContactInfo} />
      <Footer setIsLoading={handleLoadingFooter} />
    </section>
  );
};

export default HomePage;
