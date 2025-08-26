import { useInView } from "framer-motion";
import { useRef } from "react";

// Custom hook for scroll-triggered animations
export const useScrollAnimation = (amount = 0.1) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount,
    margin: "-100px 0px",
  });

  return { ref, isInView };
};

// Hook for continuous scroll effects (like parallax)
export const useParallaxScroll = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0,
  });

  return { ref, isInView };
};
