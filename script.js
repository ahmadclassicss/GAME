let userScore = 0;
let compScore = 0;  

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const drawGame = () => {
    console.log("Game was draw");
    msg.innerText = "Game was Draw, Play Again";
    msg.style.backgroundColor = "black";
}   

const showWiner = (userWin,userchoice,compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You Win!");
        msg.innerText = `You Win! Your ${userchoice} beat ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You Lose!"); 
        msg.innerText = `You Lose! ${compChoice} beat your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}

const genCompChoice = () => {
    const option = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
}  

const playGame = (userchoice) =>{
    console.log("Choice was click =", userchoice);
    // Generate computer choice  
    const compChoice = genCompChoice();
    console.log("Computer Choice =", compChoice);

    if (userchoice === compChoice){
        // draw a game 
        drawGame();
    }
    else{
        let userWin = true;
        if(userchoice === "rock"){
            // scissors,paper 
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userchoice === "paper"){
            //rock, scissors 
            userWin =compChoice === "scissors" ? false : true;
        }
        else {
            //rock,paper
            userWin = compChoice === "rock" ? false: true;
        }
        showWiner(userWin,userchoice,compChoice);
    }
}

choices.forEach(choice => { 
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    })
})