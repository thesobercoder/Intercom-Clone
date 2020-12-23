export default function Bubble(props) {
  return (
    <div
      className={`font-semibold text-sm text-white rounded-full flex items-center justify-center h-8 w-8 
      ${props.bg ? props.bg : "bg-blue-400"}`}
    >
      {props.children}
    </div>
  );
}
