import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setSearchBreedDog } from "../../store/dogSlice";

export default function SearchPanel() {
  const dispatch = useAppDispatch();
  const searchedBreedDog = useAppSelector((state) => state.dogSlice.searchedBreedDog);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      dispatch(setSearchBreedDog(""));
    },
    [dispatch]
  );

  const onSearchBreedDog = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchBreedDog(e.target.value));
  };

  return (
    <div className="flex justify-center my-5">
      <form className="rounded w-full  md:w-96 " onSubmit={handleSubmit}>
        <input
          className="w-full md:w-96 appearance-none border rounded p-3  text-amber-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          required
          value={searchedBreedDog}
          placeholder="Search breed dog"
          onChange={(e) => onSearchBreedDog(e)}
        />
      </form>
    </div>
  );
}
