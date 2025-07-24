

export function Button({ children, onClick, variant = "default", disabled = false, className = "" }) {
  const base = "px-4 py-2 rounded-xl text-sm font-medium transition";
  const styles = {
    default: "bg-black text-white hover:bg-gray-800",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
  };

  return (
    <button
      onClick={onClick}
      className={`${base} ${styles[variant]} ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
