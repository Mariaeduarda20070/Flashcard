function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
    cartao.classNmae = 'cartao'

    cartao.innerHTML = 
    <div class="cartao conteudo"> 
    <h3>${categoria}</h3>
    <div class="cartao_conteudo_pergunta">
        <p>${pergunta}</p>
    </div>
    <div class="cartao_conteudo_resposta"
    <p>${resposta}</p>
    </div> 
    </div>

    let respostaEstavaVisivel = false 
    
    function viraCartao() {
        respostaEstavaVisivel = !respostaEstavaVisivel 
        cartao.classList.toggle('active', respostaEstavaVisivel)
    }
    cartao.addEventListener('click, viraCartao')

    container.appendChild(cartao)
}