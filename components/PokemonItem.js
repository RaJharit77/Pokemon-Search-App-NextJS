import React from 'react';
import { GiReturnArrow } from "react-icons/gi";
import { useRouter } from 'next/router';

const PokemonItem = ({ pokemon }) => {
    const router = useRouter();

    return (
        <div className="p-7 border rounded-lg shadow-lg bg-gray-900 max-w-xl mx-auto">
            {pokemon ? (
                <>
                    <h2 className="text-center text-3xl font-bold capitalize text-white">
                        {pokemon.name}
                    </h2>
                    <p className="text-center text-xl text-white">#{pokemon.id}</p>
                    <img
                        src={pokemon.sprites?.other?.['official-artwork']?.front_default || pokemon.sprites?.front_default}
                        alt={pokemon.name}
                        className="mx-auto mb-4 w-full max-h-96 object-contain"
                    />
                </>
            ) : (
                <p className="text-center">Aucun Pokémon sélectionné.</p>
            )}
            <button
                onClick={() => router.back()}
                className="mt-6 px-4 py-2 bg-orange-500 text-white hover:text-black rounded-md hover:bg-orange-600 block mx-auto"
            >
                <GiReturnArrow />
            </button>
        </div>
    );
};

export default PokemonItem;
