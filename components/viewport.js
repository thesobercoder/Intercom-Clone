import Sidebar from "./sidebar";
import Submenu from "./submenu";

export default function Viewport(props) {
  return (
    <div className="flex flex-row h-screen w-full">
      <Sidebar />
      <Submenu />
      <div className="flex-auto bg-white border border-l-2 border-gray-300 shadow-lg">
        {props.children}
      </div>
    </div>
  );
}
