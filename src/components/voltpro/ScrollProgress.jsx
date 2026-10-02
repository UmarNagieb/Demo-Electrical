import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  return (
    <motion.div
      style={{ scaleY }}
      className="fixed right-0 top-0 z-[60] h-screen w-[3px] origin-top bg-gradient-to-b from-[#FFD700] via-[#FFD700]/70 to-transparent"
    />
  );
}