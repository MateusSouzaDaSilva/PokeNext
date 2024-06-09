interface Pokemon {
    id: number;
    name: string;
  }
  
  interface PokemonListProps {
    pokemons: Pokemon[];
  }
  
  export default function PokemonList({ pokemons }: PokemonListProps) {
    return (
      <ul>
        {pokemons.map((pokemon) => (
          <p key={pokemon.id}>{pokemon.name}</p>
        ))}
      </ul>
    );
  }
  