export const EntityInput = ({ label, value, onChange, type = "text" }) => (
  <div className="mb-4">
    <label htmlFor={label} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <input
      type={type}
      id={label}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
    />
  </div>
);
