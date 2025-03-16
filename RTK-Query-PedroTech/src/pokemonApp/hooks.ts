import { pokemonApi } from './pokemon';

export const useGetPokemonByNameQuery = pokemonApi.endpoints.getPokemonByName.useQuery;
