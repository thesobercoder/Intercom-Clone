import Viewport from "../components/viewport";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import faker from "faker";
import Bubble from "../components/bubble";

const Accordion = (props) => {
  return (
    <>
      <button
        onClick={(e) => props.eventHandler(props.eventKey)}
        className="flex flex-row items-center space-x-1 focus:outline-none"
      >
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
              <div
                key={uuidv4()}
                className="flex flex-row space-x-2 items-center"
              >
                {i.icon}
                <div className="flex-auto">{i.text}</div>
                <div className="flex-none">{i.count}</div>
              </div>
            ))}
        </div>
      )}
    </>
  );
};

const MessagePane = (props) => {
  return (
    <div className="w-1/4 flex-none flex flex-col">
      <div className="flex flex-row space-x-4 items-center p-4 flex-none">
        <button className="focus:outline-none">
          <svg
            className="w-4 h-4 flex-none"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <h1 className="text-2xl font-semibold">You</h1>
      </div>
      <div className="mt-4 flex justify-between border-t border-b text-gray-500 border-gray-300 p-4 shadow-md flex-none">
        <button className="flex flex-row items-center space-x-2 font-semibold">
          <svg
            className="h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
            />
          </svg>
          <h3>Open</h3>
          <svg
            className="h-4 w-4"
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
        </button>
        <button className="flex flex-row items-center space-x-2 font-semibold">
          <h3>Newest</h3>
          <svg
            className="h-4 w-4"
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
        </button>
      </div>
      <div className="flex-auto overflow-y-auto">
        {props.chats.map((x, i) => (
          <a
            key={i}
            className="flex flex-col cursor-pointer border-b border-gray-300 hover:bg-blue-200"
          >
            <div
              className={`flex flex-col space-y-4 p-4 border-l-4
                 ${i === 0 ? " border-blue-500" : "border-transparent"}`}
            >
              <div className="flex-none flex flex-row space-x-2 items-center">
                <Bubble>{x.initials}</Bubble>
                <strong className="flex-grow text-sm">{x.name}</strong>
                <div className="flex-none">{x.lastSentTime}</div>
              </div>
              <div className="flex-grow flex flex-row items-center space-x-2">
                <p className="truncate-2-lines">{x.lastSent}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

const ChatPane = (props) => {
  return (
    <div className="w-3/5 border-l border-r border-gray-300 flex flex-col">
      <div className="flex flex-row space-x-4 justify-between items-center pl-4 pr-4 pt-4 pb-8 flex-none border-b border-gray-300">
        <h1 className="text-2xl font-semibold">{props.chats[0].name}</h1>
        <div className="flex-none flex flex-row space-x-2 items-center">
          <button className="focus:outline-none">
            <svg
              className="w-4 h-4 flex-none"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
          <button className="focus:outline-none">
            <svg
              className="w-4 h-4 flex-none"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex-grow flex flex-col items-start overflow-y-auto">
        {props.chats[0].messages.map((c, i) => {
          if (i % 2 === 0) {
            return (
              <div
                key={i}
                className="flex flex-row space-x-2 p-2 self-start flex-none"
              >
                <Bubble>{c.one.initials}</Bubble>
                <p className="bg-blue-100 w-80 break-words p-4 rounded-md">
                  {c.one.message}
                </p>
              </div>
            );
          }
          {
            return (
              <div
                key={i}
                className="flex flex-row space-x-2 p-2 self-end flex-none"
              >
                <p className="bg-green-100 w-80 break-words p-4 rounded-md">
                  {c.two.message}
                </p>
                <Bubble bg="bg-green-400">{c.two.initials}</Bubble>
              </div>
            );
          }
        })}
      </div>
      <div className="flex-none h-1/5 border-t text-gray-400 border-gray-300 p-4 flex flex-col">
        <div className="flex flex-row space-x-8  pb-2 flex-none items-center">
          <button className="border-b-2 border-gray-400 pb-2">Reply</button>
          <button className="pb-2 border-b-2 border-transparent">Note</button>
        </div>
        <textarea
          className="flex-grow focus:outline-none"
          placeholder="Type # to add a saved reply or try sending an article"
        ></textarea>
        <div className="h-1/5 flex-none flex flex-row space-x-4 items-center">
          <button className="focus:outline-none">
            <svg
              className="h-4 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </button>
          <button className="focus:outline-none">
            <svg
              className="h-4 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
              />
            </svg>
          </button>
          <button className="focus:outline-none">
            <svg
              className="h-4 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
          <button className="focus:outline-none">
            <svg
              className="h-4 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </button>
          <button className="focus:outline-none">
            <svg
              className="h-4 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

const InfoPane = (props) => {
  return <div className="w-1/5 bg-gray-200">Right</div>;
};

export default function Home() {
  const items = [
    {
      text: "You",
      count: 5,
      icon: (
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
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
    },
    {
      text: "Mentions",
      count: 0,
      icon: (
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
            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
          />
        </svg>
      ),
    },
    {
      text: "Unassigned",
      count: 2497,
      icon: (
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
            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      text: "All",
      count: 5171,
      icon: (
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
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
    },
  ];

  const chats = [...Array(50)].map(() => {
    const fname = faker.name.firstName();
    const lname = faker.name.lastName();
    const name = `${fname} ${lname}`;
    return {
      initials: `${fname[0]}${lname[0]}`,
      name: name,
      lastSentTime: "5m",
      lastSent: faker.lorem.lines(10),
      messages: [...Array(50)].map(() => {
        const fname1 = faker.name.firstName();
        const lname1 = faker.name.lastName();
        return {
          one: {
            initials: `${fname[0]}${lname[0]}`,
            message: faker.lorem.sentence(10),
            sent: faker.time.recent("abbr"),
          },
          two: {
            initials: `${fname1[0]}${lname1[0]}`,
            message: faker.lorem.sentence(10),
            sent: faker.time.recent("abbr"),
          },
        };
      }),
    };
  });

  const [current, setCurrent] = useState(1);

  const submenu = (
    <div className="flex mt-12 flex-col space-y-4">
      <Accordion
        open={current === 1}
        name="Conversations"
        items={items}
        eventKey={1}
        eventHandler={setCurrent}
      />
      <Accordion
        open={current === 2}
        name="Automation"
        items={items}
        eventKey={2}
        eventHandler={setCurrent}
      />
      <Accordion
        open={current === 3}
        name="Your Preference"
        items={items}
        eventKey={3}
        eventHandler={setCurrent}
      />
    </div>
  );

  return (
    <Viewport
      name="Inbox"
      className="flex flex-row text-gray-600"
      submenu={submenu}
    >
      <MessagePane chats={chats} />
      <ChatPane chats={chats} />
      <InfoPane />
    </Viewport>
  );
}
