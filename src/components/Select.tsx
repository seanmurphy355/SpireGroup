"use client";

import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface SelectProps {
  name: string;
  options: string[];
  placeholder?: string;
  required?: boolean;
  value?: string;
  onChange?: (value: string) => void;
}

export default function Select({
  name,
  options,
  placeholder = "Select an option",
  required = false,
  value: controlledValue,
  onChange,
}: SelectProps) {
  const [open, setOpen] = useState(false);
  const [internalValue, setInternalValue] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  const value = controlledValue ?? internalValue;

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleSelect(opt: string) {
    if (onChange) {
      onChange(opt);
    } else {
      setInternalValue(opt);
    }
    setOpen(false);
  }

  return (
    <div ref={ref} className="relative">
      <input type="hidden" name={name} value={value} required={required} />
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between border border-border bg-bg-secondary px-4 py-3 text-sm outline-none transition-colors focus:border-white/30"
      >
        <span className={value ? "text-white" : "text-text-muted"}>
          {value || placeholder}
        </span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          className={`text-text-muted transition-transform duration-150 ${open ? "rotate-180" : ""}`}
        >
          <path
            d="M3 4.5L6 7.5L9 4.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="absolute z-50 mt-1 w-full border border-border bg-bg-elevated py-1"
          >
            {options.map((opt) => (
              <li key={opt}>
                <button
                  type="button"
                  onClick={() => handleSelect(opt)}
                  className={`flex w-full items-center px-4 py-2.5 text-left text-sm transition-colors ${
                    value === opt
                      ? "text-white bg-white/5"
                      : "text-text-secondary hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {opt}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
