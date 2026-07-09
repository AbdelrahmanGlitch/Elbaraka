"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  variant = "primary",
  className,
  onClick,
}: ButtonProps) {
  const variants = {
    primary:
        "bg-primary hover:bg-primary-hover text-white shadow-lg",

    secondary:
        "bg-accent hover:brightness-95 text-black shadow",

    outline:
        "border-2 border-primary text-primary hover:bg-primary hover:text-white",
    };

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.96 }}
      onClick={onClick}
      className={clsx(
        "rounded-full px-7 py-3 font-semibold transition-all duration-300",
        variants[variant],
        className
      )}
    >
      {children}
    </motion.button>
  );
}