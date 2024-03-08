import FAQComponent from "../components/FAQComponent";
import ContactUs from "../components/contact-us";
import Footer from "../components/footer";
import Gallery from "../components/gallery";
import OtherPageBanner from "../components/other-page-banner";


const GalleryPage = () => {
  return (
    <section>
      <OtherPageBanner
        pageName="GALLERY"
        title="Gallery Us"
        infomation="Although, Final Stages Of The Internal Network Gives A Complete Experience Of The Parameter Of Speculative Environment"
      />
      <Gallery />
      <FAQComponent />
      <ContactUs />
      <Footer />
    </section>
  );
};

export default GalleryPage;
