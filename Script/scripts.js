"use strict";
// Gerador de numeros aletórios
let randomNumber = Math.floor(Math.random() * 100) + 1;
// Variavéis Usuário
let userInput = document.querySelector("input");
let player = 10;
let tries = [];
// Variaveis de ID's de tags das páginas;
let showTry = document.getElementById('tries');
let showTryLost = document.getElementById('tries_lost');
let showTryWin = document.getElementById('tries_win');
let result = document.getElementById('random_number');
if (userInput) {
    // Verifica se a variavel userInput mudou(No caso, o input a tag HTML), se mudou executa a função do jogo
    userInput.addEventListener('change', updateValue);
    function updateValue() {
        if (Number(userInput.value)) {
            let attempt = Number(userInput.value);
            // Varifica se o numero é maior 100
            if (attempt > 100 || !Number.isInteger(attempt)) {
                alert("Apenas numeros de 1 a 100");
                resetInput();
                return;
            }
            // Teste para verificar se é igual ao numero contido
            const isEqual = (first, second) => {
                return first === second;
            };
            const tryEqual = tries.some(e => isEqual(e, attempt));
            if (tryEqual) {
                alert("Itens iguais");
                return;
            }
            else {
                tries.push(attempt);
            }
            // Verifica se o player ganhou, se ganhou envia para o HTML
            if (attempt === randomNumber && attempt !== 0) {
                alert("Parabéns você Acertou!!!");
                localStorage.setItem("win", String(tries));
                localStorage.setItem("randomNumber", String(randomNumber));
                window.location.href = "../Views/win.html";
            }
            // Testa se é maior ou igual ao numero, e chama a função de cololar o numero
            if (attempt > randomNumber) {
                alert("Vixiiii ta alto oh!");
                player -= 1;
                resetInput();
            }
            if (attempt < randomNumber) {
                alert("Eitaa ta baixo");
                player -= 1;
                resetInput();
            }
            // Teste para se caso perca
            if (player === 0) {
                alert("Game Over");
                localStorage.setItem("lost", String(tries));
                localStorage.setItem("randomNumber", String(randomNumber));
                window.location.href = "../Views/lost.html";
            }
            // Reseta o campo de Input, apos o enter no conteudo
            function resetInput() {
                if (userInput.value != "") {
                    userInput.value = "";
                }
            }
            // Mostra os palpites, na hora!
            showTry.innerHTML = String(tries);
            // Consoles de testes.:
            // console.log(player)
            // console.log(randomNumber)
            // console.log(attempt)
            // console.log(tries)
            // console.log(showTryWin);
            // console.log(showTryLost);
            // console.log(showTry);
            // console.log(result);
        }
    }
}
// Verifica se a varivel é verdadeira, se for os dados são puxados do localstorage
if (showTryWin) {
    result.innerText = `${localStorage.getItem("randomNumber")}`;
    showTryWin.innerText = `${localStorage.getItem("win")}`;
}
if (showTryLost) {
    result.innerText = `${localStorage.getItem("randomNumber")}`;
    showTryLost.innerText = `${localStorage.getItem("lost")}`;
}
// Colinha do numero aleatório
console.log(randomNumber);
