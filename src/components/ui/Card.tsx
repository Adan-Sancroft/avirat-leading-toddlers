// import React from "react";

// interface CardProps {
//   children: React.ReactNode;
//   className?: string;
//   hover?: boolean;
//   padding?: "sm" | "md" | "lg";
//   shadow?: "sm" | "md" | "lg" | "xl";
// }

// export const Card: React.FC<CardProps> = ({
//   children,
//   className = "",
//   hover = true,
//   padding = "md",
//   shadow = "lg",
// }) => {
//   const paddingClasses = {
//     sm: "p-4",
//     md: "p-6",
//     lg: "p-8",
//   };

//   const shadowClasses = {
//     sm: "shadow-sm",
//     md: "shadow-md",
//     lg: "shadow-lg",
//     xl: "shadow-xl",
//   };

//   const hoverClasses = hover
//     ? "hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300"
//     : "";

//   return (
//     <div
//       className={`
//         bg-white rounded-xl border border-stone-100
//         ${paddingClasses[padding]}
//         ${shadowClasses[shadow]}
//         ${hoverClasses}
//         ${className}
//       `}
//     >
//       {children}
//     </div>
//   );
// };

import type { ReactNode, CSSProperties } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export const Card = ({ children, className = "", style }: CardProps) => {
  return (
    <div className={`card ${className}`} style={style}>
      {children}
    </div>
  );
};
