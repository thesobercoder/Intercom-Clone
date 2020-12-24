import Viewport from "../components/viewport";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import faker from "faker";
import Bubble from "../components/bubble";
import {
  LocationMarker,
  OfficeBuilding,
  DotsVertical,
  ChevronRight,
  ChevronDown,
  DocumentText,
  Bookmark,
  EmojiHappy,
  Menu,
  User,
  AtSymbol,
  QuestionMarkCircle,
  Users,
  Inbox,
  Clock,
  Check,
  Photograph,
  PaperClip,
} from "../components/svg";

const Accordion = (props) => {
  return (
    <>
      <button
        onClick={(e) => props.eventHandler(props.eventKey)}
        className="flex flex-row items-center space-x-1 focus:outline-none"
      >
        <h2 className="font-bold">{props.name}</h2>
        {props.open ? (
          <ChevronRight className="w-4 h-4" />
        ) : (
          <ChevronDown className="w-4 h-4" />
        )}
      </button>
      {props.open && (
        <div className="flex flex-col space-y-4">
          {props.items &&
            props.items.map((i) => {
              const Icon = i.icon;
              return (
                <div
                  key={uuidv4()}
                  className="flex flex-row space-x-2 items-center"
                >
                  <Icon className="h-5 w-5" />
                  <div className="flex-auto">{i.text}</div>
                  <div className="flex-none">{i.count}</div>
                </div>
              );
            })}
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
          <Menu className="w-4 h-4 flex-none" />
        </button>
        <h1 className="text-2xl font-semibold">You</h1>
      </div>
      <div className="mt-4 flex justify-between border-t border-b text-gray-500 border-gray-300 p-4 shadow-md flex-none">
        <button className="flex flex-row items-center space-x-2 font-semibold">
          <Inbox className="h-4 w-4" />
          <h3>Open</h3>
          <ChevronDown className="h-4 w-4" />
        </button>
        <button className="flex flex-row items-center space-x-2 font-semibold">
          <h3>Newest</h3>
          <ChevronDown className="h-4 w-4" />
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
          <button className="focus:outline-none flex-none">
            <Clock className="w-4 h-4" />
          </button>
          <button className="focus:outline-none flex-none">
            <Check className="w-4 h-4" />
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
            <DocumentText className="h-4 w-4" />
          </button>
          <button className="focus:outline-none">
            <Bookmark className="h-4 w-4" />
          </button>
          <button className="focus:outline-none">
            <EmojiHappy className="h-4 w-4" />
          </button>
          <button className="focus:outline-none">
            <Photograph className="h-4 w-4" />
          </button>
          <button className="focus:outline-none">
            <PaperClip className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

const InfoPane = (props) => {
  return (
    <>
      <div className="w-1/5 flex flex-col flex-none">
        <div className="p-4 flex flex-col flex-none border-b border-gray-300">
          <div className="flex items-start">
            <div className="mx-auto">
              <Bubble size="h-16 w-16" text="text-2xl">
                SB
              </Bubble>
            </div>
            <button className="absolute right-0 focus:outline-none">
              <DotsVertical className="h-6 w-6" />
            </button>
          </div>
          <h1 className="text-lg font-extrabold text-gray-500 mx-auto my-2">
            Elizabeth McGuane
          </h1>
          <div className="text-gray-400 border-blueGray-400 mx-auto text-xs border rounded-2xl px-3 py-1 mb-2 uppercase">
            User
          </div>
          <span className="mt-6 text-sm text-gray-500 flex items-center space-x-2">
            <LocationMarker className="h-4 w-4" />
            <span>3:42 PM in Dublin, Ireland</span>
          </span>
          <span className="mt-1 text-sm text-gray-500 flex items-center space-x-2">
            <OfficeBuilding className="h-4 w-4" />
            <span>Writer's Central</span>
          </span>
        </div>
        <div className="flex flex-row justify-between items-center p-4 border-b border-gray-300">
          <span className="font-bold text-sm">Qualification</span>
          <span className="text-gray-300 text-sm">11/12 Complete</span>
          <ChevronRight className="h-4 w-4" />
        </div>
        <div className="flex flex-row justify-between items-center p-4 border-b border-gray-300">
          <span className="font-bold text-sm">Last Viewed</span>
          <span className="text-gray-300 text-sm">../components/card</span>
          <ChevronRight className="h-4 w-4" />
        </div>
        <div className="flex flex-col p-4 border-b space-y-4 border-gray-300">
          <div className="flex flex-row justify-between items-center">
            <span className="font-bold text-sm">Details</span>
            <ChevronDown className="h-4 w-4" />
          </div>
          <p className="flex space-x-4 text-sm">
            <span className="text-gray-400">Email:</span>
            <span>jeff@aptech.com</span>
          </p>
          <p className="flex space-x-4 text-sm">
            <span className="text-gray-400">Swap ID:</span>
            <span>102401</span>
          </p>
          <p className="flex space-x-4 text-sm">
            <span className="text-gray-400">Product:</span>
            <span>All</span>
          </p>
          <p className="flex space-x-4 text-sm">
            <span className="text-gray-400">Lead Score:</span>
            <span>30</span>
          </p>
          <p className="flex space-x-4 text-sm">
            <span className="text-gray-400">Last Contacted:</span>
            <span>7d ago</span>
          </p>
        </div>
        <div className="flex flex-col p-4 border-b space-y-4 border-gray-300 overflow-y-auto">
          <div className="flex flex-row justify-between items-center">
            <span className="font-bold text-sm">Latest Conversations</span>
            <ChevronDown className="h-4 w-4" />
          </div>
          {[...Array(10)].map(() => {
            return (
              <div className="flex flex-col pb-4 text-sm">
                <p className="flex flex-row space-x-2">
                  <Bubble text="text-xs" size="h-6 w-6 flex-none">
                    MS
                  </Bubble>
                  <span className="flex-grow">Open with Micheal</span>
                  <span className="flex-none">10m ago</span>
                </p>
                <div className="mt-2 py-1 ml-2 pl-2 truncate border-l-4 border-blue-500 text-gray-400">
                  Hey Elizabeth it was nice seeing you the other day.
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default function Home() {
  const items = [
    {
      text: "You",
      count: 5,
      icon: User,
    },
    {
      text: "Mentions",
      count: 0,
      icon: AtSymbol,
    },
    {
      text: "Unassigned",
      count: 2497,
      icon: QuestionMarkCircle,
    },
    {
      text: "All",
      count: 5171,
      icon: Users,
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
    <Viewport name="Inbox" className="flex flex-row" submenu={submenu}>
      <MessagePane chats={chats} />
      <ChatPane chats={chats} />
      <InfoPane />
    </Viewport>
  );
}
