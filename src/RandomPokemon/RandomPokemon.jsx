import classes from "./RandomPokemon.module.css";

export const RandomPokemon = () => {
  const pokemonNumber = Math.floor(Math.random() * 151) + 1;
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonNumber}.png`;
  return (
    <div className={classes.container}>
      <h1>Guess the Pokémon!</h1>
      <h2>#{pokemonNumber}</h2>
      <img src={imgUrl} alt="Generated Pokemon" />
    </div>
  );
};
