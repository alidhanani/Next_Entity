interface EntityInputProps {
  label: string;
  value: string;
  onChange: any;
  type: string;
}

export const EntityInput = (valueProps: EntityInputProps) => (
  <div className="mb-4">
    <label
      htmlFor={valueProps.label}
      className="block text-sm font-medium text-gray-700"
    >
      {valueProps.label}
    </label>
    <input
      type={valueProps.type}
      id={valueProps.label}
      value={valueProps.value}
      onChange={(e) => valueProps.onChange(e.target.value)}
      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
    />
  </div>
);
