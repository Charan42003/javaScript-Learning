// DICE ROLL FOR PLAYER 1
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1 + " PLAYER 1");
document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");

// DICE ROLL FOR PLAYER 2
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber2 + " PLAYER 2");
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

// WINNER SHOUTOUT 
let show = document.querySelector('h1');
if(randomNumber1 === randomNumber2) {
    show.innerHTML = "Draw!"
}
else if(randomNumber1 > randomNumber2) {
    show.innerHTML = "🚩Player 1 Wins!"
}
else if(randomNumber1 < randomNumber2) {
    show.innerHTML = "Player 2 Wins!🚩"
}

// PLAY AGAIN 
document.querySelector('button').addEventListener('click', function() {
    location.reload();
})