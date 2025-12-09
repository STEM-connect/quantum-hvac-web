import React from "react";

interface QuantumLogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export default function QuantumLogo({
  className = "",
  size = 48,
  showText = false
}: QuantumLogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Hexagonal Atomic Logo */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Outer Hexagon - Quantum Blue */}
        <path
          d="M50 5 L85.3 27.5 L85.3 72.5 L50 95 L14.7 72.5 L14.7 27.5 Z"
          stroke="#0066CC"
          strokeWidth="3"
          fill="none"
        />

        {/* Inner Hexagon - Quantum Cyan */}
        <path
          d="M50 20 L73 32.5 L73 67.5 L50 80 L27 67.5 L27 32.5 Z"
          stroke="#00BCD4"
          strokeWidth="2"
          fill="none"
          opacity="0.8"
        />

        {/* Center Atom - Quantum Red */}
        <circle cx="50" cy="50" r="8" fill="#E63946" />

        {/* Electron Orbits - Blue */}
        <ellipse
          cx="50"
          cy="50"
          rx="35"
          ry="15"
          stroke="#0066CC"
          strokeWidth="1.5"
          fill="none"
          opacity="0.6"
        />
        <ellipse
          cx="50"
          cy="50"
          rx="35"
          ry="15"
          stroke="#0066CC"
          strokeWidth="1.5"
          fill="none"
          opacity="0.6"
          transform="rotate(60 50 50)"
        />
        <ellipse
          cx="50"
          cy="50"
          rx="35"
          ry="15"
          stroke="#0066CC"
          strokeWidth="1.5"
          fill="none"
          opacity="0.6"
          transform="rotate(120 50 50)"
        />

        {/* Electrons - Cyan dots */}
        <circle cx="85" cy="50" r="3" fill="#00BCD4" />
        <circle cx="15" cy="50" r="3" fill="#00BCD4" />
        <circle cx="67.5" cy="75" r="3" fill="#00BCD4" />
        <circle cx="32.5" cy="25" r="3" fill="#00BCD4" />
        <circle cx="67.5" cy="25" r="3" fill="#00BCD4" />
        <circle cx="32.5" cy="75" r="3" fill="#00BCD4" />
      </svg>

      {/* Company Text (optional) */}
      {showText && (
        <div className="flex flex-col">
          <span className="text-xl font-bold text-quantum-blue leading-tight">
            QUANTUM HVAC
          </span>
          <span className="text-xs text-quantum-cyan italic">
            Where Passion Meets Dedication
          </span>
        </div>
      )}
    </div>
  );
}
