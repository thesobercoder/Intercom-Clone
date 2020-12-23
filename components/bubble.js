export default function Bubble(props) {
  return (
    <div
      className={`font-semibold text-white rounded-full flex items-center justify-center
      ${props.bg ? props.bg : "bg-blue-400"} 
      ${props.size ? props.size : "h-8 w-8"}
      ${props.text ? props.text : "text-sm"}`}
    >
      {props.children}
    </div>
  );
}
