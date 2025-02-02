import React, { useRef } from 'react';
import { useRouter } from 'next/router';
import PokemonSearchDumb from '../components/PokemonSearchDumb';
import { pad } from '../utils/index';

const PokemonSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = () => {
    const query = searchRef.current.value.toLowerCase();
    if (query) {
      router.push(`/pokemon/${query}`);
    }
  };

  const handleRandom = () => {
    const randomId = pad(Math.floor(Math.random() * 1010) + 1, 3);
    router.push(`/pokemon/${randomId}`);
  };

  return (
      <div className="min-h-full flex items-center justify-center">
        <div className="bg-gray-100 p-12 rounded-lg shadow-amber-300 shadow-lg w-full max-w-lg">
          <h1 className="text-center text-3xl font-bold mb-6 text-blue-700">Pokémon Search</h1>
          <PokemonSearchDumb
              searchRef={searchRef}
              onSearch={handleSearch}
              onRandom={handleRandom}
          />
        </div>
      </div>
  );
};

export default PokemonSearch;
