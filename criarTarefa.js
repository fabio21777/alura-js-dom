import BotaoConcluir from './BotaoConcluir.js';
import BotaoExcluir from './BotaoExcluir.js';


const criarTarefa = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]")
    const value = input.value
    const lista = document.querySelector("[data-list]")
    const item = document.createElement("li")
    item.classList.add("task")
    item.innerHTML = `<p class="content"> ${value} </p>`

    const botoes = document.createElement("div")
    botoes.classList.add("estilo-botao")


    botoes.appendChild(BotaoConcluir())
    botoes.appendChild(BotaoExcluir())

    item.appendChild(botoes)
    lista.appendChild(item)

    input.value = " "
}
const button = document.querySelector("[data-form-button]")
button.addEventListener("click", criarTarefa)