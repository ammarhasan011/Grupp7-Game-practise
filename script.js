//my variables
const text = document.querySelector(".header");
const buttons = document.querySelector(".buttons");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const Computer = document.querySelector("h2");
const ComputerplayerDisplay = document.getElementById("ComputerplayerDisplay");

rock.addEventListener("click", Rock);
paper.addEventListener("click", Paper);
scissors.addEventListener("click", Scissors);

//optionComputer
function Computerplayer() {
  var randomNum = Math.floor(Math.random() * 3 + 1);
  //console.log(randomNum);

  if (randomNum === 0) {
    return "rock";
  }
  if (randomNum === 1) {
    return "paper";
  } else if (randomNum === 2) {
    return "scissors";
  }
  //det ska vara något liknande för att visa datorns resultat
  //let ComputerplayerDisplay = Play(Computerplayer);
  ComputerplayerDisplay.innerHTML = randomNum;
  console.log(Computerplayer());
}


function Play(ComputerPlayer, Player) {
  if (ComputerPlayer === Player) {
    return "tie";
  }
  if (ComputerPlayer === "rock") {
    if (Player === "paper") {
      return "Win";
    } else {
      return "You lose";
    }
  }

  if (ComputerPlayer === "paper") {
    if (Player === "scissors") {
      return "Win";
    } else {
      return "You Lose";
    }
  }

  if (ComputerPlayer === scissors) {
    if (Player === "rock") {
      return "Win";
    } else {
      return "You lose";
    }
  }
}

function Rock() {
  let ComputerPlayer = Computerplayer();
  let Player = "rock";
  let restlut = Play(Player, ComputerPlayer);
  text.innerHTML = restlut;
}

function Paper() {
  let ComputerPlayer = Computerplayer();
  let Player = "paper";
  let restlut = Play(Player, ComputerPlayer);
  text.innerHTML = restlut;
}

function Scissors() {
  let ComputerPlayer = Computerplayer();
  let Player = "scissors";
  let restlut = Play(Player, ComputerPlayer);
  text.innerHTML = restlut;
}



//   if (player === "rock") {
//     tie();
//   }
//   if (player === "paper") {
//     win();
//   } else if (player === "scissors") {
//     lose();
//   }
//   console.log("hej");
// }

// function tie() {
//   text.innertext = "Its a tie!!!";
// }

// function win() {
//   text.innertext = "Its a wiiiiiin!!!";
// }

// function lose() {
//   text.innertext = "you looooose!!!";
// }
