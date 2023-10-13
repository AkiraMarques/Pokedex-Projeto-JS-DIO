
// Função para converter lista de pokemons em lista no HTML
function convertPokemonToLi(pokemon) {
    return `
            <li class="pokemon">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type">${type}</li>`).join('')}
                    </ol>

                    <img src="${pokemon.photo}"
                        alt="${pokemon.name}">
                </div>
            </li>
            `
}

const pokemonList = document.getElementById('pokemonList')


pokeApi.getPokemons().then((pokemons = []) => {
    pokemonList.innerHTML = pokemons.map(convertPokemonToLi).join('')

    // .map(convertPokemonToLi) faz a mesma função do for convertendo a lista de pokemons
    // .join('') faz a junção dos elementos da lista em uma string
    
    // const listItems = []
    
    // for (let i = 0; i < pokemons.length; i++) {
    //     const pokemon = pokemons[i];
    //     listItems.push(convertPokemonToLi(pokemon))
    // }
    
    // console.log(listItems)
}) // outro modo de chamar uma função (arrow function) em callback



