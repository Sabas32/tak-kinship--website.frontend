import FAQComponent from "../components/FAQComponent";
import ContactUs from "../components/contact-us";
import Footer from "../components/footer";
import OtherPageBanner from "../components/other-page-banner";
import Offers from "../components/our-offers";

const OffersPage = () => {
  return (
    <section>
      <OtherPageBanner
        pageName="OFFERS"
        title="Our Offers"
        infomation="Although, Final Stages Of The Internal Network Gives A Complete Experience Of The Parameter Of Speculative Environment"
      />
      <Offers />
      <FAQComponent />
      <ContactUs />
      <Footer />
    </section>
  );
};

export default OffersPage;