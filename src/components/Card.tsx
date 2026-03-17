"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface CardProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  external?: boolean;
  light?: boolean;
}

export default function Card({
  children,
  href,
  className = "",
  external = false,
  light = false,
}: CardProps) {
  const darkStyles = "border-border bg-bg-secondary";
  const lightStyles = "border-[#e0e0e0] bg-white";
  const hoverBorder = light
    ? "rgba(0,0,0,0.25)"
    : "rgba(255,255,255,0.15)";

  const cardContent = (
    <motion.div
      className={`h-full border p-6 transition-colors flex flex-col ${light ? lightStyles : darkStyles} ${className}`}
      whileHover={{
        y: -4,
        borderColor: hoverBorder,
      }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );

  if (href && external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {cardContent}
      </a>
    );
  }

  if (href) {
    return <Link href={href}>{cardContent}</Link>;
  }

  return cardContent;
}
