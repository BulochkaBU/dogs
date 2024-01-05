import { Link } from "react-router-dom";
import Button from "../components/shared/Button";

export default function Page404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-orange-600 text-center text-8xl">404</h2>
      <p className="text-orange-600 text-center text-7xl mb-7">Page not found</p>
      <Link to="/">
        <Button text="Go to home" />
      </Link>
    </div>
  );
}
