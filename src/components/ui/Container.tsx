// import type { ReactNode } from "react";

// interface ContainerProps {
//   children: ReactNode;
//   className?: string;
//   size?: "sm" | "md" | "lg" | "xl" | "full";
// }

// export const Container = ({
//   children,
//   className = "",
//   size = "xl",
// }: ContainerProps) => {
//   const sizeClasses = {
//     sm: "max-w-4xl",
//     md: "max-w-5xl",
//     lg: "max-w-6xl",
//     xl: "max-w-7xl",
//     full: "max-w-full",
//   };

//   return (
//     <div
//       className={`w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 ${sizeClasses[size]} ${className}`}
//     >
//       {children}
//     </div>
//   );
// };

// import type { ReactNode } from "react";
// interface ContainerProps {
//   children: ReactNode;
//   className?: string;
//   size?: "sm" | "md" | "lg" | "xl" | "full";
// }
// export const Container = ({
//   children,
//   className = "",
//   size = "xl",
// }: ContainerProps) => {
//   const sizeClasses = {
//     sm: "max-w-4xl",
//     md: "max-w-5xl",
//     lg: "max-w-6xl",
//     xl: "max-w-7xl",
//     full: "max-w-full",
//   };
//   return (
//     <div
//       className={`w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 ${sizeClasses[size]} ${className}`}
//     >
//       {children}
//     </div>
//   );
// };
import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export const Container = ({ children, className = "" }: ContainerProps) => {
  return <div className={`container ${className}`}>{children}</div>;
};
