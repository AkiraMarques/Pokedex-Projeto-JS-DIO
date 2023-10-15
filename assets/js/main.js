const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

const maxRecords = 151;
const limit = 5;
let offset = 0;

// Função para converter lista de pokemons em lista no HTML


function loadPokemonItens(offset, limit) {
    function convertPokemonToLi(pokemon) {
        return `
                <li class="pokemon ${pokemon.type}" onclick="loadDetailsPokemon('${pokemon.name}')">
                    <span class="number">#${pokemon.number}</span>
                    <span class="name">${pokemon.name}</span>
    
                    <div class="detail">
                        <ol class="types">
                            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                        </ol>
    
                        <img src="${pokemon.photo}"
                            alt="${pokemon.name}">
                    </div>
                </li>
                `
    }

    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('');
        pokemonList.innerHTML += newHtml;

        // .map(convertPokemonToLi) faz a mesma função do for convertendo a lista de pokemons
        // .join('') faz a junção dos elementos da lista em uma string

        // const listItems = []

        // for (let i = 0; i < pokemons.length; i++) {
        //     const pokemon = pokemons[i];
        //     listItems.push(convertPokemonToLi(pokemon))
        // }

        // console.log(listItems)
    }) // outro modo de chamar uma função (arrow function) em callback

}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit;

    const qtdRecordNexPage = offset + limit

    if (qtdRecordNexPage >= maxRecords) {
        const newLimit = maxRecords - offset;
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
})

// novo
async function loadDetailsPokemon(pokeName) {
    const pokemon = await pokeApi.getDetails(pokeName).then(details => details);

    let description = document.querySelector('#description');
    description.style.display = 'block';

    description.innerHTML = `
        <div class="pokemon-card ${pokemon.type}" onclick="limpar()">
            <div class="grid-card">
                <div class="grid-card">${pokemon.types.map((type) => `<div class="type ${type}">${type}</div>`).join('')}</div>
                <div class="number">#${pokemon.number}</div>
            </div>
            <img src="${pokemon.image}" alt="${pokemon.name}">
            <h1 class="pokemon-card-name">${pokemon.name}</h1>
            <div class="pokemon-type type ${pokemon.type}"><strong>HP:</strong> ${pokemon.hp}</div>
            <div class="pokemon-type type ${pokemon.type}"><strong>ATTACK:</strong> ${pokemon.attack}</div>
            <div class="pokemon-type type ${pokemon.type}"><strong>DEFFENSE:</strong> ${pokemon.deffense}</div>
            <div class="pokemon-type type ${pokemon.type}"><strong>SPECIAL ATTACK::</strong> ${pokemon.specialAttack}</div>
            <div class="pokemon-type type ${pokemon.type}"><strong>SPECIAL DEFFENSE:</strong> ${pokemon.specialDefense}</div>
            <div class="pokemon-type type ${pokemon.type}"><strong>SPEED:</strong> ${pokemon.speed}</div>
        </div>
    `;
}
async function limpar() {
    description.style.display = 'none';
}