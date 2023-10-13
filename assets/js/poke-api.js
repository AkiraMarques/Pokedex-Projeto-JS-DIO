
const pokeApi = {}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
            .then((response) => response.json())
}

pokeApi.getPokemons = (offset = 0, limit = 10) => {
    // Pegar a URL da API solicitada (lista de pokemons)
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;

    // fetch para buscar e converter dados em json na url
    return fetch(url)
        .then((response) => response.json()) // converte o body em json e na linha abaixo printa ele
        .then((jsonBody) => jsonBody.results) // pega o results (que é a lista de pokemon)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail)) // mapeia a lista atras das urls de detalhes
        .then((detailRequests) => Promise.all(detailRequests)) // executa a promessa de cada uma das listas de detalhes dos pokemons
        .then((pokemonsDetails) => pokemonsDetails)
        .catch((error) => console.error(error))
    // sempre o que vai pro segundo then é o retorno do primeiro (encadeamento de then)
}

