"use strict";
let randomNumber = Math.floor(Math.random() * 100) + 1;
let player = 10;
let tries = [];
let result = document.querySelector('p');
let showTry = document.querySelector('h1');
function game() {
    let userInput = document.querySelector("#number");
    let attempt = Number(userInput.value);
    // Teste para verificar se é maior, menor ou igual (se caso igual ganha)
    if (attempt === randomNumber) {
        alert("Parabéns você Acertou!!!");
        showTry.innerHTML = String(tries);
        return;
    }
    if (attempt > randomNumber) {
        console.log("Vixiiii ta alto oh!");
        player -= 1;
    }
    if (attempt < randomNumber) {
        console.log("Eitaa ta baixo");
        player -= 1;
    }
    // Teste para se caso perca
    if (player === 0) {
        alert("Game Over");
        result.innerHTML = String(randomNumber);
        showTry.innerHTML = String(tries);
        return;
    }
    // Teste para verificar se é igual ao numero contido
    const isEqual = (first, second) => {
        return first === second;
    };
    const tryEqual = tries.some(e => isEqual(e, attempt));
    if (tryEqual) {
        alert("Itens iguais");
    }
    else {
        tries.push(attempt);
    }
    console.log(player);
    console.log(randomNumber);
    console.log(attempt);
    console.log(tries);
}
