"use client";

import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FeatureCardProps {
  /** Title of the feature */
  title: string;
  /** Description text */
  description: string;
  /** Icon component from lucide-react */
  icon: LucideIcon;
  /** Custom className for additional styling */
  className?: string;
  /** Icon size in pixels */
  iconSize?: number;
  /** Icon color variant */
  iconColor?: "blue" | "cyan" | "orange" | "slate";
  /** Delay for stagger animation (in seconds) */
  animationDelay?: number;
}

const iconColorStyles = {
  blue: "text-brand-blue-600 bg-brand-blue-50",
  cyan: "text-brand-cyan-600 bg-brand-cyan-50",
  orange: "text-brand-orange-600 bg-brand-orange-50",
  slate: "text-brand-slate-600 bg-brand-slate-50",
};

const FeatureCard = React.forwardRef<HTMLDivElement, FeatureCardProps>(
  (
    {
      title,
      description,
      icon: Icon,
      className,
      iconSize = 24,
      iconColor = "blue",
      animationDelay = 0,
      ...props
    },
    ref
  ) => {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{
          duration: 0.5,
          delay: animationDelay,
          ease: "easeOut",
        }}
        className={cn(
          "group relative flex flex-col items-center text-center transition-all duration-300",
          className
        )}
        {...props}
      >
        {/* Icon container */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className={cn(
            "mb-5 inline-flex items-center justify-center rounded-xl p-3 transition-all duration-300",
            "group-hover:shadow-lg",
            iconColorStyles[iconColor]
          )}
          aria-hidden="true"
        >
          <Icon size={iconSize} strokeWidth={2} />
        </motion.div>

        {/* Title */}
        <h3 className="mb-3 text-xl font-bold tracking-tight text-brand-slate-900">
          {title}
        </h3>

        {/* Description */}
        <p className="text-base leading-relaxed text-brand-slate-600">
          {description}
        </p>
      </motion.div>
    );
  }
);

FeatureCard.displayName = "FeatureCard";

export { FeatureCard };
