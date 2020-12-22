import menu from "../data/menu";

const VerticalTopMenu = (props) => {
  return (
    <div className={`flex flex-col space-y-8 items-center p-4`}>
      <a href="/" title="Intercom">
        <svg
          className="h-8 w-8"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
        </svg>
      </a>
      {props.items.map((i) => (
        <button
          className="focus:outline-none"
          title={i.name}
          key={i.name}
          aria-label={i.name}
        >
          {i.icon}
        </button>
      ))}
    </div>
  );
};

export default function Home() {
  return (
    <div className="flex flex-row h-screen w-full">
      <div className="w-16 flex flex-col bg-gray-200 justify-between border border-r-2 border-gray-300">
        <VerticalTopMenu margin="mt-4" items={menu.TopMenuItems} />
        {/* <VerticalMenuList margin="mb-4" items={topMenuItems} /> */}
      </div>
      <div className="w-64 bg-gray-100">
        <div className="flex flex-row w-full justify-between p-4 items-center">
          <span className="text-2xl font-black">Inbox</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
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
      </div>
      <div className="flex-auto bg-white border border-l-2 border-gray-300 shadow-lg">
        "colder"
      </div>
    </div>
  );
}
