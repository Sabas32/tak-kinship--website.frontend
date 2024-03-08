import "../css/footer.css";
import testIcon from "../images/svgs/sun-svgrepo-com.svg";
import instagramIco from "../images/svgs/instagramFooter.svg";
import linkedinico from "../images/svgs/linkedInFooter.svg";
import twitterIco from "../images/svgs/twitterFooter.svg";
import skypeIco from "../images/svgs/skypeFooter.svg";
import chevronRight from "../images/svgs/chevron-right-svgrepo-com.svg";
import taKLogo from "../images/TAK Kinship-Logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerItems = document.querySelectorAll(".footer_element_animated");

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("footer_element_animatedIn");
      } else {
        // entry.target.classList.remove("faqIn");
      }
    });
  };

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  const observer = new IntersectionObserver(
    handleIntersection,
    observerOptions
  );

  footerItems.forEach((faqItem) => {
    observer.observe(faqItem);
  });

  return (
    <footer className="footer">
      <div className="top">
        <div className="">
          <div className="box footer_element_animated">
            <a href="#" className="logo" style={{ "--delay": "0ms" }}>
              <img class="my-2" src={taKLogo} alt="" />
            </a>
            <p style={{ "--delay": "100ms" }}>
              Lorem ipsum dolor sit amet aspernatur exercitationem fugiat.
            </p>
            <h4 class="" style={{ "--delay": "200ms" }}>
              follow us
            </h4>
            <div class="social">
              <a href="#" className="icon" style={{ "--delay": "300ms" }}>
                <img src={instagramIco} alt="" style={{ "--delay": "400ms" }} />
              </a>
              <a href="#" className="icon" style={{ "--delay": "500ms" }}>
                <img src={linkedinico} alt="" />
              </a>
              <a href="#" className="icon" style={{ "--delay": "600ms" }}>
                <img src={twitterIco} alt="" />
              </a>
              <a href="#" className="icon" style={{ "--delay": "700ms" }}>
                <img src={skypeIco} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div class="ref-links footer_element_animated">
          <h4>Site Map</h4>
          <ul class="">
            <li class="" style={{ "--delay": "0ms" }}>
              <img src={chevronRight} alt="" />
              <Link target="_top" to="/">
                Home
              </Link>
            </li>
            <li class="" style={{ "--delay": "100ms" }}>
              <img src={chevronRight} alt="" />
              <Link target="_top" to="/about">
                About
              </Link>
            </li>
            <li class="" style={{ "--delay": "200ms" }}>
              <img src={chevronRight} alt="" />
              <Link target="_top" to="/offers">
                Offers
              </Link>
            </li>
            <li class="" style={{ "--delay": "300ms" }}>
              <img src={chevronRight} alt="" />
              <Link target="_top" to="/portfolio">
                Portfolio
              </Link>
            </li>
            <li class="" style={{ "--delay": "400ms" }}>
              <img src={chevronRight} alt="" />
              <Link target="_top" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div class="ref-links footer_element_animated">
          <h4>Follow Us</h4>
          <ul class="">
            <li class="" style={{ "--delay": "000ms" }}>
              <img src={chevronRight} alt="" />
              <a href="#">Discord</a>
            </li>
            <li class="" style={{ "--delay": "100ms" }}>
              <img src={chevronRight} alt="" />
              <a href="#">Instagram</a>
            </li>
            <li class="" style={{ "--delay": "200ms" }}>
              <img src={chevronRight} alt="" />
              <a href="#">Linkedin</a>
            </li>
            <li class="" style={{ "--delay": "300ms" }}>
              <img src={chevronRight} alt="" />
              <a href="#">X</a>
            </li>
          </ul>
        </div>
        <div class="ref-links footer_element_animated">
          <h4>our services</h4>
          <ul class="">
            <li class="" style={{ "--delay": "000ms" }}>
              <img src={chevronRight} alt="" />
              <a href="#">digital marketing</a>
            </li>
            <li class="" style={{ "--delay": "100ms" }}>
              <img src={chevronRight} alt="" />
              <a href="#">web developement</a>
            </li>
            <li class="" style={{ "--delay": "200ms" }}>
              <img src={chevronRight} alt="" />
              <a href="#">cyber security</a>
            </li>
            <li class="" style={{ "--delay": "300ms" }}>
              <img src={chevronRight} alt="" />
              <a href="#">graphic design</a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="bottom">
        <p class="creadits">
          © 2024 Created by: <a href="#">palnet</a>
        </p>
        <div>
          <a href="">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
