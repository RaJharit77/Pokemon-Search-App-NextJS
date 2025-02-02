import React from 'react';
import PokemonItem from '@/components/PokemonItem';

export async function getServerSideProps(context) {
    const { id } = context.params;

    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const pokemon = await res.json();
        return {
            props: {
                pokemon,
            },
        };
    } catch (error) {
        console.error('Error fetching Pokémon:', error);
        return {
            props: {
                pokemon: null,
            },
        };
    }
}

const PokemonDetail = ({ pokemon }) => {
    return <PokemonItem pokemon={pokemon} />;
};

export default PokemonDetail;