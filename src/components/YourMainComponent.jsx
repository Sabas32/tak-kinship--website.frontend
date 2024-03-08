// YourMainComponent.js
import React from "react";
import ScrollAnimation from "./ScrollAnimation";

const YourMainComponent = () => {
  return (
    <div>
      <h1>Your Main Component</h1>

      {/* Fade animation with custom wrapper element */}
      <ScrollAnimation
        animationType="fade"
        threshold={0.5}
        triggerOnce={false}
        wrapperElement="span"
      >
        <p>
          This element will have a fade animation on scroll, wrapped in a span.
        </p>
      </ScrollAnimation>

      {/* Slide animation with custom wrapper element */}
      <ScrollAnimation
        animationType="scale"
        threshold={0.5}
        triggerOnce={false}
        wrapperElement="h2"
        className="testBlock"
      >
        <p>
          This element will have a slide animation on scroll, wrapped in an h2.
        </p>
      </ScrollAnimation>

      {/* Scale animation with default div wrapper */}
      <ScrollAnimation
        animationType="scale"
        threshold={0.5}
        triggerOnce={false}
      >
        <p>
          This element will have a scale animation on scroll, wrapped in a div
          (default).
        </p>
      </ScrollAnimation>

      {/* Add more animations as needed */}
    </div>
  );
};

export default YourMainComponent;
