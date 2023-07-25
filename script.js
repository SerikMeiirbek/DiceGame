
//Generate random number from 1 to 6

const firstRandomNumber = Math.floor(Math.random() * 6) + 1;
const secondRandomNumber = Math.floor(Math.random() * 6) + 1;

const firstDiceImage = "images/dice" + firstRandomNumber + ".png";
const secondDiceImage = "images/dice" + secondRandomNumber + ".png";

document.querySelector(".img1").setAttribute("src", firstDiceImage);
document.querySelector(".img2").setAttribute("src", secondDiceImage);



if(firstRandomNumber > secondRandomNumber){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}else if(firstRandomNumber < secondRandomNumber){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}else{
    document.querySelector("h1").innerHTML = "It's a Draw!";
}

