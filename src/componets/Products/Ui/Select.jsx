

export function Select({ children, defaultValue, onValueChange }) {
  return (
    <select
      defaultValue={defaultValue}
      onChange={(e) => onValueChange?.(e.target.value)}
      className="px-3 py-2 rounded-xl border border-gray-300 text-sm text-gray-700 text-start outline-none"
    >
      {children}
    </select>
  );
}

export function SelectItem({ value, children }) {
  return <option value={value}>{children}</option>;
}
