class PokemonService {
  urlBase = "https://pokeapi.co/api/v2";
  pokemons = [];

  async getPokemons(quantity = 20) {
    const randomNumber = Math.round(Math.random() * 140);

    const response = await fetch(
      `${this.urlBase}/pokemon?limit=${quantity}&offset=${randomNumber}`
    );
    const resp = await response.json();

    for (const pokemon of resp.results) {
      let poke = await this.#getOnePokemon(pokemon.name);
      this.pokemons.push(poke);
    }

    return this.pokemons;
  }

  async #getOnePokemon(pokemonName) {
    const resp = await fetch(`${this.urlBase}/pokemon/${pokemonName}`);
    const pokemonDetails = await resp.json();
    return pokemonDetails;
  }
}

export default PokemonService;
