import Viewport from "../components/viewport";

const Accordian = (props) => {
  return (
    <>
      <button className="flex flex-row items-center space-x-1 focus:outline-none">
        <h2 className="font-bold">{props.name}</h2>
        {props.open ? (
          <svg
            className="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        ) : (
          <svg
            className="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        )}
      </button>
      {props.open && (
        <div className="flex flex-col space-y-4">
          {props.items &&
            props.items.map((i) => (
              <div className="flex flex-row space-x-2 items-center">
                <svg
                  className="h-5 w-5 flex-none"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div className="flex-auto">{i.text}</div>
                <div className="flex-none">{i.count}</div>
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default function Home() {
  const items = [
    { text: "You", count: 5 },
    { text: "Mentions", count: 0 },
    { text: "Unassigned", count: 2497 },
    { text: "All", count: 5171 },
    { text: "Team A", count: 12 },
    { text: "Team B", count: 1 },
  ];

  const submenu = (
    <div className="flex mt-12 flex-col space-y-4">
      <Accordian open={true} name="Conversations" items={items} />
      <Accordian open={false} name="Automation" items={items} />
      <Accordian open={false} name="Your Preference" items={items} />
    </div>
  );

  return (
    <Viewport name="Inbox" className="flex flex-row" submenu={submenu}>
      <div className="w-1/5 bg-red-100">left</div>
      <div className="w-3/5 bg-green-100">Center</div>
      <div className="w-1/5 bg-blue-100">Right</div>
    </Viewport>
  );
}
