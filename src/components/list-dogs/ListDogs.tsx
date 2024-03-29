import { useMemo, useState } from "react";
import { useGetAllDogsQuery } from "../../store/dogsApi";
import Card from "../card/Card";
import Button from "../shared/Button";
import Loading from "../shared/Loading";
import Error from "../shared/Error";
import { useAppSelector } from "../../store/hooks";

export default function ListDogs() {
  const searchedBreedDog = useAppSelector((state) => state.dogSlice.searchedBreedDog);
  const { data: dogs, isLoading, isError } = useGetAllDogsQuery();
  const [visibleCount, setVisibleCount] = useState(4);

  const handleLoadMore = () => {
    setVisibleCount(visibleCount + 4);
  };

  const visibleBreeds = useMemo(() => {
    if (!searchedBreedDog) {
      return dogs?.data;
    }

    const filteredBreeds = dogs?.data.filter((dog) =>
      dog.attributes.name.toLowerCase().startsWith(searchedBreedDog.toLowerCase())
    );
    return filteredBreeds;
  }, [dogs?.data, searchedBreedDog]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <div className="flex items-center flex-col mt-3">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {visibleBreeds?.slice(0, visibleCount).map((dog) => (
          <div key={dog.id}>
            <Card name={dog.attributes.name} description={dog.attributes.description} id={dog.id} />
          </div>
        ))}
      </div>
      {visibleCount < (dogs?.data.length ?? 0) && (
        <Button text="Load more" onClick={handleLoadMore} />
      )}
    </div>
  );
}
