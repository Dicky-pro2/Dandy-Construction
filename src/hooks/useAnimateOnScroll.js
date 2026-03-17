import { useInView } from "react-intersection-observer";

export const useAnimateOnScroll = (threshold = 0.15) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold });
  return { ref, inView };
};