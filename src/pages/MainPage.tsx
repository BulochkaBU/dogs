import Header from "../components/header/Header";
import ListDogs from "../components/list-dogs/ListDogs";

export default function MainPage() {
  return (
    <div className="p-3 md:p-5">
      <Header />
      <ListDogs />
    </div>
  );
}
