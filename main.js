
let tie = 0;
let loss = 0;
let win = 0;
let playerMove = 'rock';

function game(){
  
  
  function getComputerChoice() {
    randomNumber = Math.floor(Math.random() *3 +1);
    
    if (randomNumber == 3) {
      return 'siccors';
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
      return console.log(`${gameInfo} Tie`);
    } else if (x === 'siccors' && y === 'paper') {
      loss++;
      return console.log(`${gameInfo} Player Lost!`);
    } else if (x === 'rock' && y === 'paper') {
      win++;
      return console.log(`${gameInfo} Player Win!`)
    } else if (x === 'siccors' && y === 'rock') {
      win++;
      return console.log(`${gameInfo} Player Win!`);
    } else if (x === 'paper' && y === 'rock') {
      loss++;
      return console.log(`${gameInfo} Player Lost!`)
    }else if (x === 'paper' && y === 'siccors') {
      win++;
      return console.log(`${gameInfo} Player Win!`);
    } else if (x === 'rock' && y === 'siccors') {
      loss++;
      return console.log(`${gameInfo} Player Lost!`)
    }
    
  
  }
  
  function result() {
    console.log(`${tie}: Ties`);
    console.log(`${win}: Wins`);
    console.log(`${loss}: Losses`);

    if (loss >= tie && loss > win) {
      console.log('Game is lost');
    } else if (win >= tie && win > loss) {
      console.log('You Win!');
    } else {
      console.log('Tie!!')
    }

  }
  for (let i = 0; i < 5; i++) {
    playRound(getComputerChoice(), playerMove);
  }
  
  result();
}

for (let i = 0; i < 20; i++) {
  game();
}