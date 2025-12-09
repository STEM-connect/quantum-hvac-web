"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type ServiceVariant = "blue" | "cyan" | "slate" | "orange";

export interface ServiceCardProps {
  /** Title of the service */
  title: string;
  /** Description text */
  description: string;
  /** Icon component from lucide-react */
  icon: LucideIcon;
  /** Optional link URL */
  href?: string;
  /** Color variant for the service division */
  variant?: ServiceVariant;
  /** Custom className for additional styling */
  className?: string;
  /** Icon size in pixels */
  iconSize?: number;
}

const variantStyles: Record<
  ServiceVariant,
  {
    iconBg: string;
    iconHoverBg: string;
    textColor: string;
    borderColor: string;
    gradientOverlay: string;
  }
> = {
  blue: {
    iconBg: "bg-gradient-to-br from-brand-blue-500 to-brand-blue-700",
    iconHoverBg: "group-hover:from-brand-blue-600 group-hover:to-brand-blue-800",
    textColor: "text-brand-blue-600 group-hover:text-brand-blue-700",
    borderColor: "border-brand-blue-100 group-hover:border-brand-blue-200",
    gradientOverlay:
      "from-brand-blue-50/50 to-transparent group-hover:from-brand-blue-100/60",
  },
  cyan: {
    iconBg: "bg-gradient-to-br from-brand-cyan-500 to-brand-cyan-600",
    iconHoverBg: "group-hover:from-brand-cyan-600 group-hover:to-brand-cyan-700",
    textColor: "text-brand-cyan-600 group-hover:text-brand-cyan-700",
    borderColor: "border-brand-cyan-100 group-hover:border-brand-cyan-200",
    gradientOverlay:
      "from-brand-cyan-50/50 to-transparent group-hover:from-brand-cyan-100/60",
  },
  slate: {
    iconBg: "bg-gradient-to-br from-brand-slate-600 to-brand-slate-800",
    iconHoverBg:
      "group-hover:from-brand-slate-700 group-hover:to-brand-slate-900",
    textColor: "text-brand-slate-700 group-hover:text-brand-slate-800",
    borderColor: "border-brand-slate-200 group-hover:border-brand-slate-300",
    gradientOverlay:
      "from-brand-slate-50/50 to-transparent group-hover:from-brand-slate-100/60",
  },
  orange: {
    iconBg: "bg-gradient-to-br from-brand-orange-500 to-brand-orange-600",
    iconHoverBg:
      "group-hover:from-brand-orange-600 group-hover:to-brand-orange-700",
    textColor: "text-brand-orange-600 group-hover:text-brand-orange-700",
    borderColor: "border-brand-orange-100 group-hover:border-brand-orange-200",
    gradientOverlay:
      "from-brand-orange-50/50 to-transparent group-hover:from-brand-orange-100/60",
  },
};

const ServiceCard = React.forwardRef<HTMLDivElement, ServiceCardProps>(
  (
    {
      title,
      description,
      icon: Icon,
      href,
      variant = "blue",
      className,
      iconSize = 28,
      ...props
    },
    ref
  ) => {
    const styles = variantStyles[variant];

    const cardContent = (
      <motion.div
        ref={ref}
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={cn(
          "group relative h-full overflow-hidden rounded-2xl border-2 bg-white shadow-soft transition-all duration-300",
          "hover:shadow-soft-lg",
          styles.borderColor,
          className
        )}
        {...props}
      >
        {/* Gradient overlay */}
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-100",
            styles.gradientOverlay
          )}
          aria-hidden="true"
        />

        {/* Content */}
        <div className="relative flex h-full flex-col p-8">
          {/* Icon */}
          <motion.div
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "mb-6 inline-flex w-fit items-center justify-center rounded-2xl p-4 shadow-lg transition-all duration-300",
              styles.iconBg,
              styles.iconHoverBg
            )}
            aria-hidden="true"
          >
            <Icon className="text-white" size={iconSize} strokeWidth={2} />
          </motion.div>

          {/* Title */}
          <h3 className="mb-3 text-2xl font-bold tracking-tight text-brand-slate-900">
            {title}
          </h3>

          {/* Description */}
          <p className="mb-6 flex-grow text-base leading-relaxed text-brand-slate-600">
            {description}
          </p>

          {/* Learn More link */}
          {href && (
            <div
              className={cn(
                "inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200",
                styles.textColor
              )}
            >
              <span>Learn More</span>
              <motion.div
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight size={18} strokeWidth={2.5} />
              </motion.div>
            </div>
          )}
        </div>
      </motion.div>
    );

    // Wrap in Link if href is provided
    if (href) {
      return (
        <Link
          href={href}
          className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-500 focus-visible:ring-offset-2 rounded-2xl"
          aria-label={`Learn more about ${title}`}
        >
          {cardContent}
        </Link>
      );
    }

    return cardContent;
  }
);

ServiceCard.displayName = "ServiceCard";

export { ServiceCard };
