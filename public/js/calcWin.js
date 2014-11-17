// WHO WIN
function winner () {

    //*******************************  USER  *************************************************************

    checkUser();  // engine



    royalFlushUser();

    straightFlush();

    fourOfaKind();

    fullHouse();

    flush();

    straight();

    threeOfaKind();

    twoPair();

    onePair();

    highCard();


    //*****************************COMPUTER************************************************

    checkComputer();  // engine



    royalFlushComputer();

    straightFlushComputer();

    fourOfaKindComputer();

    fullHouseComputer();

    flushComputer();

    straightComputer();

    threeOfaKindComputer();

    twoPairComputer();

    onePairComputer();

    highCardComputer();


///////// after all function as loaded, now the check for who win /////////////////////
    var statusUserText = "nothing";
    var statusComputerText = "nothing";

    // checking Royal Flush
    if (userRoyalFlush > computerRoyalFlush){
        userHandTotal = 1;
        computerHandTotal = 0;
        statusUserText = "Royal Flush";
    } else if (userRoyalFlush < computerRoyalFlush) {
        userHandTotal = 0;
        computerHandTotal = 1;
        statusComputerText = "Royal Flush";
    }

    // checking Straight Flush
    else if (userStraightFlush > computerStraightFlush){
        userHandTotal = 1;
        computerHandTotal = 0;
        statusUserText = "Straight Flush";
    } else if (userStraightFlush < computerStraightFlush){
        userHandTotal = 0;
        computerHandTotal = 1;
        statusComputerText = "Straight Flush";
    }

    // checking Four-of-a-Kind (Quads)
    else if (userFourOfaKind > computerFourOfaKind){
        userHandTotal = 1;
        computerHandTotal = 0;
        statusUserText = "Four-of-a-Kind";
    } else if (userFourOfaKind < computerFourOfaKind){
        userHandTotal = 0;
        computerHandTotal = 1;
        statusComputerText = "Four-of-a-Kind";
    }

    // checking Full House
    else if (userFullHouse > computerFullHouse){
        userHandTotal = 1;
        computerHandTotal = 0;
        statusUserText = "Full House";
    } else if (userFullHouse < computerFullHouse){
        userHandTotal = 0;
        computerHandTotal = 1;
        statusComputerText = "Full House";
    }

    // checking Flush
    else if (userFlush > computerFlush){
        userHandTotal = 1;
        computerHandTotal = 0;
        statusUserText = "Flush";
    } else if (userFlush < computerFlush){
        userHandTotal = 0;
        computerHandTotal = 1;
        statusComputerText = "Flush";
    }

    // checking Straight
    else if (userStraight > computerStraight){
        userHandTotal = 1;
        computerHandTotal = 0;
        statusUserText = "Straight";
    } else if (userStraight < computerStraight){
        userHandTotal = 0;
        computerHandTotal = 1;
        statusComputerText = "Straight";
    }

    // checking Three-of-a-Kind
    else if (userThreeOfaKind > computerThreeOfaKind){
        userHandTotal = 1;
        computerHandTotal = 0;
        statusUserText = "Three-of-a-Kind";
    } else if (userThreeOfaKind < computerThreeOfaKind){
        userHandTotal = 0;
        computerHandTotal = 1;
        statusComputerText = "Three-of-a-Kind";
    }

    // checking Two-Pair
    else if (userTwoPair > computerTwoPair){
        userHandTotal = 1;
        computerHandTotal = 0;
        statusUserText = "Two-Pair";
    } else if (userTwoPair < computerTwoPair){
        userHandTotal = 0;
        computerHandTotal = 1;
        statusComputerText = "Two-Pair";
    }

    // checking One-Pair
    else if (userOnePair > computerOnePair){
        userHandTotal = 1;
        computerHandTotal = 0;
        statusUserText = "One-Pair";
    } else if (userOnePair < computerOnePair){
        userHandTotal = 0;
        computerHandTotal = 1;
        statusComputerText = "One-Pair";
    }

    // checking High Card
    else if (userHighCard > computerHighCard){
        userHandTotal = 1;
        computerHandTotal = 0;
        statusUserText = "High Card";
    } else if (userHighCard < computerHighCard){
        userHandTotal = 0;
        computerHandTotal = 1;
        statusComputerText = "High Card";
    } else {
        alert("no one win this round");
    }




    // Winner get the final point

    //User Win
    if (userHandTotal > computerHandTotal) {
        x++;
        $("#userScore").text(x);
        alert("User Have " + statusUserText + " and Win This Round");

    //Computer Win
    } else if (userHandTotal < computerHandTotal) {
        y++;
        $("#computerScore").text(y);
        alert("Computer Have " + statusComputerText + " and Win This Round");
    }

    // No One Win this round
    else if (userHandTotal == computerHandTotal) {
    alert("No One Win This Round");
}

    // also check if x > = < y (change color to green or red for the score)
    if (x > y) {
        $("#userScore").css("color", "green");
        $("#computerScore").css("color", "brown");
    }
    if (y > x) {
        $("#computerScore").css("color", "green");
        $("#userScore").css("color", "brown");
    }
    if (y == x) {
        $("#computerScore").css("color", "green");
        $("#userScore").css("color", "green");
    }





}

function clearTotal(){
    userHandTotal = 0;
    computerHandTotal = 0;
}