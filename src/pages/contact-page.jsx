import FAQComponent from "../components/FAQComponent";
import ContactUs from "../components/contact-us";
import Footer from "../components/footer";
import OtherPageBanner from "../components/other-page-banner";

const ContactPage = () => {
  return (
    <section>
      <OtherPageBanner
        pageName="CONTACT"
        title="Contact Us"
        infomation="Although, Final Stages Of The Internal Network Gives A Complete Experience Of The Parameter Of Speculative Environment"
      />
      <ContactUs />
      <FAQComponent />
      <Footer />
    </section>
  );
};

export default ContactPage;
