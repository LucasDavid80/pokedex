/*
Quando clicar no pokemon da listagem temos que esconder o pokemon aberto e mostrar no pokemon que foi selecionado.

Para isso vamos precisar trabalhar com dois elementos:
1 - listagem
2 - cartão pokemon

preciso criar duas variáveis no JS pra trabalhar com os elementos da tela

vou precisar trabalhar em um evenco com o clique que o usuário irá fazer na listagem 

-remover a classe "aberto" só do cartão que estiver aberto
-ao clicar em pokemon da listagem pegamos o id desse pokemon pra saber qual cartão mostrar
-remover a classe "ativo" que marca o pokemon seleionado
-adicionar a classe "ativo" no item da lista selecionado    

*/

// precisamos criar duas variáveis no JS pra trabalhar com os elementos da tela
const listaSelecaoPokemons = document.querySelectorAll('.pokemon');
const pokemonCard = document.querySelectorAll('.cartao-pokemon');

listaSelecaoPokemons.forEach(pokemon => {
    // vou precisar trabalhar em um evenco com o clique que o usuário irá fazer na listagem 
    pokemon.addEventListener('click', ()=>{
        // -remover a classe "aberto" só do cartão que estiver aberto
        const cartPokeAberto = document.querySelector('.aberto');
        cartPokeAberto.classList.remove('aberto')

        // -ao clicar em pokemon da listagem pegamos o id desse pokemon pra saber qual cartão mostrar
        const idPokemonSel = pokemon.attributes.id.value;

        const nomeIdCartao = 'cartao-'+idPokemonSel;

        const cartPokeAbrir =  document.getElementById(nomeIdCartao);
        cartPokeAbrir.classList.add('aberto');

        // -remover a classe "ativo" que marca o pokemon seleionado
        const pokeAtivoListagem = document.querySelector('.ativo');
        pokeAtivoListagem.classList.remove('ativo');

        // -adicionar a classe "ativo" no item da lista selecionado 
        const pokeSelListagem = document.getElementById(idPokemonSel);
        pokeSelListagem.classList.add('ativo');
    })
})

