let userScore = 0;
let compScore = 0;
 
 const choices = document.querySelectorAll(".choice");
 const msg = document.querySelector("#msg");
 const userScorepara = document.querySelector("#user-score");
 const compScorepara = document.querySelector("#comp-score");


 const getcompChoice =() => {
    const option = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];

 }

const drawgame = () => {
    console.log("game is draw");
    msg.innerText = "game was draw! Play again";
    msg.style.backgroundColor = "yellow";
}

 const playGame =((userChoice) => {
    console.log("user choice =", userChoice);
   const compChoice = getcompChoice();
   console.log("comp choice =", compChoice);


   if(userChoice === compChoice) {
    drawgame();
   }
   else {
    if(userChoice ==="rock") {
        if(compChoice === "paper") {
            console.log("comp is win");
            msg.innerText = `You lose! ${compChoice} beats your  ${userChoice}`; 
            compScore++;
            msg.style.backgroundColor = "red";
            compScorepara.innerText = compScore ;

        }else {
            console.log("user is win");
            msg.innerText = `you win! your ${userChoice} beats ${compChoice}`;
            msg.style.backgroundColor = "green";
            userScore++;
            userScorepara.innerText = userScore ;


        }
    
        
    }
    if(userChoice === "paper") {
            if(compChoice === "rock") {
                console.log("user is win");
                msg.innerText = `you win! your ${userChoice} beats ${compChoice}`;
                msg.style.backgroundColor = "green";
                userScore++;
                userScorepara.innerText = userScore ;

            }else {
                console.log("comp is win");
                msg.innerText = `You lose! ${compChoice} beats your  ${userChoice}`; 
                msg.style.backgroundColor = "red";
                compScore++;
                compScorepara.innerText = compScore ;

    
            }
    
    }
    if(userChoice === "scissors") {
            if(compChoice === "rock") {
                console.log("comp is win");
                msg.innerText = `You lose! ${compChoice} beats your  ${userChoice}`;  
                msg.style.backgroundColor = "red";
                compScore++;
                compScorepara.innerText = compScore ;

            }else {
                console.log("user is win");
                msg.innerText = `you win! your ${userChoice} beats ${compChoice}`; 
                msg.style.backgroundColor = "green";
                userScore++;
                userScorepara.innerText = userScore ;

                }
    }
    }    
    }
        
    
   
 )



choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
         
       
    });
 })














 