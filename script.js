let humanScore = 0;
let compScore =0;
const choicesArray = ["Rock","Paper","Scissors"];

// for selecting the msg element
let msgPara = document.querySelector(".msg");

const choices = document.querySelectorAll(".choice");
for(const c of choices){
    c.addEventListener("click",()=>{
        let choiceid = c.getAttribute("id");
        // console.log(choiceid,"was selected");
        playGame(choiceid);
    })
}
const playGame = (userChoice)=>{
    let idx = generateRandomIdx(0,2);
    let computerChoice = choicesArray[idx];
    // console.log(idx);
    // console.log(computerChoice,"was selected by computer");
    let userWin = false;
    if(userChoice==computerChoice){
        draw();
    }else{
        if(userChoice=== "Rock"){
            userWin = computerChoice=="Scissors";
        }else if(userChoice==="Paper"){
            userWin = computerChoice=="Rock";
        }else{
            userWin = computerChoice=="Paper";
        }
        if(userWin){
            humanScore++;
            win(userChoice,computerChoice);
        }else{
            compScore++;
            lose(userChoice,computerChoice);
        }
    }
}
const generateRandomIdx = (low=0,high)=>{
    let max = high-low+1;
    let r = Math.floor(Math.random()*max)+low;
    return r;
}
const draw = ()=>{
    console.log('the game was tied');
    msgPara.innerText = 'The game was tied!';
    msgPara.style.backgroundColor = "rgba(2, 2, 64, 0.986)";
}
const win = (userChoice,computerChoice)=>{
    console.log('human win')
    msgPara.innerText = "Human win! Human's "+userChoice+" defeats computer's "+computerChoice;
    // msgPara.innerText = `Human win! Human's ${userChoice} defeats Computer's ${computerChoice}`;
    msgPara.style.backgroundColor = "green";
    document.querySelector("#humanScore").innerText = humanScore;
}
const lose =(userChoice,computerChoice)=>{
    console.log('computer win')
    // msgPara.innerText = "Computer win! Computer's",computerChoice,"defeats Human's", userChoice;
    msgPara.innerText = `Computer win! Computer's ${computerChoice} defeats Human's ${userChoice}`;
    msgPara.style.backgroundColor = "Red";
    document.querySelector("#computerScore").innerText = compScore;

}