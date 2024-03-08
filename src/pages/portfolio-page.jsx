import FAQComponent from "../components/FAQComponent";
import ContactUs from "../components/contact-us";
import Footer from "../components/footer";
import OtherPageBanner from "../components/other-page-banner";
import Portfolio from "../components/portfolio";

const PortfolioPage = () => {
  return (
    <section>
      <OtherPageBanner
        pageName="OFFERS"
        title="Our Offers"
        infomation="Although, Final Stages Of The Internal Network Gives A Complete Experience Of The Parameter Of Speculative Environment"
      />
      <Portfolio />
      <FAQComponent />
      <ContactUs />
      <Footer />
    </section>
  );
};

export default PortfolioPage;
