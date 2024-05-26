let userscore=0;
let compscore=0;
let maxScore=10;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");
 const gencompchoice=()=>{
    const options=["rock","paper","scissors"];
    const ranid=Math.floor(Math.random()*3);
    return options[ranid];

 }
 const draw=()=>{
    msg.innerText="Game was draw,Try again!";
    msg.style.backgroundColor="brown";
 };
 const showWinner=(userwin,userchoice,compchoice)=>{
    
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        msg.innerText=`You win! ${userchoice} beats ${compchoice}`; 
        msg.style.backgroundColor="green";  
        if(userscore==maxScore&&compscore<10){
            msg.innerText="You're a Champion";
        }      
    }
    else{
        compscore++;
        compscorepara.innerText=compscore;
        msg.innerText=`You lose! ${compchoice}  beats your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
 }
const playgame=(userchoice )=>{
    const compchoice=gencompchoice();
    if(userchoice===compchoice){
        draw();
    }
    else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin=compchoice==="paper"?false:true;
        }else if(userchoice==="paper"){
            userwin=compchoice==="scissors"?false:true;
        }
        else{
            userwin=compchoice==="rock"?false:true;
        }
        showWinner(userwin,userchoice,compchoice);
    }
};
choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice)
    });
});
