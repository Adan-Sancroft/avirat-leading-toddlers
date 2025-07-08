// import React from "react";
// import type { LucideIcon } from "lucide-react";

// interface ButtonProps {
//   children: React.ReactNode;
//   variant?: "primary" | "secondary" | "outline" | "ghost";
//   size?: "sm" | "md" | "lg";
//   icon?: LucideIcon;
//   iconPosition?: "left" | "right";
//   className?: string;
//   onClick?: () => void;
//   href?: string;
//   disabled?: boolean;
// }

// export const Button: React.FC<ButtonProps> = ({
//   children,
//   variant = "primary",
//   size = "md",
//   icon: Icon,
//   iconPosition = "left",
//   className = "",
//   onClick,
//   href,
//   disabled = false,
// }) => {
//   const baseClasses =
//     "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

//   const variantClasses = {
//     primary:
//       "bg-red-400 hover:bg-red-500 text-white focus:ring-red-500 shadow-lg hover:shadow-xl",
//     secondary:
//       "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500 shadow-lg hover:shadow-xl",
//     outline:
//       "border-2 border-red-400 text-red-500 hover:bg-red-50 focus:ring-red-500",
//     ghost: "text-stone-600 hover:text-stone-800 hover:bg-stone-100",
//   };

//   const sizeClasses = {
//     sm: "px-3 py-2 text-sm",
//     md: "px-6 py-3 text-base",
//     lg: "px-8 py-4 text-lg",
//   };

//   const Component = href ? "a" : "button";
//   const props = href ? { href } : { onClick, disabled };

//   return (
//     <Component
//       className={`${baseClasses} ${variantClasses[variant]} ${
//         sizeClasses[size]
//       } ${className} ${
//         disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
//       }`}
//       {...props}
//     >
//       {Icon && iconPosition === "left" && <Icon className="w-5 h-5 mr-2" />}
//       {children}
//       {Icon && iconPosition === "right" && <Icon className="w-5 h-5 ml-2" />}
//     </Component>
//   );
// };

// import React from "react";
// import type { LucideIcon } from "lucide-react";
// interface ButtonProps {
//   children: React.ReactNode;
//   variant?: "primary" | "secondary" | "outline" | "ghost";
//   size?: "sm" | "md" | "lg";
//   icon?: LucideIcon;
//   iconPosition?: "left" | "right";
//   className?: string;
//   onClick?: () => void;
//   href?: string;
//   disabled?: boolean;
// }
// export const Button: React.FC<ButtonProps> = ({
//   children,
//   variant = "primary",
//   size = "md",
//   icon: Icon,
//   iconPosition = "left",
//   className = "",
//   onClick,
//   href,
//   disabled = false,
// }) => {
//   const baseClasses =
//     "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
//   const variantClasses = {
//     primary:
//       "bg-red-400 hover:bg-red-500 text-white focus:ring-red-500 shadow-lg hover:shadow-xl",
//     secondary:
//       "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500 shadow-lg hover:shadow-xl",
//     outline:
//       "border-2 border-red-400 text-red-500 hover:bg-red-50 focus:ring-red-500",
//     ghost: "text-stone-600 hover:text-stone-800 hover:bg-stone-100",
//   };
//   const sizeClasses = {
//     sm: "px-3 py-2 text-sm",
//     md: "px-6 py-3 text-base",
//     lg: "px-8 py-4 text-lg",
//   };
//   const Component = href ? "a" : "button";
//   const props = href ? { href } : { onClick, disabled };
//   return (
//     <Component
//       className={`${baseClasses} ${variantClasses[variant]} ${
//         sizeClasses[size]
//       } ${className} ${
//         disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
//       }`}
//       {...props}
//     >
//       {Icon && iconPosition === "left" && <Icon className="w-5 h-5 mr-2" />}
//       {children}
//       {Icon && iconPosition === "right" && <Icon className="w-5 h-5 ml-2" />}
//     </Component>
//   );
// };
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
  href?: string;
}

export const Button = ({
  children,
  variant = "primary",
  className = "",
  onClick,
  href,
}: ButtonProps) => {
  const classes = `btn btn-${variant} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};
