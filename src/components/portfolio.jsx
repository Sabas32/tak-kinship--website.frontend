import "../css/portfolio.css";
import testAppSite from "../images/test-app-site.jpg";
import eyeIcon from "../images/svgs/eye-svgrepo-com.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import configImages from "./configImages";
import configHeaders from "./config-headers";
import { useInView } from "react-intersection-observer";

const Portfolio = () => {
  const [portfolioArray, setPortfolioArray] = useState([]);
  const [filteredportfolioArray, setFilteredPortfolioArray] = useState([]);

  useEffect(() => {
    const handleFetchProjects = async () => {
      try {
        const response = await axios.get(
          "https://tak-devs-web-6dd969e7026b.herokuapp.com/api/projects/",
          {
            headers: configHeaders,
          }
        );
        console.log(response);
        console.log(response.data);
        setPortfolioArray(response.data);
        setFilteredPortfolioArray(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    handleFetchProjects();
  }, []);

  function handleFilterToAll() {
    var filtered;
    filtered = portfolioArray;

    setFilteredPortfolioArray(filtered);
    console.log(filtered);
  }
  function handleFilterToEach(searchQuery) {
    // let searchQuery = "Web";
    var filtered;
    filtered = portfolioArray;

    filtered = portfolioArray.filter((e) => e.type === searchQuery);
    setFilteredPortfolioArray(filtered);
    console.log(filtered);
  }

  const [preTitleRef, preTitleInview] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [titleRef, titleInview] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [navProjectsRef, navProjectsInview] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [projectsRef, projectsInview] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div className="portfolio">
      <h4
        // className="pretitle"
        className={`pretitle elementOut ${preTitleInview ? "elementIn" : ""}`}
        ref={preTitleRef}
      >
        portfolio
      </h4>
      <h1
        // className="title"
        className={`title elementOut ${titleInview ? "elementIn" : ""}`}
        ref={titleRef}
      >
        Our Portfolio
      </h1>
      <div className="projects">
        <div
          // className=""
          className={`navProjects elementOut ${
            navProjectsInview ? "elementIn" : ""
          }`}
          ref={navProjectsRef}
        >
          <ul>
            <li>
              <p className="nav-link" onClick={handleFilterToAll}>
                All
              </p>
            </li>
            <li>
              <p
                className="nav-link"
                onClick={() => handleFilterToEach("Mobile App")}
              >
                Mobile
              </p>
            </li>
            <li>
              <p className="nav-link" onClick={() => handleFilterToEach("Web")}>
                Web
              </p>
            </li>
            <li>
              <p
                className="nav-link"
                onClick={() => handleFilterToEach("Decktop")}
              >
                Desktop
              </p>
            </li>
          </ul>
        </div>

        <div className="projectsContainer">
          {filteredportfolioArray.map((e) => (
            <div ref={projectsRef}>
              <div
                // className="singleProject"
                key={e.id}
                className={`singleProject elementOut ${
                  projectsInview ? "elementIn" : ""
                }`}
              >
                <img
                  src={`${configImages}${e.project_background_image}`}
                  alt="app-img"
                  className="back-Img"
                />
                <div className="veiwProjectOverly-black"></div>
                <div className="veiwProjectOverly">
                  <h3>{e.title}</h3>
                  <h6>{e.type} Application</h6>
                  <div className="madeWith">
                    {e.tech_stack.map((stack, index) => (
                      <p key={index}>#{stack.language}</p>
                    ))}
                    {/* <p>#django </p> */}
                  </div>
                  <Link
                    to={`/portfolio/project/${e.id}/${e.type}`}
                    target="_top"
                  >
                    <div className="viewButton">
                      <img src={eyeIcon} alt="" />
                      <a>View Project</a>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

const ProjectBlock = () => {
  return (
    <div className="singleProject">
      <img src={testAppSite} alt="app-img" className="back-Img" />
      <div className="veiwProjectOverly-black"></div>
      <div className="veiwProjectOverly">
        <h3>Telxul</h3>
        <h6>Web Application</h6>
        <div className="madeWith">
          <p>#react </p>
          <p>#django </p>
        </div>
        <div className="viewButton ">
          <img src={eyeIcon} alt="" />
          <a>View Project</a>
        </div>
      </div>
    </div>
  );
};
