import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface DogState {
  searchedBreedDog: string;
}

const initialState: DogState = {
  searchedBreedDog: "",
};

const dogSlice = createSlice({
  name: "dogSlice",
  initialState,
  reducers: {
    setSearchBreedDog: (state, action: PayloadAction<string>) => {
      state.searchedBreedDog = action.payload;
    },
  },
});

export const { setSearchBreedDog } = dogSlice.actions;
export default dogSlice.reducer;
