import PokemonService from "./services/pokemon.service.js";
import Utilities from "./utilities/utilities.js";

const cardsContainer = document.getElementById("cardsContainer");
const loadingContainer = document.getElementById("loadingContainer");

let pokemons = [];
let loading = true;
const pokemonService = new PokemonService();

(async () => {
  pokemons = await pokemonService.getPokemons();
  loadingContainer.innerHTML = "";
  showPokemonsToHTML();
})();

function showPokemonsToHTML() {
  pokemons.forEach((poke) => {
    cardsContainer.innerHTML += `
      <div class="box">
        <span>#${poke.id} </span>
        <img src="${poke.sprites.other["official-artwork"].front_default}"/>
        <h2>${Utilities.capitalize(poke.name)}</h2>
        <p>Descripción del producto 1.</p>
        <span>Tipo: ${poke.types[0].type.name} </span>
        <button class="more-info">Más Información</button>
      </div>
    `;
  });
}
