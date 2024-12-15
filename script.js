let userS=0;
let compS=0;

const u=document.querySelector("#user-score");
const c=document.querySelector("#comp-score");

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const gencompC=()=>{
    const options=["rock","paper","scissor"];
    const ind=Math.floor(Math.random()*3);
    return options[ind];

}

let showW=(userW,userC,compC)=>{
    if(userW){
        console.log("you won");
        msg.innerText=`you won ${userC} beats ${compC}`;
        msg.style.backgroundColor="green";
        u.innerText=++userS;

        
    }
    else{
        console.log("you lose");
        msg.innerText=`you lose ${userC} beaten by ${compC}`;
        msg.style.backgroundColor="red";
        c.innerText=++compS;
    }
}
const drawG=()=>{
    console.log("game is draw")
}
const playG= (userC)=>{
    console.log("user=",userC);
    const compC=gencompC();
    console.log("comp=",compC); 
    if(userC===compC){
        drawG(); 
        msg.innerText="Game drawn ! play again";
        msg.style.backgroundColor="black";
    }
    else{
        let userW=true;
        if(userC==="rock"){
            userW= compC==="scissor"?true:false;
        }
        else if(userC==="paper"){
            userW=compC==="rock"?true:false;
        }
        else if(userC==="scissor"){
            userW=compC==="paper"?true:false;
        }
        showW(userW,userC,compC);
    }

    }

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userC=choice.getAttribute("id");
        playG(userC);
    })
})