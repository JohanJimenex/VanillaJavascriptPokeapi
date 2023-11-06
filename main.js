import PokemonService from "./services/pokemon.service.js";
import Utilities from "./utilities/utilities.js";

const cardsContainer = document.getElementById("cardsContainer");
const loadingContainer = document.getElementById("loadingContainer");
const btnGenerar = document.getElementById("btnGenerar");

let pokemons = [];
const pokemonService = new PokemonService();

async function generatePokemons() {
  cardsContainer.innerHTML = "";
  btnGenerar.disabled = true;
  // btnGenerar.style
  loadingContainer.innerHTML = '<div class="pokeball"></div>';
  pokemons = await pokemonService.getPokemons();
  showPokemonsToHTML();
}

generatePokemons();

function showPokemonsToHTML() {
  cardsContainer.innerHTML = "";
  pokemons.forEach((poke) => {
    cardsContainer.innerHTML += `
      <div class="p-card psychic">
        <div class="character-area">
          <img class="character" src="${
            poke.sprites.other["official-artwork"].front_default
          }" />
        </div>
        <div class="details">
          <span>${poke.types[0].type.name}</span>
          <h3>${Utilities.capitalize(poke.name)}</h3>
          <p>${Utilities.capitalize(
            poke.name
          )} is a Pokémon created by science. It is a bipedal, humanoid creature with some feline features. It is primarily gray with a long, purple tail.</p>
        </div>
        <ul class="stats">
          <li>
            <span>Type</span>
            <h5><i class="far fa-eye"></i></h5>
          </li>
          <li><span>HP</span><h5>380</h5></li>
          <li>
            <span> Weakness </span>
            <h5><i class="far fa-ghost"></i></h5>
          </li>
        </ul>
      </div>

    `;
  });
  loadingContainer.innerHTML = "";
  btnGenerar.disabled = false;
}

btnGenerar.addEventListener("click", () => {
  generatePokemons();
});
