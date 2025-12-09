"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export interface StatsCounterProps {
  /** Target number to count to */
  value: number;
  /** Label text below the number */
  label: string;
  /** Optional suffix (e.g., "+", "%", "K") */
  suffix?: string;
  /** Optional prefix (e.g., "$") */
  prefix?: string;
  /** Duration of animation in seconds */
  duration?: number;
  /** Custom className for additional styling */
  className?: string;
  /** Color variant for the counter */
  variant?: "blue" | "cyan" | "orange" | "slate";
  /** Delay before animation starts (in seconds) */
  animationDelay?: number;
}

const variantStyles = {
  blue: "text-brand-blue-600",
  cyan: "text-brand-cyan-600",
  orange: "text-brand-orange-600",
  slate: "text-brand-slate-700",
};

const AnimatedNumber: React.FC<{
  value: number;
  duration: number;
  delay: number;
}> = ({ value, duration, delay }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [hasStarted, setHasStarted] = useState(false);

  // Spring animation for smooth counting
  const spring = useSpring(0, {
    duration: duration * 1000,
    bounce: 0,
  });

  const display = useTransform(spring, (current) =>
    Math.floor(current).toLocaleString()
  );

  useEffect(() => {
    if (isInView && !hasStarted) {
      const timer = setTimeout(() => {
        spring.set(value);
        setHasStarted(true);
      }, delay * 1000);

      return () => clearTimeout(timer);
    }
  }, [isInView, hasStarted, spring, value, delay]);

  return <motion.span ref={ref}>{display}</motion.span>;
};

const StatsCounter = React.forwardRef<HTMLDivElement, StatsCounterProps>(
  (
    {
      value,
      label,
      suffix = "",
      prefix = "",
      duration = 2,
      className,
      variant = "blue",
      animationDelay = 0,
      ...props
    },
    ref
  ) => {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{
          duration: 0.5,
          delay: animationDelay,
          ease: "easeOut",
        }}
        className={cn(
          "flex flex-col items-center justify-center text-center",
          className
        )}
        {...props}
      >
        {/* Counter number */}
        <div
          className={cn(
            "mb-2 text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl",
            variantStyles[variant]
          )}
          aria-live="polite"
        >
          {prefix}
          <AnimatedNumber
            value={value}
            duration={duration}
            delay={animationDelay}
          />
          {suffix}
        </div>

        {/* Label */}
        <p className="text-base font-medium uppercase tracking-wider text-brand-slate-600 md:text-lg">
          {label}
        </p>
      </motion.div>
    );
  }
);

StatsCounter.displayName = "StatsCounter";

export { StatsCounter };
