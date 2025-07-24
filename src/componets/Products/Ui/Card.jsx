

export function Card({ children, className = "" }) {
  return (
    <div className={`bg-white shadow-md rounded-2xl p-5 ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = "" }) {
  return <div className={`flex flex-col ${className}`}>{children}</div>;
}
