import PokemonCard from "./component/PokemonCard";
import { useGetPokemonByNameQuery } from "./services/pokemonApi";


const App = () => {

  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur');
  
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: 'Shit!!!'</div>

if(!data) return null
  
  console.log(data);
  

  return (
    <div className="text-3xl font-semibold text-center">
      {data.name} is a {data.types[0].type.name} type Pokémon!

      <PokemonCard pokemon={data} />
    </div>
  )
}
export default App