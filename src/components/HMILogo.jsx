import React from 'react';

export default function HMILogo({ className = 'w-10 h-10', ...props }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Red Left Band */}
      <polygon
        points="10,90 60,90 76.5,27.5 72,10"
        fill="#E31E24"
      />
      
      {/* Green Middle Band */}
      <polygon
        points="60,90 77,90 83.5,58.5 76.5,27.5"
        fill="#0A9646"
      />
      
      {/* Yellow Right Corner */}
      <polygon
        points="77,90 90,90 83.5,58.5"
        fill="#FDB813"
      />
    </svg>
  );
}
