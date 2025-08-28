import type { ReactNode } from "react";

interface ButtonProps {
  text: string;
  icon?: ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  disabled?: boolean;
  className?: string; 
}

const Button: React.FC<ButtonProps> = ({
  text,
  icon,
  variant = "primary",
  onClick,
  disabled = false,
  className = "",
}) => {
  const variantClasses: Record<string, string> = {
    primary: "bg-[var(--primary)] text-white hover:bg-blue-600",
    secondary: "bg-white hover:bg-gray-100 text-black",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center justify-center gap-2 px-4 py-2 rounded-xl transition ${variantClasses[variant]} disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {icon && <span className="flex items-center">{icon}</span>}
      <span>{text}</span>
    </button>
  );
};

export default Button;
