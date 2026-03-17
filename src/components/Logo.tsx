"use client";

interface LogoProps {
  size?: number;
  className?: string;
}

export default function Logo({ size = 40, className = "" }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle
        cx="50"
        cy="50"
        r="34"
        stroke="white"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="200 14"
        transform="rotate(-95 50 50)"
      />
      <path
        d="M50 18 L54 72 Q52 78 50 80 Q48 78 46 72 Z"
        fill="url(#spireGradient)"
      />
      <defs>
        <linearGradient
          id="spireGradient"
          x1="50"
          y1="18"
          x2="50"
          y2="80"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#cccccc" />
        </linearGradient>
      </defs>
    </svg>
  );
}
