"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

interface ScrollAnimationProps {
  children: React.ReactNode;
}

// 1. Deklarasikan tipe data Variants dan ubah kemiringan (ease) menjadi cubic-bezier array
const sectionVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 50 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.42, 0, 0.58, 1], // Format cubic-bezier standar yang disukai TypeScript
    },
  },
};

export default function ScrollAnimation({ children }: ScrollAnimationProps) {
  return (
    <>
      {React.Children.map(children, (child) => (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={sectionVariants}
        >
          {child}
        </motion.div>
      ))}
    </>
  );
}