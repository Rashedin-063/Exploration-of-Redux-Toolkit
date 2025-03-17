import React from 'react';
import { Pokemon } from '../types/typePokemon';



const PokemonCard = ({ pokemon }: Pokemon) => {
  return (
    <div className='max-w-md mx-auto bg-white shadow-lg rounded-2xl overflow-hidden p-6'>
      <h2 className='text-2xl font-bold text-center capitalize'>
        {pokemon.name}
      </h2>
      <img
        className='w-32 h-32 mx-auto'
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />
      <p className='text-gray-700 text-center text-xl'>
        Base Experience: {pokemon.base_experience}
      </p>
      <p className='text-gray-700 text-center text-xl'>
        Height: {pokemon.height} | Weight: {pokemon.weight}
      </p>

      <div className='flex justify-center space-x-4 my-4  text-xl'>
        {pokemon.types.map((type, index) => (
          <span
            key={index}
            className='px-3 py-1 bg-green-200 text-green-800 rounded-lg text-sm'
          >
            {type.type.name}
          </span>
        ))}
      </div>

      <div>
        <h3 className=' font-semibold  text-2xl'>Abilities:</h3>
        <ul className='list-disc list-inside text-gray-700'>
          {pokemon.abilities.map((ability, index) => (
            <li key={index} className='capitalize  text-xl'>
              {ability.ability.name}
            </li>
          ))}
        </ul>
      </div>

      <div className='mt-4'>
        <h3 className='text-lg font-semibold'>Stats:</h3>
        <ul className='list-disc list-inside text-gray-700'>
          {pokemon.stats.map((stat, index) => (
            <li key={index} className='capitalize'>
              {stat.stat.name}: {stat.base_stat}
            </li>
          ))}
        </ul>
      </div>

      <div className='mt-4 text-center'>
        <audio controls>
          <source src={pokemon.cries.latest} type='audio/ogg' />
          Your browser does not support the audio element.
        </audio>
        <p className='text-sm text-gray-500'>Pokémon cry</p>
      </div>
    </div>
  );
};

export default PokemonCard;
