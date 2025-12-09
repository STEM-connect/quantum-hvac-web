"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface CTAButton {
  /** Button text */
  label: string;
  /** Click handler or href */
  href?: string;
  /** Click handler function */
  onClick?: () => void;
  /** Button variant */
  variant?: "default" | "outline" | "secondary" | "ghost";
  /** Button size */
  size?: "default" | "sm" | "lg";
}

export interface CTASectionProps {
  /** Main headline */
  headline: string;
  /** Supporting description text */
  description?: string;
  /** Primary CTA button */
  primaryButton?: CTAButton;
  /** Secondary CTA button */
  secondaryButton?: CTAButton;
  /** Background variant */
  backgroundVariant?: "gradient" | "image" | "solid" | "none";
  /** Background image URL (when using 'image' variant) */
  backgroundImage?: string;
  /** Gradient colors (when using 'gradient' variant) */
  gradientFrom?: string;
  /** Gradient to color */
  gradientTo?: string;
  /** Background color (when using 'solid' variant) */
  backgroundColor?: string;
  /** Text color variant */
  textColor?: "light" | "dark";
  /** Custom className */
  className?: string;
  /** Container max width */
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
}

const maxWidthStyles = {
  sm: "max-w-screen-sm",
  md: "max-w-screen-md",
  lg: "max-w-screen-lg",
  xl: "max-w-screen-xl",
  "2xl": "max-w-screen-2xl",
  full: "max-w-full",
};

const CTASection = React.forwardRef<HTMLElement, CTASectionProps>(
  (
    {
      headline,
      description,
      primaryButton,
      secondaryButton,
      backgroundVariant = "gradient",
      backgroundImage,
      gradientFrom = "from-brand-blue-600",
      gradientTo = "to-brand-cyan-600",
      backgroundColor = "bg-brand-slate-900",
      textColor = "light",
      className,
      maxWidth = "lg",
      ...props
    },
    ref
  ) => {
    const renderButton = (button: CTAButton, isPrimary = true) => {
      const defaultVariant = isPrimary ? "default" : "outline";
      const buttonContent = (
        <Button
          variant={button.variant || defaultVariant}
          size={button.size || "lg"}
          onClick={button.onClick}
          className={cn(
            isPrimary &&
              !button.variant &&
              "bg-white text-brand-blue-600 hover:bg-brand-blue-50",
            !isPrimary &&
              !button.variant &&
              textColor === "light" &&
              "border-white text-white hover:bg-white/10"
          )}
        >
          {button.label}
        </Button>
      );

      if (button.href) {
        return (
          <a
            href={button.href}
            className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 rounded-md"
          >
            {buttonContent}
          </a>
        );
      }

      return buttonContent;
    };

    const textColorClass =
      textColor === "light" ? "text-white" : "text-brand-slate-900";
    const descriptionColorClass =
      textColor === "light" ? "text-white/90" : "text-brand-slate-600";

    return (
      <section
        ref={ref}
        className={cn("relative overflow-hidden py-16 md:py-24", className)}
        {...props}
      >
        {/* Background layer */}
        <div className="absolute inset-0 -z-10">
          {backgroundVariant === "gradient" && (
            <div
              className={cn(
                "h-full w-full bg-gradient-to-r",
                gradientFrom,
                gradientTo
              )}
              aria-hidden="true"
            />
          )}

          {backgroundVariant === "image" && backgroundImage && (
            <>
              <Image
                src={backgroundImage}
                alt=""
                fill
                className="object-cover"
                priority
              />
              {/* Overlay for text readability */}
              <div className="absolute inset-0 bg-brand-slate-900/70" />
            </>
          )}

          {backgroundVariant === "solid" && (
            <div className={cn("h-full w-full", backgroundColor)} />
          )}
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={cn("mx-auto text-center", maxWidthStyles[maxWidth])}
          >
            {/* Headline */}
            <h2
              className={cn(
                "mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl",
                textColorClass
              )}
            >
              {headline}
            </h2>

            {/* Description */}
            {description && (
              <p
                className={cn(
                  "mb-8 text-lg leading-relaxed sm:text-xl md:mb-10",
                  descriptionColorClass
                )}
              >
                {description}
              </p>
            )}

            {/* Buttons */}
            {(primaryButton || secondaryButton) && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
                className="flex flex-col items-center justify-center gap-4 sm:flex-row"
              >
                {primaryButton && renderButton(primaryButton, true)}
                {secondaryButton && renderButton(secondaryButton, false)}
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
      </section>
    );
  }
);

CTASection.displayName = "CTASection";

export { CTASection };
