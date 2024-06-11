import Card from "./Card";

import styles from "@/styles/Home.module.css"

interface Pokemon {
  id: number;
  name: string;
}

interface PokemonListProps {
  pokemons: Pokemon[];
}

export default function PokemonList({ pokemons }: PokemonListProps) {
  return (
    <div >
      <ul className={styles.pokemon_container}>
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon}></Card>
        ))}
      </ul>
    </div>
  );
}
