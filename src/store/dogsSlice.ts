import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { DogResponse, DogsResponse } from "./types";

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
