import { useAnimateOnScroll } from "../hooks/useAnimateOnScroll";

const AnimatedSection = ({ children, className = "", direction = "up", delay = "" }) => {
  const { ref, inView } = useAnimateOnScroll();

  const directions = {
    up: "translate-y-10",
    down: "-translate-y-10",
    left: "-translate-x-10",
    right: "translate-x-10",
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${delay} ${
        inView ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${directions[direction]}`
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;