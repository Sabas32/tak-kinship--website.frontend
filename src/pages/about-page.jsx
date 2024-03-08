import FAQComponent from "../components/FAQComponent";
import AboutUs from "../components/about-us";
import ContactUs from "../components/contact-us";
import Footer from "../components/footer";
import OtherPageBanner from "../components/other-page-banner";

const AboutPage = () => {
  return (
    <section>
      <OtherPageBanner
        pageName="ABOUT"
        title="About Us"
        infomation="Although, Final Stages Of The Internal Network Gives A Complete Experience Of The Parameter Of Speculative Environment"
      />
      <AboutUs />
      <FAQComponent />
      <ContactUs />
      <Footer />
    </section>
  );
};

export default AboutPage;
