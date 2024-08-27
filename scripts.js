/*  
  humanScoreNumber -> Camel Case
  GAME_OPTIONS -> Snake Case
*/

let scoreShelby = 0
let scoreVoce = 0
let scoreEmpate = 0

// ENUMS => Ele ajuda para não precisar mudar toda linha de código,
// basta somente mudar o Enum que automaticamente todos os itens são atualizados
const GAME_OPTIONS ={

  ROCK: "rock",
  PAPER: "paper",
  SCISSORS: "scissors"
} 

const playHuman = (valorhuman) => {

  playtheGame(valorhuman, playMachine())
}

const playMachine = () => {

  const valores = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS]

  const random = Math.floor(Math.random() * 3)

  return (`${valores[random]}`)
}

function playtheGame(humano, maquina) {

  const result = document.querySelector("#result")
  const valueHuman = document.querySelector("#minha-pont")
  const valueShelby = document.querySelector("#pont-shelby")
  const valueEmpate = document.querySelector("#empate")
  const emojiHuman = document.querySelector(".emoji-human")
  const emojiShelby = document.querySelector(".emoji-shelby")
  
  console.log(`Você botou: ${humano} Maquina botou: ${maquina}`)

  if (humano === maquina) {
    scoreEmpate++
    valueEmpate.innerHTML = scoreEmpate
    result.innerHTML = "Você empatou!"
    emojiShelby.src= "./img/shelby-empatou.png"
    emojiHuman.src= "./img/voce-empatou.png"
    p.innerHTML = "Você empatou!"
    

  } else if (humano === GAME_OPTIONS.ROCK && maquina === GAME_OPTIONS.SCISSORS || humano === GAME_OPTIONS.PAPER && maquina === GAME_OPTIONS.ROCK || humano === GAME_OPTIONS.SCISSORS && maquina === GAME_OPTIONS.PAPER) {

    scoreVoce++
    valueHuman.innerHTML = scoreVoce
    result.innerHTML = "Você ganhou!"
    emojiShelby.src= "img/shelby-perdeu.png"
    emojiHuman.src= "img/voce-ganhou.png"
    p.innerHTML = "Você ganhou!"

  } else {

    scoreShelby++
    valueShelby.innerHTML = scoreShelby
    result.innerHTML = "Você perdeu!"
    emojiShelby.src= "./img/shelby-ganhou.png"
    emojiHuman.src= "./img/voce-perdeu.png"
    p.innerHTML = "Shelby ganhou!"
  }
}