"use client";

import * as React from "react";

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Nexora Digital Logo"
    >
      {/* Icon: Abstract "N" shape with modern geometric design */}
      <rect x="0" y="4" width="8" height="32" rx="2" fill="currentColor" opacity="0.9" />
      <rect x="24" y="4" width="8" height="32" rx="2" fill="currentColor" opacity="0.9" />
      <path
        d="M8 36 L8 12 L24 36 L24 4"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.6"
      />
      {/* Accent dot */}
      <circle cx="16" cy="4" r="3" fill="currentColor" opacity="0.5" />

      {/* Text: Nexora */}
      <text
        x="40"
        y="28"
        fontFamily="var(--font-geist-sans), system-ui, sans-serif"
        fontSize="22"
        fontWeight="700"
        letterSpacing="-0.5"
        fill="currentColor"
      >
        Nexora
      </text>
      {/* Text: Digital */}
      <text
        x="131"
        y="28"
        fontFamily="var(--font-geist-sans), system-ui, sans-serif"
        fontSize="22"
        fontWeight="400"
        letterSpacing="-0.5"
        fill="currentColor"
        opacity="0.6"
      >
        Digital
      </text>
    </svg>
  );
}

export function LogoIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Nexora Digital"
    >
      <rect x="0" y="4" width="8" height="32" rx="2" fill="currentColor" opacity="0.9" />
      <rect x="24" y="4" width="8" height="32" rx="2" fill="currentColor" opacity="0.9" />
      <path
        d="M8 36 L8 12 L24 36 L24 4"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.6"
      />
      <circle cx="16" cy="4" r="3" fill="currentColor" opacity="0.5" />
    </svg>
  );
}
