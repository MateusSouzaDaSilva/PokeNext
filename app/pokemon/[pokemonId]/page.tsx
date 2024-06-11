async function GetDetails(pokemonId: string) {
    
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
  
    return await res.json()
  
    
}

export default async function Pokemon({params}: any) {

    const pokemon = await GetDetails(params.pokemonId)
    return (
        <p>{pokemon.name}</p>
    )
}