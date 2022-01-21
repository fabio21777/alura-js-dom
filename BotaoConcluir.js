const BotaoConcluir = () => {
    const botao = document.createElement("button")
    botao.classList.add("check-button")
    botao.innerText = "Completar"
    botao.addEventListener("click", completarTarefa)
    return botao

}

const completarTarefa = (evento) => {
    const botao = evento.target
    const item = botao.parentElement
    const avo = item.parentElement
    avo.classList.toggle("done")
}

export default BotaoConcluir