import { Link } from "react-router-dom";
import homeImg from "../images/home-img.png";
import { useInView } from "react-intersection-observer";

const Home = () => {
  const [h1Ref, h1InView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const [pRef, pInView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
    // delay: 300,
  });
  const [buttonRef, buttonInView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
    // delay: 500,
  });
  const [rightRef, rightInView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
    // delay: 500,
  });

  return (
    <main className="home">
      <main className="left-right">
        <div className={`ltl-home `}>
          <h1
            className={`isNotVisible ${h1InView ? "homeEmisVisible" : ""}`}
            ref={h1Ref}
            style={{ "--delay": "000ms" }}
          >
            We are <span className="unique-text">TAK Kinship</span> Campony.
          </h1>
          <p
            className={`isNotVisible ${pInView ? "homeEmisVisible" : ""}`}
            ref={pRef}
            style={{ "--delay": "200ms" }}
          >
            At Any Rate, Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing
            Elit. Eaque Amet, Quod Doloribus The Framework Of The Essence
            Represents A Bond Between The Flexible Production Planning And The
            Distribution Of Repetitive Aspect
          </p>
          <Link to="about">
            <button
              href="#"
              className={`btn isNotVisible ${
                buttonInView ? "homeEmisVisible" : ""
              }`}
              ref={buttonRef}
              style={{ "--delay": "700ms" }}
            >
              <p>MORE ABOUT US</p>
            </button>
          </Link>
        </div>
        <div className="rht-home" ref={rightRef}>
          <img
            className={`isNotVisibleIm ${rightInView ? "homeEmisVisible" : ""}`}
            src={homeImg}
            alt=""
          />
        </div>
      </main>
    </main>
  );
};

export default Home;
