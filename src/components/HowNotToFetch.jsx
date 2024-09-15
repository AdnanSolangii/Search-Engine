import { useState } from "react";
import { useEffect } from "react";
import './Pokemon.css'
const HowNotToFetch =  () => {
  const [pokemon, setPokemon] = useState(null);
  const[loading, setLoading] = useState(true);
  const[error, setError] = useState('')
  const API = "https://pokeapi.co/api/v2/pokemon/pikachu";

  const pokemonData = () =>{
    fetch(API)
    .then((response) => response.json())
    .then((data) => {
      setPokemon(data)
      setLoading(false)
    })
    .catch((error) => {
      console.log(error)
      setLoading(false)
      setError(error)
    })
  }
  useEffect(() =>{
    pokemonData()
  },[])
  console.log(pokemon)
  if(loading)
    return(
  <div>
    <h1>...Loading</h1>
  </div>
    )
    if(error)
      return(
    <div>
      <h1>404 Not Found...</h1>
    </div>
      )
  return (
       <section className="pokemon-section">
        <h1>Let's Catch The Pokemon</h1>
        <div className="pokemon-card">
          <div className="pokemon-img">
            <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
          </div>
          <div className="pokemon-name">
            <h2>{pokemon.name}</h2>
          </div>
          <div className="abilities">
            <h3>Weight :{pokemon.weight}</h3>
            <h3>Height :{pokemon.height}</h3>
          </div>
        </div>
       </section>
  )
}
export default HowNotToFetch
