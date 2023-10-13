
const pokeApi = {}

pokeApi.getPokemons = (offset = 0, limit = 10) => {
    // Pegar a URL da API solicitada (lista de pokemons)
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;

    // fetch para buscar e converter dados em json na url
    return fetch(url)
        .then((response) => response.json()) // converte o body em json e na linha abaixo printa ele
        .then((jsonBody) => jsonBody.results) // pega o results (que é a lista de pokemon)
        .catch((error) => console.error(error))
    // sempre o que vai pro segundo then é o retorno do primeiro (encadeamento de then)
}

// faz uma lista de novas requisições de api's
Promise.all([
    fetch('https://pokeapi.co/api/v2/pokemon/1'),
    fetch('https://pokeapi.co/api/v2/pokemon/2'),
    fetch('https://pokeapi.co/api/v2/pokemon/3'),
    fetch('https://pokeapi.co/api/v2/pokemon/4'),
]).then((results) => {
    console.log(results)
})

