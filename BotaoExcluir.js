const BotaoExcluir = () => {
    const button = document.createElement("button")
    button.classList.add("check-button")
    button.innerText = "X"
    button.addEventListener("click", excluirTarefa)
    return button
}

const excluirTarefa = (evento) => {
    const item = evento.target.parentElement
    const avo = item.parentElement
    avo.remove()

}

export default BotaoExcluir