var answer
var score = 0
let timerInterval
let timeLeft




document.addEventListener("DOMContentLoaded", () => {
if (localStorage.getItem("highscore")){
    document.getElementById("highscore").innerText= `Highscore: ${localStorage.getItem("highscore")}`}
else 
    {document.getElementById("highscore").innerText="Highscore: 0"

    }
    if (localStorage.getItem("gamesplayed") === null) {
        localStorage.setItem("cumulative", "0")}
if (localStorage.getItem("cumulative") === null) {
        localStorage.setItem("gamesplayed", "0")}

document.getElementById("score").innerText = "Score: 0";



})

function getRandomNumber(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function start() {
    generateQuestion()
    timeLeft = 10
    score = 0
    document.getElementById("timer").style.display = 'block';

    document.getElementById("timer").innerText = timeLeft
    document.getElementById("score").innerText = ``

    clearInterval(timerInterval);

            timerInterval = setInterval(() => {
                timeLeft--;
                document.getElementById("timer").innerText = timeLeft;

                if (timeLeft <= 0) {
                    clearInterval(timerInterval);
                    console.log("time elapsed")
                    document.getElementById("question").innerText = "";
                    document.getElementById("timer").innerText = "";
                    document.getElementById("score").innerText = `You scored ${score}`
                    localStorage.setItem("gamesplayed", Number(localStorage.getItem("gamesplayed") || 0) + 1);
                    localStorage.setItem("cumulative", Number(localStorage.getItem("cumulative") || 0) + Number(score));


                    document.getElementById("timer").style.display = 'none';

                    if (typeof localStorage.getItem("highscore") === 'null') {
                        localStorage.setItem("highscore", score);
                        document.getElementById("highscore").innerText=`Highscore: ${localStorage.getItem("highscore")}`

                    }
                    else{
                        if (score >= Number(localStorage.getItem("highscore"))) {
                            localStorage.setItem("highscore", score);
                            document.getElementById("highscore").innerText=`Highscore: ${localStorage.getItem("highscore")}`


                        }

                    }
                }
            }, 1000);

}
function generateQuestion() {
    const num1 = getRandomNumber(1, 10);
    const num2 = getRandomNumber(1, 10);
    document.getElementById("question").innerText = `What is ${num1} + ${num2}?`;
    answer = num1 + num2;
    
}

function checkAnswer() {
    const input = document.getElementById("answer")
    const value =input.value
    if (value == answer){
        console.log("nice")
        generateQuestion()
        document.getElementById("answer").value = ""
        score +=1 
        document.getElementById("score").innerText = `Score: ${score}`

        console.log(score)
    }
    else {
        console.log("try again")}}
    



function cleardata() {
    localStorage.clear()
    document.getElementById("highscore").innerText="Highscore: 0"
    localStorage.setItem("cumulative", "0")
    localStorage.setItem("gamesplayed", "0")

}
const settingsBtn = document.getElementById('settings');
const settingsMenu = document.getElementById('settingsmenu');


function opensettings(){
    
    const settingsMenu = document.getElementById('settingsmenu')
    settingsMenu.style.display = (settingsMenu.style.display === 'block') ? 'none' : 'block';
}

document.addEventListener('click', function(event) {
    const settingsBtn = document.getElementById('settings');
    const settingsMenu = document.getElementById('settingsmenu')
    if (!settingsBtn.contains(event.target) && !settingsMenu.contains(event.target)) {
        settingsMenu.style.display = 'none';
    }
});


function openstats(){
    
    const statsMenu = document.getElementById('statsmenu')
    statsMenu.style.display = (statsMenu.style.display === 'block') ? 'none' : 'block';
    document.getElementById("cumulative").innerText=`Cumulative score: ${localStorage.getItem("cumulative")}`
    document.getElementById("gamesplayed").innerText=`Games played: ${localStorage.getItem("gamesplayed")}`

}

document.addEventListener('click', function(event) {
    const statsBtn = document.getElementById('stats');
    const statsMenu = document.getElementById('statsmenu')
    if (!statsBtn.contains(event.target) && !statsMenu.contains(event.target)) {
        statsMenu.style.display = 'none';
    }
});


function colorbg(){
    document.body.style.background = document.getElementById("colorpicker").value




}