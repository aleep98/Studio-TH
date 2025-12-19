
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'medium' | 'large';
  onClick?: () => void;
}

export function Button({ children, variant = 'primary', size = 'medium', onClick }: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center rounded-full transition-all duration-300 shadow-lg hover:shadow-xl";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700",
    secondary: "bg-white text-gray-800 border-2 border-gray-200 hover:border-pink-300 hover:text-pink-600"
  };
  
  const sizeClasses = {
    medium: "px-6 py-3",
    large: "px-8 py-4"
  };
  
  return (
    <button 
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`}
    >
      {children}
    </button>
  );
}
