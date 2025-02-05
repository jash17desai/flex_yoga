export function Select({ options, onChange }) {
    return (
      <select onChange={onChange} className="border p-2 rounded-md w-full">
        <option value="">Select a batch</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  }
  