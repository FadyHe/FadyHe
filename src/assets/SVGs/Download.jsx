import React from 'react'

export function Download({ className = "h-8 w-8", ...props }) {
  return (
    <svg
      className={className}
      fill="none"
      height="32"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="m8 11 4 4 4-4"></path>
      <path d="M12 15V3"></path>
      <path d="M21 15v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-3"></path>
    </svg>
  )
}
