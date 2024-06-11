import Image from "next/image";

import styles from "@/styles/Pokemon.module.css"

async function GetDetails(pokemonId: string) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);

  return await res.json();
}

export default async function Pokemon({ params }: any) {
  const pokemon = await GetDetails(params.pokemonId);
  return (
    <div className={styles.pokemon_container}>
      <h1 className={styles.title}>{pokemon.name}</h1>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`}
        width={200}
        height={200}
        alt={pokemon.name}
      ></Image>
      <div>
        <h3>Número:</h3>
        <p>#{pokemon.id}</p>
      </div>
      <div>
        <h3>Tipo:</h3>
        <div className={styles.types_container}>
            {pokemon.types.map((item: any, index: number) => (
                <span key={index} className={`${styles.type} ${styles['type_' + item.type.name]}`}>{item.type.name}</span>
            ))}
        </div>
      </div>
      <div className={styles.data_container}>
        <div className={styles.data_height}>
            <h4>Altura:</h4>
            <p>{pokemon.height * 10}cm</p>
        </div>
        <div className={styles.data_weight}>
            <h4>Peso:</h4>
            <p>{pokemon.weight / 10}kg</p>
        </div>
      </div>
    </div>
  );
}
