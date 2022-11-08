import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const[pokemons, setPokemons] = useState([])
  const[search, setSearch] =useState('');
  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then(r => r.json())
      .then(setPokemons)
  }, [])

  function handleChange(e) {
    setSearch(e.target.value)
  }

  function addPoke(newP) {
    fetch('http://localhost:3001/pokemon' , {
      method:'POST',
      headers:{"Content-Type" : "application/json"},
      body: JSON.stringify(newP)
    })
      .then(r => r.json())
      .then(setPokemons([...pokemons, newP]))
  }

  const pokeDisplay = pokemons.filter((poke) => {
    if(search === '') {
      return true;
    } else {
      return poke.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    }
  })

  console.log(pokeDisplay)

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addPoke={addPoke}/>
      <br />
      <Search search={search} handleChange={handleChange} />
      <br />
      <PokemonCollection pokeDisplay={pokeDisplay}/>
    </Container>
  );
}

export default PokemonPage;
