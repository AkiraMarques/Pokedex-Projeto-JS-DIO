


// Função para converter lista de pokemons em lista no HTML
function convertPokemonToLi(pokemon) {
    return `
            <li class="pokemon">
                <span class="number">#001</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        <li class="type">grass</li>
                        <li class="type">poison</li>
                    </ol>

                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
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



