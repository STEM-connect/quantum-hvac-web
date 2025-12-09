"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type ProjectCategory =
  | "Industrial"
  | "Commercial"
  | "Residential"
  | "Refrigeration"
  | "Sheet Metal";

export interface ProjectCardProps {
  /** Project title */
  title: string;
  /** Brief description */
  description: string;
  /** Image URL or path */
  image: string;
  /** Project category/tag */
  category: ProjectCategory;
  /** Optional link to project details */
  href?: string;
  /** Custom className for additional styling */
  className?: string;
  /** Image alt text for accessibility */
  imageAlt?: string;
}

const categoryStyles: Record<
  ProjectCategory,
  { bg: string; text: string; border: string }
> = {
  Industrial: {
    bg: "bg-brand-blue-50",
    text: "text-brand-blue-700",
    border: "border-brand-blue-200",
  },
  Commercial: {
    bg: "bg-brand-cyan-50",
    text: "text-brand-cyan-700",
    border: "border-brand-cyan-200",
  },
  Residential: {
    bg: "bg-brand-orange-50",
    text: "text-brand-orange-700",
    border: "border-brand-orange-200",
  },
  Refrigeration: {
    bg: "bg-brand-cyan-50",
    text: "text-brand-cyan-700",
    border: "border-brand-cyan-200",
  },
  "Sheet Metal": {
    bg: "bg-brand-slate-100",
    text: "text-brand-slate-700",
    border: "border-brand-slate-300",
  },
};

const ProjectCard = React.forwardRef<HTMLDivElement, ProjectCardProps>(
  (
    {
      title,
      description,
      image,
      category,
      href,
      className,
      imageAlt,
      ...props
    },
    ref
  ) => {
    const categoryStyle = categoryStyles[category];

    const cardContent = (
      <motion.div
        ref={ref}
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={cn(
          "group relative h-full overflow-hidden rounded-2xl bg-white shadow-soft transition-all duration-300",
          "hover:shadow-soft-lg",
          className
        )}
        {...props}
      >
        {/* Image container */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-brand-slate-100">
          <Image
            src={image}
            alt={imageAlt || title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* Overlay gradient on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-slate-900/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          {/* Category tag */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="absolute left-4 top-4"
          >
            <span
              className={cn(
                "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide backdrop-blur-sm",
                categoryStyle.bg,
                categoryStyle.text,
                categoryStyle.border
              )}
            >
              {category}
            </span>
          </motion.div>

          {/* View project button - appears on hover */}
          {href && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileHover={{ scale: 1.05 }}
              className="absolute bottom-4 right-4 opacity-0 transition-all duration-300 group-hover:opacity-100"
            >
              <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-blue-600 shadow-lg">
                <span>View Project</span>
                <ArrowRight size={16} strokeWidth={2.5} />
              </div>
            </motion.div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Title */}
          <h3 className="mb-2 text-xl font-bold tracking-tight text-brand-slate-900 transition-colors duration-200 group-hover:text-brand-blue-600">
            {title}
          </h3>

          {/* Description */}
          <p className="text-sm leading-relaxed text-brand-slate-600">
            {description}
          </p>
        </div>
      </motion.div>
    );

    // Wrap in Link if href is provided
    if (href) {
      return (
        <Link
          href={href}
          className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-500 focus-visible:ring-offset-2 rounded-2xl"
          aria-label={`View ${title} project`}
        >
          {cardContent}
        </Link>
      );
    }

    return cardContent;
  }
);

ProjectCard.displayName = "ProjectCard";

export { ProjectCard };
