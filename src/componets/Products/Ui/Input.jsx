
export function Input({ value, onChange, placeholder, className = "" }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`px-3 py-2 border border-gray-300 rounded-xl text-sm ${className}`}
    />
  );
}
