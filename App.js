let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const comScorePara = document.querySelector("#com-score");

const genCompChoice = () => {

   const options =  ["rock", "paper", "scissors"];
   const randIdex = Math.floor(Math.random() * 3);
   return options[randIdex];

}

const drawGame = () => {
 console.log ("Game was draw");
 msg.innerText = "Game was draw Play Again";
 msg.style.backgroundColor = "yellow";

} 

const showWinner = (userWin,userChoice,comChoice) => {

    if(userWin)
        
        {
            userScore++;
            userScorePara.innerText = userScore;
            console.log("you win");
            msg.innerText = `You Win ! your ${userChoice} beats ${comChoice}`;
            msg.style.backgroundColor = "green";
        } else
      
        {
            comScore++;
            comScorePara.innerText = comScore;
             console.log("you lose");
             msg.innerText = `You lose ${comChoice} beats your ${userChoice}`;
             msg.style.backgroundColor = "red";
        }

}
const playGame = (userChoice) => {
    console.log("user choice =",userChoice);

    //Genearte computer choice - Moduler
    const compChoice  = genCompChoice ();
    console.log("computer choice =",compChoice);

    if(userChoice === compChoice)
        {
            //Draw Game
            drawGame();
        } else
        {
            let userWin = true;
            if (userChoice === "rock")
                {
                    //comChoice ke toh scissors,paper
                       userWin = compChoice === "paper" ? false : true ;
                }
                else if (userChoice === "paper")
                    {
                        ////comChoice ke toh scissors,rock
                        userWin = compChoice === "scissors" ? false :true ;
                    }
                    else if (userChoice === "scissors") {
                        //comChoice rock,paper
                        userWin = compChoice === "rock" ? false : true ;
                      
                    }
                    showWinner(userWin,userChoice,compChoice);
        }

}

choices.forEach((choice) => {
    console.log("choice");
   choice.addEventListener("click",() =>{
    const userChoice = choice.getAttribute("id");
        //console.log("choice was clicked",userChoice);
       playGame (userChoice);
   })

})