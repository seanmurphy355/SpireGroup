"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type ButtonVariant = "primary" | "outlined" | "dark" | "outlined-dark" | "accent";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  href?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  className?: string;
  external?: boolean;
}

const baseStyles =
  "inline-flex items-center justify-center px-7 py-3 text-sm uppercase tracking-wider cursor-pointer rounded-[3px] transition-all duration-300 ease-out hover:rounded-[12px]";

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-white text-black hover:bg-gray-200",
  outlined:
    "bg-transparent text-white border border-white/30 hover:border-white/60",
  dark: "bg-[#0a0a0a] text-white hover:bg-[#1a1a1a]",
  "outlined-dark":
    "bg-transparent text-[#0a0a0a] border border-[#0a0a0a]/30 hover:border-[#0a0a0a]/60",
  accent:
    "text-white bg-gradient-to-r from-[#b84050] to-[#3a1830] hover:from-[#c84858] hover:to-[#4a2040]",
};

export default function Button({
  children,
  variant = "primary",
  href,
  type = "button",
  onClick,
  className = "",
  external = false,
}: ButtonProps) {
  const classes = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href && external) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}
