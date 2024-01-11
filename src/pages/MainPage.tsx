import Header from "../components/header/Header";
import ListDogs from "../components/list-dogs/ListDogs";
import SearchPanel from "../components/search-panel/SearchPanel";

export default function MainPage() {
  return (
    <div className="p-3 md:p-5">
      <Header />
      <SearchPanel />
      <ListDogs />
    </div>
  );
}
