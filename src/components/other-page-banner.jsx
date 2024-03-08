import "../css/other-page-banner.css";
import { useInView } from "react-intersection-observer";

const OtherPageBanner = ({ pageName, title, infomation }) => {
  const [preTitleRef, preTitleInview] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [titleRef, titleInview] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [postTitleRef, postTitleInview] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <div className="otherPageBanner">
      <ol
        className={` titleNotSeen ${preTitleInview ? "titleInView" : ""}`}
        ref={preTitleRef}
      >
        <li>
          <a href="/">Home</a>
        </li>
        <li>{pageName}</li>
      </ol>
      <h1
        // className="title"
        className={`title titleNotSeen ${titleInview ? "titleInView" : ""}`}
        ref={titleRef}
      >
        {title}
      </h1>
      <p
        className={` titleNotSeen ${postTitleInview ? "titleInView" : ""}`}
        ref={postTitleRef}
      >
        {infomation}
      </p>
    </div>
  );
};

export default OtherPageBanner;
