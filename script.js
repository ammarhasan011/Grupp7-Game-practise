
const text = document.querySelector("h1")
const buttons = document.querySelector(".buttons")
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

rock.addEventListener("click", check);
paper.addEventListener("click", check);
scissors.addEventListener("click", check);


//optionComputer

function check(player) {
    if (player === "rock"){
        tie();
    }
    if(player === "paper"){
        win();
    }
    else if (player ==="scissors") {
        lose();
    }
    console.log("hej");
}



function tie(){
    text.innertext = "Its a tie!!!";
}


function win() {
    text.innertext = "Its a wiiiiiin!!!";
}


function lose() {
    text.innertext = "you looooose!!!";
}