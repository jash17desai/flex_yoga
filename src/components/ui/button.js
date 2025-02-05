export function Button({ children, onClick }) {
    return (
      <button
        className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800 transition-all"
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
  