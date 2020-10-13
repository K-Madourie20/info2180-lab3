//-------------------------------------------------------------------------------------

function grid() {

    

    var game = document.getElementById("board").children;

    
//-------------------------------------------------------------------------------------
   

    for (let x=0;x<game.length;x++){

        

        game[x].setAttribute("class","square");

        game[x].setAttribute("onClick","input_XOXO()");

        game[x].setAttribute("onmouseover","hoverStyle()");

        game[x].setAttribute("onmouseout","hoverOff()");        

        

    }

    

    let btn = document.getElementsByTagName("button");

    btn[0].addEventListener("click", restart);

}

 

window.onload=grid;

 
//-------------------------------------------------------------------------------------
//global variable

var XOXO =0;

 
//-------------------------------------------------------------------------------------
//tictactoe functions

function input_XOXO() {

    
//-------------------------------------------------------------------------------------
    //tictactoe assignment

    let gamer = window.document.getElementById("board").children;

    
//-------------------------------------------------------------------------------------
    //tictactoe checking

    for(var i=0; i<gamer.length; i++) {

        let tictactoe = gamer[i];

 

        tictactoe.onclick = function() {

            

            if(XOXO%2 == 0 && tictactoe.innerHTML == ""){

                tictactoe.innerHTML = "X";

                tictactoe.classList.add("square","X");

                winner();

                XOXO +=1;

            }

            else if(XOXO%2 == 1 && tictactoe.innerHTML == ""){

                tictactoe.innerHTML = "O";;

                tictactoe.classList.add("square","O");

                winner();

                XOXO +=1;

            }

        };

 

    }

    

}

//-------------------------------------------------------------------------------------
//hover function when selected on

function hoverStyle() {

    

    //tictactoe assignment

    let gamer = window.document.getElementById("board").children;

 

    //tictactoe checking

    for(var i=0; i<gamer.length; i++) {

        let tictactoe = gamer[i];

 

        tictactoe.onmouseover = function() {

           

            tictactoe.classList.add("hover");

           

        };

 

    }

    

}
 
//-------------------------------------------------------------------------------------
//hover function when not selected on

function hoverOff() {

    

    let gamer = window.document.getElementById("board").children;

 

    //tictactoe checking

    for(var i=0; i<gamer.length; i++) {

        let tictactoe = gamer[i];

 

        tictactoe.onmouseout = function() {

           

            tictactoe.classList.remove("hover");

           

        };

 

    }

    

}

//-------------------------------------------------------------------------------------
// function determines the winner
function whichWin() {

//-------------------------------------------------------------------------------------

    let stat = document.getElementById("status");

 //-------------------------------------------------------------------------------------

    let gamer = window.document.getElementById("board").children;

    

    for(var i=0;i<gamer.length;i++) {

        

        gamer[i].removeAttribute("onClick");
   

    }
//-------------------------------------------------------------------------------------
    //seeing who is the winner

    if(XOXO%2==0) {

        stat.innerHTML = "Congratulations! X is the Winner!";

        stat.classList.add("you-won");

    }

    else if(XOXO%2==1) {

        stat.innerHTML = "Congratulations! O is the Winner!";

        stat.classList.add("you-won");

    }

    else{

        stat.innerHTML = "Both teams please try again";

        stat.classList.add("you-won");  

    }

    

}

//-------------------------------------------------------------------------------------
//Code for winner function

function winner() {

    

//-------------------------------------------------------------------------------------

    let gamer = window.document.getElementById("board").children;

    

    var tictactoe1 = gamer[0], tictactoe2 = gamer[1], tictactoe3 = gamer[2],

        tictactoe4 = gamer[3], tictactoe5 = gamer[4], tictactoe6 = gamer[5],

        tictactoe7 = gamer[6], tictactoe8 = gamer[7], tictactoe9 = gamer[8];

    
//-------------------------------------------------------------------------------------
    //checking to see who won X or O

    if(tictactoe1.innerHTML !== "" && tictactoe1.innerHTML === tictactoe2.innerHTML && tictactoe1.innerHTML === tictactoe3.innerHTML) {

        

        whichWin();

    }

    else if(tictactoe1.innerHTML !== "" && tictactoe1.innerHTML === tictactoe4.innerHTML && tictactoe1.innerHTML === tictactoe7.innerHTML) {

        

        whichWin();

    }

    else if(tictactoe1.innerHTML !== "" && tictactoe1.innerHTML === tictactoe5.innerHTML && tictactoe1.innerHTML === tictactoe9.innerHTML) {

        

        whichWin();

    }

    else if(tictactoe2.innerHTML !== "" && tictactoe2.innerHTML === tictactoe5.innerHTML && tictactoe2.innerHTML === tictactoe8.innerHTML) {

        

        whichWin();

    }

    else if(tictactoe3.innerHTML !== "" && tictactoe3.innerHTML === tictactoe6.innerHTML && tictactoe3.innerHTML === tictactoe9.innerHTML) {

        

        whichWin();

    }

    else if(tictactoe3.innerHTML !== "" && tictactoe3.innerHTML === tictactoe5.innerHTML && tictactoe3.innerHTML === tictactoe7.innerHTML) {

        

        whichWin();

    }

    else if(tictactoe4.innerHTML !== "" && tictactoe4.innerHTML === tictactoe5.innerHTML && tictactoe4.innerHTML === tictactoe6.innerHTML) {

        

        whichWin();

    }

    else if(tictactoe7.innerHTML !== "" && tictactoe7.innerHTML === tictactoe8.innerHTML && tictactoe7.innerHTML === tictactoe9.innerHTML) {

        

        whichWin();

    }

    

}

//-------------------------------------------------------------------------------------

function restart() {
 //-------------------------------------------------------------------------------------
//restart game function

    XOXO = 0;

//-------------------------------------------------------------------------------------

    let gamer = window.document.getElementById("board").children;

    

    for(var i=0;i<gamer.length;i++) {

        
        gamer[i].innerHTML = "";

        gamer[i].setAttribute("onClick", "input_XOXO()");

        gamer[i].classList.remove("X");

        gamer[i].classList.remove("O");

    }
//-------------------------------------------------------------------------------------

    let stat = document.getElementById("status");

    stat.classList.remove("you-won");

    stat.innerHTML = "Move your mouse over a square and click to play an X or an O.";

    

}


