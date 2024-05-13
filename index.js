let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userscorepara=document.querySelector("#usersc");
const compscorepara=document.querySelector("#compsc");

const genComchoice=()=>{
    const options=["rock","paper","sesior"];
//rock,paper,seisor
const randidx=Math.floor(Math.random()*3);
return options[randidx];
};

const drawgame=()=>{
    msg.innerText="game was draw.play again..";
    msg.style.backgroundColor="black";
};
const showin=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        msg.innerText=`you win! your ${userchoice} beats computers ${compchoice}`;
        msg.style.backgroundColor="green";
    }else{
        compscore++;
        compscorepara.innerText=compscore;
        msg.innerText=`computer win. computers ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
};

const playgame=(userchoice)=>{
    const compchoice=genComchoice();
    //generate computer choice


if(userchoice===compchoice){
drawgame();
}else{
    let userwin=true;
    if(userchoice==="rock"){
        userwin=compchoice==="paper" ? false : true;
    }

    else if(userchoice==="paper"){
        userwin=compchoice==="sesior" ? false : true;
    }

    else{
        userwin=compchoice==="rock" ? false : true;
    }

    showin(userwin,userchoice,compchoice);

}

};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
       playgame(userchoice);

    });
});