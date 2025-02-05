export function Input({ type, name, value, onChange }) {
    return <input type={type} name={name} value={value} onChange={onChange} className="border p-2 rounded-md w-full" />;
  }
  