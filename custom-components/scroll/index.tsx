"use client";

import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  x?: number;
  scale?: number;
};

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  duration = 0.7,
  y = 40,
  x = 0,
  scale = 1,
}: ScrollRevealProps) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: false,
    margin: "-100px",
  });

  return (
    <motion.div
      ref={ref}
      className={`w-full ${className}`}
      initial={false}
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : y,
        x: isInView ? 0 : x,
        scale: isInView ? 1 : scale,
      }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}