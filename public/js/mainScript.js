/**
 * Created by Gilad Glasberg on 18/03/14.
 */

// on load
$(function(){
    $("#userAction01").hide(1);
    $("#userAction02").hide(1);
    $("#userAction03").hide(1);
    $("#userAction04").hide(1);

    $("#youFold").hide(1);

    $("#GFX01").hide(1);
    $("#GFX02").hide(1);
    $("#GFX03").hide(1);
    $("#GFX04").hide(1);

    $("#userScore").css("color", "brown");
    $("#computerScore").css("color", "brown");


});

// user and computer score reset
x = 0;
y = 0;

// array of all the deck of cards
// example (val = the value of the cards 2=2, 6=6, Jack=11)
// example (myType = "a" or "b" or "c" or "d"), each one is declaring different color for the card.
var cardsDeck = new Array();

cardsDeck[0] = new Image();
cardsDeck[0].src = "img/cards/2a.png";
cardsDeck[0].val = 2;
cardsDeck[0].myType = "a";

cardsDeck[1] = new Image();
cardsDeck[1].src = "img/cards/2b.png";
cardsDeck[1].val = 2;
cardsDeck[1].myType = "b";

cardsDeck[2] = new Image();
cardsDeck[2].src = "img/cards/2c.png";
cardsDeck[2].val = 2;
cardsDeck[2].myType = "c";

cardsDeck[3] = new Image();
cardsDeck[3].src = "img/cards/2d.png";
cardsDeck[3].val = 2;
cardsDeck[3].myType = "d";

cardsDeck[4] = new Image();
cardsDeck[4].src = "img/cards/3a.png";
cardsDeck[4].val = 3;
cardsDeck[4].myType = "a";

cardsDeck[5] = new Image();
cardsDeck[5].src = "img/cards/3b.png";
cardsDeck[5].val = 3;
cardsDeck[5].myType = "b";

cardsDeck[6] = new Image();
cardsDeck[6].src = "img/cards/3c.png";
cardsDeck[6].val = 3;
cardsDeck[6].myType = "c";

cardsDeck[7] = new Image();
cardsDeck[7].src = "img/cards/3d.png";
cardsDeck[7].val = 3;
cardsDeck[7].myType = "d";

cardsDeck[8] = new Image();
cardsDeck[8].src = "img/cards/4a.png";
cardsDeck[8].val = 4;
cardsDeck[8].myType = "a";

cardsDeck[9] = new Image();
cardsDeck[9].src = "img/cards/4b.png";
cardsDeck[9].val = 4;
cardsDeck[9].myType = "b";

cardsDeck[10] = new Image();
cardsDeck[10].src = "img/cards/4c.png";
cardsDeck[10].val = 4;
cardsDeck[10].myType = "c";

cardsDeck[11] = new Image();
cardsDeck[11].src = "img/cards/4d.png";
cardsDeck[11].val = 4;
cardsDeck[11].myType = "d";

cardsDeck[12] = new Image();
cardsDeck[12].src = "img/cards/5a.png";
cardsDeck[12].val = 5;
cardsDeck[12].myType = "a";

cardsDeck[13] = new Image();
cardsDeck[13].src = "img/cards/5b.png";
cardsDeck[13].val = 5;
cardsDeck[13].myType = "b";

cardsDeck[14] = new Image();
cardsDeck[14].src = "img/cards/5c.png";
cardsDeck[14].val = 5;
cardsDeck[14].myType = "c";

cardsDeck[15] = new Image();
cardsDeck[15].src = "img/cards/5d.png";
cardsDeck[15].val = 5;
cardsDeck[15].myType = "d";

cardsDeck[16] = new Image();
cardsDeck[16].src = "img/cards/6a.png";
cardsDeck[16].val = 6;
cardsDeck[16].myType = "a";

cardsDeck[17] = new Image();
cardsDeck[17].src = "img/cards/6b.png";
cardsDeck[17].val = 6;
cardsDeck[17].myType = "b";

cardsDeck[18] = new Image();
cardsDeck[18].src = "img/cards/6c.png";
cardsDeck[18].val = 6;
cardsDeck[18].myType = "c";

cardsDeck[19] = new Image();
cardsDeck[19].src = "img/cards/6d.png";
cardsDeck[19].val = 6;
cardsDeck[19].myType = "d";

cardsDeck[20] = new Image();
cardsDeck[20].src = "img/cards/7a.png";
cardsDeck[20].val = 7;
cardsDeck[20].myType = "a";

cardsDeck[21] = new Image();
cardsDeck[21].src = "img/cards/7b.png";
cardsDeck[21].val = 7;
cardsDeck[21].myType = "b";

cardsDeck[22] = new Image();
cardsDeck[22].src = "img/cards/7c.png";
cardsDeck[22].val = 7;
cardsDeck[22].myType = "c";

cardsDeck[23] = new Image();
cardsDeck[23].src = "img/cards/7d.png";
cardsDeck[23].val = 7;
cardsDeck[23].myType = "d";

cardsDeck[24] = new Image();
cardsDeck[24].src = "img/cards/8a.png";
cardsDeck[24].val = 8;
cardsDeck[24].myType = "a";

cardsDeck[25] = new Image();
cardsDeck[25].src = "img/cards/8b.png";
cardsDeck[25].val = 8;
cardsDeck[25].myType = "b";

cardsDeck[26] = new Image();
cardsDeck[26].src = "img/cards/8c.png";
cardsDeck[26].val = 8;
cardsDeck[26].myType = "c";

cardsDeck[27] = new Image();
cardsDeck[27].src = "img/cards/8d.png";
cardsDeck[27].val = 8;
cardsDeck[27].myType = "d";

cardsDeck[28] = new Image();
cardsDeck[28].src = "img/cards/9a.png";
cardsDeck[28].val = 9;
cardsDeck[28].myType = "a";

cardsDeck[29] = new Image();
cardsDeck[29].src = "img/cards/9b.png";
cardsDeck[29].val = 9;
cardsDeck[29].myType = "b";

cardsDeck[30] = new Image();
cardsDeck[30].src = "img/cards/9c.png";
cardsDeck[30].val = 9;
cardsDeck[30].myType = "c";

cardsDeck[31] = new Image();
cardsDeck[31].src = "img/cards/9d.png";
cardsDeck[31].val = 9;
cardsDeck[31].myType = "d";

cardsDeck[32] = new Image();
cardsDeck[32].src = "img/cards/10a.png";
cardsDeck[32].val = 10;
cardsDeck[32].myType = "a";

cardsDeck[33] = new Image();
cardsDeck[33].src = "img/cards/10b.png";
cardsDeck[33].val = 10;
cardsDeck[33].myType = "b";

cardsDeck[34] = new Image();
cardsDeck[34].src = "img/cards/10c.png";
cardsDeck[34].val = 10;
cardsDeck[34].myType = "c";

cardsDeck[35] = new Image();
cardsDeck[35].src = "img/cards/10d.png";
cardsDeck[35].val = 10;
cardsDeck[35].myType = "d";

cardsDeck[36] = new Image();
cardsDeck[36].src = "img/cards/J1.png";
cardsDeck[36].val = 11;
cardsDeck[36].myType = "a";

cardsDeck[37] = new Image();
cardsDeck[37].src = "img/cards/J2.png";
cardsDeck[37].val = 11;
cardsDeck[37].myType = "b";

cardsDeck[38] = new Image();
cardsDeck[38].src = "img/cards/J3.png";
cardsDeck[38].val = 11;
cardsDeck[38].myType = "c";

cardsDeck[39] = new Image();
cardsDeck[39].src = "img/cards/J4.png";
cardsDeck[39].val = 11;
cardsDeck[39].myType = "d";

cardsDeck[40] = new Image();
cardsDeck[40].src = "img/cards/Q1.png";
cardsDeck[40].val = 12;
cardsDeck[40].myType = "a";

cardsDeck[41] = new Image();
cardsDeck[41].src = "img/cards/Q2.png";
cardsDeck[41].val = 12;
cardsDeck[41].myType = "b";

cardsDeck[42] = new Image();
cardsDeck[42].src = "img/cards/Q3.png";
cardsDeck[42].val = 12;
cardsDeck[42].myType = "c";

cardsDeck[43] = new Image();
cardsDeck[43].src = "img/cards/Q4.png";
cardsDeck[43].val = 12;
cardsDeck[43].myType = "d";

cardsDeck[44] = new Image();
cardsDeck[44].src = "img/cards/K1.png";
cardsDeck[44].val = 13;
cardsDeck[44].myType = "a";

cardsDeck[45] = new Image();
cardsDeck[45].src = "img/cards/K2.png";
cardsDeck[45].val = 13;
cardsDeck[45].myType = "b";

cardsDeck[46] = new Image();
cardsDeck[46].src = "img/cards/K3.png";
cardsDeck[46].val = 13;
cardsDeck[46].myType = "c";

cardsDeck[47] = new Image();
cardsDeck[47].src = "img/cards/K4.png";
cardsDeck[47].val = 13;
cardsDeck[47].myType = "d";

cardsDeck[48] = new Image();
cardsDeck[48].src = "img/cards/A1.png";
cardsDeck[48].val = 14;
cardsDeck[48].myType = "a";

cardsDeck[49] = new Image();
cardsDeck[49].src = "img/cards/A2.png";
cardsDeck[49].val = 14;
cardsDeck[49].myType = "b";

cardsDeck[50] = new Image();
cardsDeck[50].src = "img/cards/A3.png";
cardsDeck[50].val = 14;
cardsDeck[50].myType = "c";

cardsDeck[51] = new Image();
cardsDeck[51].src = "img/cards/A4.png";
cardsDeck[51].val = 14;
cardsDeck[51].myType = "d";




// the function that mixed the deck of cards and start a *****NEW GAME******
function mixedTheDeck (){

    // code need to be insert here to clear table

    // shuffle the deck of cards
    cardsDeck.sort(function() { return 0.5 - Math.random() });

    //clean table from the 5 cards in case you start another game from the start
    $("#fiveCards img").attr("src", "");



    // animation of cards dealing, just an animation

    $("#GFX01").show(1);
    $("#GFX01").addClass("effect01");
    $("#GFX01").hide(500);

    setTimeout(now02,250);
    function now02(){
    $("#GFX02").show(1);
    $("#GFX02").addClass("effect02");
    $("#GFX02").hide(700);
    }

    setTimeout(now03,750);
    function now03(){
        $("#GFX03").show(1);
        $("#GFX03").addClass("effect03");
        $("#GFX03").hide(500);
    }

    setTimeout(now04,1000);
    function now04(){
        $("#GFX04").show(1);
        $("#GFX04").addClass("effect04");
        $("#GFX04").hide(700);
    }


    // clearing pictures before the function run so the animation can run without other stuff on the screen
    document.getElementById("userCard01").src = "";
    document.getElementById("userCard02").src = "";
    document.getElementById("block01").src = "";
    document.getElementById("block02").src = "";
    // computer hand
    document.getElementById("computerCard01").src = "";
    document.getElementById("computerCard02").src = "";
    $("#nameUser p").text("");
    $("#nameComputer p").text("");



    // User Hand
    setTimeout(startItUser, 1700);
    function startItUser(){
    document.getElementById("userCard01").src = cardsDeck[0].src;
    document.getElementById("userCard02").src = cardsDeck[1].src;
    $("#nameUser p").text("User");

        // Clearing the Animation
        $("#GFX01").removeClass("effect01");
        $("#GFX02").removeClass("effect02");
        $("#GFX03").removeClass("effect03");
        $("#GFX04").removeClass("effect04");
    }

    // Computer Hand
    setTimeout(startItComputer, 850)
    function startItComputer(){
    // computer block cards (so the user can't see)
    $("#blockCards").show(0);
    document.getElementById("block01").src = "img/cards/b1fv.png";
    document.getElementById("block02").src = "img/cards/b1fv.png";
    // computer hand
    document.getElementById("computerCard01").src = cardsDeck[7].src;
    document.getElementById("computerCard02").src = cardsDeck[8].src;
    // Titles
    $("#nameComputer p").text("Computer");
    $("#userAction02").hide(1);
    $("#userAction03").hide(1);
    $("#userAction04").hide(1);
    $("#userAction01").show(1);
    }

    // reset the score for final calculation of each player
    var computerFinal = 0;
    var userFinal = 0;

    //reset
    clearUser();
    clearComputer();
    clearTotal();


}



// user Check 01
function userCheck01(){
    // need to add if statement (if the computer already did check)
        flopTime();
        $("#userAction01").hide(1);
        $("#userAction02").show(1);
}

// User Check 02
function userCheck02(){
        turnTime();
        $("#userAction02").hide(1);
        $("#userAction03").show(1);
}

// User Check 03
function userCheck03(){
        riverTime();
        $("#userAction03").hide(1);
        $("#userAction04").show(1);
}

// User Check 04
function userCheck04(){
    // the calculation who win the game
    $("#blockCards").hide(1);
    // user action hide
    $("#userAction04").hide(1);

    setTimeout(winner,100);
   // winner(); // FINAL RESULT/////////////////////////////////////////////


}


// User Fold
function userFold(){
    document.getElementById("userCard01").src = "";
    document.getElementById("userCard02").src = "";
    $("#nameUser p").text("");
    document.getElementById("block01").src = "";
    document.getElementById("block02").src = "";
    // computer hand
    document.getElementById("computerCard01").src = "";
    document.getElementById("computerCard02").src = "";
    $("#nameComputer p").text("");
    document.getElementById("slot01img").src = "";
    document.getElementById("slot02img").src = "";
    document.getElementById("slot03img").src = "";
    document.getElementById("slot04img").src = "";
    document.getElementById("slot05img").src = "";

    $("#status").text("A New Game Will Start Automatically").show(1).delay(4500).hide(1);
    setTimeout(mixedTheDeck, 4500);
   // mixedTheDeck();
}

// ALL CARDS FUNCTION ON THE TABLE

function flopTime (){
    //first 3 cards
    $("#slot01img").hide(1);
    $("#slot01img").attr("src", cardsDeck[2].src).show(500);
   // document.getElementById("slot01img").src = cardsDeck[4].src;
    $("#slot02img").hide(1);
    $("#slot02img").attr("src", cardsDeck[3].src).delay(500).show(500);
  //  document.getElementById("slot02img").src = cardsDeck[5].src;
    $("#slot03img").hide(1);
    $("#slot03img").attr("src", cardsDeck[4].src).delay(1000).show(500);
  //  document.getElementById("slot03img").src = cardsDeck[6].src;
    

}


function turnTime (){
    $("#slot04img").hide(1);
    $("#slot04img").attr("src", cardsDeck[5].src).show(500);
  //document.getElementById("slot04img").src = cardsDeck[7].src;
    
}

function riverTime (){
    $("#slot05img").hide(1);
    $("#slot05img").attr("src", cardsDeck[6].src).show(500);
    //document.getElementById("slot05img").src = cardsDeck[8].src;
    
}




