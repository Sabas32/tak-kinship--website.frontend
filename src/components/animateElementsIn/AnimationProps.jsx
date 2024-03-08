// AnimationProps.js
export const getAnimationProps = ({
  type = "fade",
  duration = 500,
  delay = 0,
  threshold = 0.5,
}) => {
  switch (type) {
    case "fade":
      return {
        opacity: 1,
        from: { opacity: 0 },
        config: { duration, delay },
        onRest: () => {},
        threshold,
      };
    case "slideUp":
      return {
        opacity: 1,
        from: { opacity: 0, transform: "translateY(20px)" },
        config: { duration, delay },
        onRest: () => {},
        threshold,
      };
    case "flip":
      return {
        opacity: 1,
        from: { opacity: 0, transform: "rotateX(90deg)" },
        config: { duration, delay },
        onRest: () => {},
        threshold,
      };
    case "zoomIn":
      return {
        opacity: 1,
        from: { opacity: 0, transform: "scale(0.5)" },
        config: { duration, delay },
        onRest: () => {},
        threshold,
      };
    case "slideDown":
      return {
        opacity: 1,
        from: { opacity: 0, transform: "translateY(-20px)" },
        config: { duration, delay },
        onRest: () => {},
        threshold,
      };
    case "rotate":
      return {
        opacity: 1,
        from: { opacity: 0, transform: "rotate(180deg)" },
        config: { duration, delay },
        onRest: () => {},
        threshold,
      };
    case "scale":
      return {
        opacity: 1,
        from: { opacity: 0, transform: "scale(0.5)" },
        config: { duration, delay },
        onRest: () => {},
        threshold,
      };
    case "wobble":
      return {
        opacity: 1,
        from: { opacity: 0, transform: "translateX(-25%)" },
        config: { duration, delay },
        onRest: () => {},
        threshold,
      };
    case "tada":
      return {
        opacity: 1,
        from: { opacity: 0, transform: "scale(1.1) rotate(-3deg)" },
        config: { duration, delay },
        onRest: () => {},
        threshold,
      };
    case "jello":
      return {
        opacity: 1,
        from: { opacity: 0, transform: "skewX(-12.5deg)" },
        config: { duration, delay },
        onRest: () => {},
        threshold,
      };
    case "rotate360":
      return {
        opacity: 1,
        from: { opacity: 0, transform: "rotate(360deg)" },
        config: { duration, delay },
        onRest: () => {},
        threshold,
      };
    case "translateDiagonal":
      return {
        opacity: 1,
        from: { opacity: 0, transform: "translate(50px, 50px)" },
        config: { duration, delay },
        onRest: () => {},
        threshold,
      };
    case "translateOppositeDiagonal":
      return {
        opacity: 1,
        from: { opacity: 0, transform: "translate(-50px, -50px)" },
        config: { duration, delay },
        onRest: () => {},
        threshold,
      };
    case "scaleUp":
      return {
        opacity: 1,
        from: { opacity: 0, transform: "scale(1.5)" },
        config: { duration, delay },
        onRest: () => {},
        threshold,
      };
    case "rotateY180":
      return {
        opacity: 1,
        from: { opacity: 0, transform: "rotateY(180deg)" },
        config: { duration, delay },
        onRest: () => {},
        threshold,
      };
    case "slideLeftToRight":
      return {
        opacity: 1,
        from: { opacity: 0, transform: "translateX(-100%)" },
        config: { duration, delay },
        onRest: () => {},
        threshold,
      };
    case "slideRightToLeft":
      return {
        opacity: 1,
        from: { opacity: 0, transform: "translateX(100%)" },
        config: { duration, delay },
        onRest: () => {},
        threshold,
      };
    // Add more cases for other animation types as needed
    default:
      return {
        opacity: 1,
        from: { opacity: 0 },
        config: { duration, delay },
        onRest: () => {},
        threshold,
      };
  }
};
