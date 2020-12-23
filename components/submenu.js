export default function Submenu(props) {
  return (
    <div className="w-64 bg-gray-100 p-4">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-2xl font-semibold">{props.name}</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 flex-none"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={4}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      {props.children}
    </div>
  );
}
