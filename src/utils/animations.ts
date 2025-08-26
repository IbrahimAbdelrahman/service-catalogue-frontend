import type { Variants } from "framer-motion";

// Animation variants for different elements
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const fadeInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export const fadeInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

// Hero section stagger animation
export const heroContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.15,
    },
  },
};

// Tag animation with stroke effect
export const tagAnimation: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Stroke rotation animation (recreating Webflow's stroke effect)
export const strokeAnimation: Variants = {
  hidden: {
    rotate: 0,
    opacity: 0,
  },
  visible: {
    rotate: 360,
    opacity: 1,
    transition: {
      duration: 2,
      ease: "linear",
      repeat: Infinity,
    },
  },
};

// Image parallax effect (recreating the side image movements)
export const imageParallax: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.1,
    x: 0,
    y: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  },
};

// Button hover effects
export const buttonHover = {
  scale: 1.02,
  transition: {
    duration: 0.2,
  },
};

export const buttonTap = {
  scale: 0.98,
  transition: {
    duration: 0.1,
  },
};

// Scroll-based parallax for images (recreating the transform effects)
export const scrollParallax = {
  y: [0, -50],
  transition: {
    duration: 2,
    ease: "easeInOut",
    repeat: Infinity,
    repeatType: "reverse" as const,
  },
};

// Container animations for sections
export const sectionContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
    },
  },
};

// Text reveal animation (for headings)
export const textReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    clipPath: "inset(100% 0 0 0)",
  },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: "inset(0% 0 0 0)",
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};
