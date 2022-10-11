const text = document.querySelector("h1");
const buttons = document.querySelector(".buttons");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

rock.addEventListener("click", Rock);
paper.addEventListener("click", Paper);
scissors.addEventListener("click", Scissors);

//optionComputer

function ComputerPlayer() {
  var randomNum = Math.floor(Math.random() * 2);

  if (randomNum == 0) {
    return "rock";
  }
  if (randomNum == 1) {
    return "paper";
  } else if (randomNum == 2) {
    return "scissors";
  }
}

function Play(ComputerPlayer, Player) {
  if (ComputerPlayer == Player) {
    return "tie";
  }
  if (ComputerPlayer == "rock") {
    if (Player == "paper") {
      return "Win";
    } else {
      return "You lose";
    }
  }

  if (ComputerPlayer == "paper") {
    if (Player == "scissors") {
      return "Win";
    } else {
      return "You Lose";
    }
  }

  if (ComputerPlayer == scissors) {
    if (Player == "rock") {
      return "Win";
    } else {
      return "You lose";
    }
  }
}

console.log(ComputerPlayer());

function Rock() {
  text.innerHTML = "Rock";
}

function Paper() {
  text.innerHTML = "Paper";
}

function Scissors() {
  text.innerHTML = "Scissors";
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
