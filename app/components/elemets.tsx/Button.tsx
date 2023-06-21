interface ButtonProps {
  children: React.ReactNode;

  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`px-4 py-2 shadow-sm text-white bg-gray-900 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 ${className}`}
    >
      {children}
    </button>
  );
};
export default Button;
