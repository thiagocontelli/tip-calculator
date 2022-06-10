let inputConta = document.querySelector("#input-conta"),
    inputNumeroPessoas = document.querySelector("#input-numero-pessoas"),
    inputPorcentagem = document.querySelector("#input-porcentagem"),
    textTotal = document.querySelector("#text-total"),
    textGorjeta = document.querySelector("#text-gorjeta"),
    btn5 = document.querySelector("#btn-5"),
    btn10 = document.querySelector("#btn-10"),
    btn15 = document.querySelector("#btn-15"),
    btn20 = document.querySelector("#btn-20"),
    btn25 = document.querySelector("#btn-25"),
    btn50 = document.querySelector("#btn-50"),
    btnCalcular = document.querySelector("#btn-calcular"),
    btnResetar = document.querySelector("#btn-resetar"),
    porcentagem

//EVENTO QUE CALCULA O VALOR TOTAL POR PESSOA E A GORJETA
btnCalcular.addEventListener('click', calculoValorTotalGorjeta)

//EVENTO QUE VERIFICA SE O INPUT DE PORCENTAGEM TEM ALGUM VALOR
inputPorcentagem.addEventListener('input', () => {
    if(inputPorcentagem.value != '') {
        btn5.disabled = btn10.disabled = btn15.disabled = btn20.disabled = btn25.disabled = btn50.disabled = true
        porcentagem = parseFloat(inputPorcentagem.value / 100)
    } else {
        btn5.disabled = btn10.disabled = btn15.disabled = btn20.disabled = btn25.disabled = btn50.disabled = false
    }
})

// EVENTO QUE RESETA A CALCULADORA
btnResetar.addEventListener('click', () => {
    textTotal.textContent = 'R$ 0.00'
    textGorjeta.textContent = 'R$ 0.00'
    inputConta.value = ''
    inputNumeroPessoas.value = ''
    inputPorcentagem.value = ''
    inputPorcentagem.disabled = btn5.disabled = btn10.disabled = btn15.disabled = btn20.disabled = btn25.disabled = btn50.disabled = false
    btn5.checked = btn10.checked = btn15.checked = btn20.checked = btn25.checked = btn50.checked = false
})

//EVENTO QUE VALIDA SE OS INPUTS E OS BOTÕES ESTÃO VAZIOS
btnCalcular.addEventListener('click', () => {
    if(inputConta.value === '' || inputNumeroPessoas.value === '') {
        alert('[ERRO] Insira as informações!')
        textTotal.textContent = 'R$ 0.00'
        textGorjeta.textContent = 'R$ 0.00'
    } else if(inputPorcentagem.value === '' && btn5.checked === false && btn10.checked === false && btn15.checked === false && btn20.checked === false && btn25.checked === false && btn50.checked === false && inputConta.value != '' && inputNumeroPessoas.value != '') {
        btnCalcular.addEventListener('click', calculoValorTotalGorjeta)
        textGorjeta.textContent = 'R$ 0.00'
    } else if(inputPorcentagem.value === '' && btn5.checked === false && btn10.checked === false && btn15.checked === false && btn20.checked === false && btn25.checked === false && btn50.checked === false) {
        alert('[ERRO] Insira as informações!')
        textTotal.textContent = 'R$ 0.00'
        textGorjeta.textContent = 'R$ 0.00'
    }
})

//FUNÇÃO QUE VERIFICA SE ALGUM BOTÃO DE PORCENTAGEM ESTÁ SELECIONADO
function verificarBtnClicados(botao) {
    if(botao.checked) {
        if(botao === btn5){
            btn10.disabled = btn15.disabled = btn20.disabled = btn25.disabled = btn50.disabled = inputPorcentagem.disabled = true
            porcentagem = parseFloat(botao.value / 100)
        } else if(botao === btn10) {
            btn5.disabled = btn15.disabled = btn20.disabled = btn25.disabled = btn50.disabled = inputPorcentagem.disabled = true
            porcentagem = parseFloat(botao.value / 100)
        } else if(botao === btn15) {
            btn5.disabled = btn10.disabled = btn20.disabled = btn25.disabled = btn50.disabled = inputPorcentagem.disabled = true
            porcentagem = parseFloat(botao.value / 100)
        } else if(botao === btn20) {
            btn5.disabled = btn10.disabled = btn15.disabled = btn25.disabled = btn50.disabled = inputPorcentagem.disabled = true
            porcentagem = parseFloat(botao.value / 100)
        } else if(botao === btn25) {
            btn5.disabled = btn10.disabled = btn15.disabled = btn20.disabled = btn50.disabled = inputPorcentagem.disabled = true
            porcentagem = parseFloat(botao.value / 100)
        } else if(botao === btn50) {
            btn5.disabled = btn10.disabled = btn15.disabled = btn20.disabled = btn25.disabled = inputPorcentagem.disabled = true
            porcentagem = parseFloat(botao.value / 100)
        }
    } else {
        btn5.disabled = btn10.disabled = btn15.disabled = btn20.disabled = btn25.disabled = btn50.disabled = inputPorcentagem.disabled = false
    }
}

//FUNÇÃO QUE CALCULA O VALOR TOTAL POR PESSOA E A GORJETA
function calculoValorTotalGorjeta() {
    let totalPorPessoa = inputConta.value / inputNumeroPessoas.value
    let gorjeta = parseFloat(inputConta.value) - (parseFloat(inputConta.value) - porcentagem * parseFloat(inputConta.value))
    textTotal.textContent = `${totalPorPessoa.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
    textGorjeta.textContent = `${gorjeta.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
}



