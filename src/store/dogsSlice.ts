import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { DogResponse, DogsResponse } from "./types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const baseUrl = "https://dogapi.dog/api/v2";

export const dogsApi = createApi({
  reducerPath: "dogsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getAllDogs: builder.query<DogsResponse, void>({
      query: () => `/breeds`,
    }),
    getDetailDog: builder.query<DogResponse, string>({
      query: (id) => `/breeds/${id}`,
    }),
  }),
});

export const { useGetAllDogsQuery, useGetDetailDogQuery } = dogsApi;

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
