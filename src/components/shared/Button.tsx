interface buttonProps {
  text: string;
  onClick?: () => void;
}
export default function Button({ text, onClick }: buttonProps) {
  return (
    <button
      className="bg-amber-500 rounded-xl w-full md:w-80 mt-3 p-3 text-md font-bold md:hover:scale-90"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
