import { Link } from "react-router-dom";

interface CardProps {
  id: string;
  name: string;
  description: string;
}

export default function Card({ id, name, description }: CardProps) {
  return (
    <Link to={`/breeds/${id}`}>
      <div className="group flex flex-col items-center w-full h-56 md:w-80 border border-orange-500 rounded-xl shadow-md bg-orange-50 p-3 md:p-5 relative md:hover:scale-95 ">
        <h2 className="text-orange-600 text-center text-lg">{name}</h2>
        <p className="text-black text-md overflow-y-auto text-left mt-2">{description}</p>
      </div>
    </Link>
  );
}
