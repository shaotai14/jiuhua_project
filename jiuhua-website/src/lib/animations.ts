// 动画配置
export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const cardHover = {
  rest: {
    scale: 1,
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    transition: { duration: 0.3, ease: "easeOut" }
  },
  hover: {
    scale: 1.02,
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
    transition: { duration: 0.3, ease: "easeOut" }
  },
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

export const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

export const bounceIn = {
  hidden: { opacity: 0, scale: 0.3 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
      duration: 0.6
    }
  },
};

// 页面过渡动画
export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3, ease: "easeIn" }
  },
};

// 导航栏动画
export const navbarVariants = {
  top: {
    backgroundColor: "rgba(245, 245, 220, 0)",
    boxShadow: "none",
    backdropFilter: "blur(0px)",
  },
  scrolled: {
    backgroundColor: "rgba(245, 245, 220, 0.9)",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(10px)",
  },
};

// 移动端菜单动画
export const mobileMenuVariants = {
  closed: {
    opacity: 0,
    x: "100%",
    transition: { duration: 0.3, ease: "easeIn" }
  },
  open: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: "easeOut" }
  },
};

// 粒子效果配置
export const particleConfig = {
  count: 30,
  speed: 0.5,
  size: { min: 2, max: 6 },
  opacity: { min: 0.3, max: 0.8 },
  color: "#4A7C59",
};

// 视差滚动配置
export const parallaxConfig = {
  speed: 0.5,
  direction: "up" as const,
};