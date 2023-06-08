const container = document.querySelector('body');

let para = document.querySelector('h2');
let resultat = document.querySelector('p');
let realResult = document.createElement('h4');



container.appendChild(para);
container.appendChild(resultat);
container.appendChild(realResult)



const buttons = document.querySelectorAll('.play-btn');
buttons.forEach(button => button.addEventListener('click', function (e) {
  playerMove = e.target.innerText;
  game();
}));
function myFunction(){
   tie = 0;
   loss = 0;
   win = 0;
   resultat.textContent = `${tie}: Ties ${win}: Wins ${loss}: Losses` ;
   para.textContent = 'Pick a action';
   realResult.textContent = '';
}



let tie = 0;
let loss = 0;
let win = 0;
let playerMove = "";



function game(){
  
  
  function getComputerChoice() {
    randomNumber = Math.floor(Math.random() *3 +1);
    
    if (randomNumber == 3) {
      return 'scissors';
    } else if (randomNumber == 2) {
      return 'rock';
    } else if (randomNumber == 1) {
      return 'paper';
    }
  }
   
  function playRound(x, y) {
    y = y.toLowerCase();
    let gameInfo = `Player: ${y}, Computer: ${x},`;
  
    if (x === y) {
      tie++;
      return para.textContent = `${gameInfo} Tie`;
    } else if (x === 'scissors' && y === 'paper') {
      loss++;
      return para.textContent = `${gameInfo} Player Lost!`;
    } else if (x === 'rock' && y === 'paper') {
      win++;
      return para.textContent = `${gameInfo} Player Win!`;
    } else if (x === 'scissors' && y === 'rock') {
      win++;
      return para.textContent = `${gameInfo} Player Win!`;
    } else if (x === 'paper' && y === 'rock') {
      loss++;
      return para.textContent = `${gameInfo} Player Lost!`;
    }else if (x === 'paper' && y === 'scissors') {
      win++;
      return para.textContent = `${gameInfo} Player Win!`;
    } else if (x === 'rock' && y === 'scissors') {
      loss++;
      return para.textContent = `${gameInfo} Player Lost!`;
    }
    
  
  }
  
  function result() {
    resultat.textContent = `${tie}: Ties ${win}: Wins ${loss}: Losses` ;


    if (loss > win) {
      realResult.textContent = 'You lost!';
    } else if (win > loss) {
      realResult.textContent = 'You Win!';
    } else {
      realResult.textContent = 'Tie!!';
    }

  }

  result();
  if(win >= 5 || loss >= 5) {
    
    return para.textContent = 'Click RESET to play again';
  }
  playRound(getComputerChoice(), playerMove);
}



