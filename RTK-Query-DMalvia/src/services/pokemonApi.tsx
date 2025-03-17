import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Pokemon } from "../types/typePokemon";



export const pokemonApi = createApi({
  reducerPath: '',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pokeapi.co/api/v2/'
  }),
  endpoints: (build) => ({
    getPokemonByName: build.query<Pokemon,string>({
      query: (name) => `pokemon/${name}`
    })
  })
});


export const {useGetPokemonByNameQuery} = pokemonApi