// alert("Hi");
var randomNumber1=Math.random();
randomNumber1=randomNumber1*6;
randomNumber1=Math.floor(randomNumber1)+1;

var str1="images/dice"+randomNumber1+".png";  // str1=images/dice1.png
document.querySelector(".img1").setAttribute("src",str1);

var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;

var str2 = "images/dice" + randomNumber2 + ".png";  // str2=images/dice1.png
document.querySelector(".img2").setAttribute("src", str2);


// Player 1 wins
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}

// Player2 wins
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}

// Draw
else{
    document.querySelector("h1").innerHTML = "Draw!";
}