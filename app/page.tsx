import Image from "next/image";
import { use } from "react";

import styles from "../styles/Home.module.css"

import PokemonList from "@/components/PokemonList";

async function getPokemon() {
  const maxPokemon = 251;
  const api = "https://pokeapi.co/api/v2/pokemon/";

  const res = await fetch(`${api}/?limit=${maxPokemon}`);
  const data = await res.json();

  // add pokemon index

  data.results.forEach((item: { id: any }, index: number) => {
    item.id = index + 1;
  });

  return data.results;
}

export default function Home() {
  const pokemons = use(getPokemon());

  return (
    <>
      <div className={styles.title_container}>
        <h1 className={styles.title}>Poke<span>Next</span></h1>
        <Image src={"/images/pokeball.png"} width={50} height={50} alt="Projeto PokeNext"></Image>
      </div>
      <div className={styles.pokemon_container}>
      <PokemonList pokemons={pokemons}></PokemonList>
      </div>
    </>
  );
}
