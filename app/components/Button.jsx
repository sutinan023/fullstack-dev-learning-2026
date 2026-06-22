export default function Button({ title }) {
  const className = {
    button:
      "inline-flex items-center justify-center px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium shadow-sm hover:shadow-md transition-all duration-200",
  };

  return (
    <button className={className.button}>
      {title}
    </button>
  );
}