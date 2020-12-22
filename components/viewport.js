import Sidebar from "./sidebar";
import Submenu from "./submenu";

export default function Viewport(props) {
  return (
    <div className={`flex flex-row h-screen w-full`}>
      <Sidebar />
      <Submenu name={props.name} children={props.submenu} />
      <div
        className={`flex-auto bg-white border border-l border-gray-200 shadow-xl ${props.className}`}
      >
        {props.children}
      </div>
    </div>
  );
}
