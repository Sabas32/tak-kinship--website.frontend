// AnimateChildrenIn.jsx
import React, { useEffect, useRef, useState } from "react";
import "../../css/AnimateChildrenIn.css"; // Import your CSS file for animations

const AnimateChildrenIn = ({ children, threshold = 0.5 }) => {
  const parentRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold }
    );

    if (parentRef.current) {
      observer.observe(parentRef.current);
    }

    return () => {
      if (parentRef.current) {
        observer.unobserve(parentRef.current);
      }
    };
  }, [threshold]);

  return React.Children.map(children, (child) =>
    React.cloneElement(child, {
      className: `animated-child ${isIntersecting ? "animate" : ""} ${
        child.props.className || ""
      }`,
    })
  );
};

export default AnimateChildrenIn;
