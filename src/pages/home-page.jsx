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

const HomePage = () => {
  return (
    <section>
      
      <Home />
      <Offers />
      <AboutUs />
      <Clients />
      <Portfolio />
      <Testimonials />
      <Team />
      <FAQComponent />
      <ContactUs />
      <Footer />
    </section>
  );
};

export default HomePage;
