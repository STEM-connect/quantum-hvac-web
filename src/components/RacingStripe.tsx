"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface RacingStripeProps {
  /** Height of the stripe (default: 4px) */
  height?: string;
  /** Variant: horizontal (default) or vertical */
  variant?: "horizontal" | "vertical";
  /** Custom className for additional styling */
  className?: string;
}

/**
 * RacingStripe Component
 *
 * A decorative stripe component with three quantum-themed colors.
 * Used as section dividers throughout the site.
 *
 * Features:
 * - 3-section design: Quantum Blue, Quantum Red, Quantum Cyan
 * - Supports both horizontal and vertical orientations
 * - Customizable height/width via props
 * - Smooth animations on hover
 *
 * @example
 * // Horizontal stripe (default)
 * <RacingStripe />
 *
 * @example
 * // Custom height
 * <RacingStripe height="8px" />
 *
 * @example
 * // Vertical variant
 * <RacingStripe variant="vertical" height="300px" />
 */
const RacingStripe = React.forwardRef<HTMLDivElement, RacingStripeProps>(
  ({ height = "4px", variant = "horizontal", className }, ref) => {
    const isHorizontal = variant === "horizontal";

    return (
      <div
        ref={ref}
        className={cn(
          "racing-stripe group transition-transform duration-300 ease-out",
          isHorizontal
            ? "flex h-auto w-full flex-row"
            : "flex h-full w-auto flex-col",
          className
        )}
        style={
          isHorizontal
            ? { height }
            : { width: height, minHeight: "100%" }
        }
        role="presentation"
        aria-hidden="true"
      >
        {/* Quantum Blue Section - #0066CC */}
        <div
          className={cn(
            "group-hover:shadow-lg transition-all duration-300",
            isHorizontal
              ? "flex-1 bg-gradient-to-r from-[#0066CC] to-[#0052A3]"
              : "flex-1 bg-gradient-to-b from-[#0066CC] to-[#0052A3]"
          )}
          style={{
            boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        />

        {/* Quantum Red Section - #E63946 */}
        <div
          className={cn(
            "group-hover:shadow-lg transition-all duration-300",
            isHorizontal
              ? "flex-1 bg-gradient-to-r from-[#E63946] to-[#C92A36]"
              : "flex-1 bg-gradient-to-b from-[#E63946] to-[#C92A36]"
          )}
          style={{
            boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        />

        {/* Quantum Cyan Section - #00BCD4 */}
        <div
          className={cn(
            "group-hover:shadow-lg transition-all duration-300",
            isHorizontal
              ? "flex-1 bg-gradient-to-r from-[#00BCD4] to-[#0099B3]"
              : "flex-1 bg-gradient-to-b from-[#00BCD4] to-[#0099B3]"
          )}
          style={{
            boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        />
      </div>
    );
  }
);

RacingStripe.displayName = "RacingStripe";

export { RacingStripe };
