import Sidebar from "./sidebar";
import Submenu from "./submenu";

export default function Viewport(props) {
  return (
    <div className={`flex flex-row h-screen w-full`}>
      <Sidebar />
      <Submenu name={props.name} children={props.submenu} />
      <div
        className={`flex-auto bg-white border-l border-gray-300 text-gray-500 shadow-2xl ${props.className}`}
      >
        {props.children}
      </div>
    </div>
  );
}
