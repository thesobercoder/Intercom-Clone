import Link from "next/link";
import { useRouter } from "next/router";
import {
  Intercom,
  Mail,
  PaperAirplane,
  DocumentSearch,
  Chat,
  Bell,
  BookOpen,
} from "./svg";
import Image from "next/image";

const items = [
  {
    icon: Mail,
    name: "Inbox",
    route: "/something",
  },
  {
    icon: PaperAirplane,
    name: "Leads",
    route: "/leads",
  },
  {
    icon: DocumentSearch,
    name: "Search",
    route: "/search",
  },
  {
    icon: Chat,
    name: "Respond",
    route: "/",
  },
];

const TopMenu = () => {
  const router = useRouter();
  return (
    <div className={`flex flex-col items-center pt-4`}>
      <a href="/" className="pb-8" title="Intercom">
        <Intercom className="h-8 w-8 text-blue-500" />
      </a>
      {items.map((i) => {
        const Icon = i.icon;
        return (
          <Link key={i.name} href={i.route}>
            <a
              className={`focus:outline-none p-4 
            ${router.pathname === i.route ? "text-blue-500" : ""}`}
              title={i.name}
              aria-label={i.name}
            >
              <Icon className="h-8 w-8" />
            </a>
          </Link>
        );
      })}
    </div>
  );
};

const BottomMenu = () => {
  return (
    <div className="flex flex-col items-center">
      <Link href="#">
        <a
          className={`focus:outline-none p-4`}
          title="Notifications"
          aria-label="Notifications"
        >
          <Bell className="h-8 w-8" />
        </a>
      </Link>
      <Link href="#">
        <a
          className={`focus:outline-none p-4`}
          title="Notifications"
          aria-label="Notifications"
        >
          <BookOpen className="h-8 w-8" />
        </a>
      </Link>
      <Link href="#">
        <a
          className={`focus:outline-none p-4`}
          title="Notifications"
          aria-label="Notifications"
        >
          <div className="flex flex-wrap justify-center">
            <div className="w-8 h-8">
              <img
                src="https://demos.creative-tim.com/tailwindcss-starter-project/_next/static/images/team-4-470x470-4ef82ef45a9598d24c4c951ead4d626a.png"
                alt="user"
                className="shadow-lg rounded-full max-w-full h-auto align-middle border-none"
              />
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default function Sidebar() {
  return (
    <div className="w-16 flex-none flex flex-col bg-gray-100 justify-between border-r-2 border-gray-200 text-gray-500">
      <TopMenu />
      <BottomMenu />
    </div>
  );
}
