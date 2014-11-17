// what cards do we have and how much from each one (computer)
var compEqualTo2 = 0;
var compEqualTo3 = 0;
var compEqualTo4 = 0;
var compEqualTo5 = 0;
var compEqualTo6 = 0;
var compEqualTo7 = 0;
var compEqualTo8 = 0;
var compEqualTo9 = 0;
var compEqualTo10 = 0;
var compEqualTo11 = 0;
var compEqualTo12 = 0;
var compEqualTo13 = 0;
var compEqualTo14 = 0;

var compEqualToType1 = 0;  // a = Clubs
var compEqualToType2 = 0;  // b = Spades
var compEqualToType3 = 0;  // c = Hearts
var compEqualToType4 = 0;  // d = Diamonds


// final hand (user)
var computerRoyalFlush = 0;
var computerStraightFlush = 0;
var computerFourOfaKind = 0;
var computerFullHouse = 0;
var computerFlush = 0;
var computerStraight = 0;
var computerThreeOfaKind = 0;
var computerTwoPair = 0;
var computerOnePair = 0;
var computerHighCard = 0;

//

// check cards value (user)
function checkComputer() {
    for (var i = 2; i < 9; i++) {
        if (cardsDeck[i].val == 2) {
            compEqualTo2++;
        }
        if (cardsDeck[i].val == 3) {
            compEqualTo3++;
        }
        if (cardsDeck[i].val == 4) {
            compEqualTo4++;
        }
        if (cardsDeck[i].val == 5) {
            compEqualTo5++;
        }
        if (cardsDeck[i].val == 6) {
            compEqualTo6++;
        }
        if (cardsDeck[i].val == 7) {
            compEqualTo7++;
        }
        if (cardsDeck[i].val == 8) {
            compEqualTo8++;
        }
        if (cardsDeck[i].val == 9) {
            compEqualTo9++;
        }
        if (cardsDeck[i].val == 10) {
            compEqualTo10++;
        }
        if (cardsDeck[i].val == 11) {
            compEqualTo11++;
        }
        if (cardsDeck[i].val == 12) {
            compEqualTo12++;
        }
        if (cardsDeck[i].val == 13) {
            compEqualTo13++;
        }
        if (cardsDeck[i].val == 14) {
            compEqualTo14++;
        }
    }
    //CHECK FOR TYPE
    for (var i = 2; i < 9; i++) {
        if (cardsDeck[i].myType == "a") {
            compEqualToType1++;
        }
        if (cardsDeck[i].myType == "b") {
            compEqualToType2++;
        }
        if (cardsDeck[i].myType == "c") {
            compEqualToType3++;
        }
        if (cardsDeck[i].myType == "d") {
            compEqualToType4++;
        }
    }

}


// function for each rank of hand

function royalFlushComputer(){
    for (var i = 2; i < 9; i++) {
        if ( (cardsDeck[i].val == 11) && (cardsDeck[i].val == 12) && (cardsDeck[i].val == 13) && (cardsDeck[i].val == 14)
            && (cardsDeck[2].myType && cardsDeck[3].myType && cardsDeck[4].myType && cardsDeck[5].myType && cardsDeck[6].myType && cardsDeck[7].myType && cardsDeck[8].myType == "a")
            ||
            (cardsDeck[i].val == 11) && (cardsDeck[i].val == 12) && (cardsDeck[i].val == 13) && (cardsDeck[i].val == 14)
            && (cardsDeck[2].myType && cardsDeck[3].myType && cardsDeck[4].myType && cardsDeck[5].myType && cardsDeck[6].myType && cardsDeck[7].myType && cardsDeck[8].myType == "b")
            ||
            (cardsDeck[i].val == 11) && (cardsDeck[i].val == 12) && (cardsDeck[i].val == 13) && (cardsDeck[i].val == 14)
            && (cardsDeck[2].myType && cardsDeck[3].myType && cardsDeck[4].myType && cardsDeck[5].myType && cardsDeck[6].myType && cardsDeck[7].myType && cardsDeck[8].myType == "c")
            ||
            (cardsDeck[i].val == 11) && (cardsDeck[i].val == 12) && (cardsDeck[i].val == 13) && (cardsDeck[i].val == 14)
            && (cardsDeck[2].myType && cardsDeck[3].myType && cardsDeck[4].myType && cardsDeck[5].myType && cardsDeck[6].myType && cardsDeck[7].myType && cardsDeck[8].myType == "d")){
            computerRoyalFlush = 1;
        }
    }
}

function straightFlushComputer() {
    for (var i = 0; i < 7; i++) {
        if (( (compEqualToType1 == 5) || (compEqualToType2 == 5) || (compEqualToType3 == 5) || (compEqualToType4 == 5) )
            && (compEqualTo2 && compEqualTo3 && compEqualTo4 && compEqualTo5 && compEqualTo6 && compEqualTo7 && compEqualTo8 == 1)) {
            computerStraightFlush = 1;
        } else if (( (compEqualToType1 == 5) || (compEqualToType2 == 5) || (compEqualToType3 == 5) || (compEqualToType4 == 5) )
            && (compEqualTo3 && compEqualTo4 && compEqualTo5 && compEqualTo6 && compEqualTo7 && compEqualTo8 && compEqualTo9 == 1)) {
            computerStraightFlush = 1;
        } else if (( (compEqualToType1 == 5) || (compEqualToType2 == 5) || (compEqualToType3 == 5) || (compEqualToType4 == 5) )
            && (compEqualTo4 && compEqualTo5 && compEqualTo6 && compEqualTo7 && compEqualTo8 && compEqualTo9 && compEqualTo10 == 1)) {
            computerStraightFlush = 1;
        } else if (( (compEqualToType1 == 5) || (compEqualToType2 == 5) || (compEqualToType3 == 5) || (compEqualToType4 == 5) )
            && (compEqualTo5 && compEqualTo6 && compEqualTo7 && compEqualTo8 && compEqualTo9 && compEqualTo10 && compEqualTo11 == 1)) {
            computerStraightFlush = 1;
        } else if (( (compEqualToType1 == 5) || (compEqualToType2 == 5) || (compEqualToType3 == 5) || (compEqualToType4 == 5) )
            && (compEqualTo6 && compEqualTo7 && compEqualTo8 && compEqualTo9 && compEqualTo10 && compEqualTo11 && compEqualTo12 == 1)) {
            computerStraightFlush = 1;
        } else if (( (compEqualToType1 == 5) || (compEqualToType2 == 5) || (compEqualToType3 == 5) || (compEqualToType4 == 5) )
            && (compEqualTo7 && compEqualTo8 && compEqualTo9 && compEqualTo10 && compEqualTo11 && compEqualTo12 && compEqualTo13 == 1)) {
            computerStraightFlush = 1;
        } else if (( (compEqualToType1 == 5) || (compEqualToType2 == 5) || (compEqualToType3 == 5) || (compEqualToType4 == 5) )
            && (compEqualTo14 && compEqualTo2 && compEqualTo3 && compEqualTo4 && compEqualTo5 && compEqualTo6 && compEqualTo7 == 1)) {
            computerStraightFlush = 1;
        }
    }
}

function fourOfaKindComputer(){
    if( (compEqualTo2 == 4) || (compEqualTo3 == 4) || (compEqualTo4 == 4) || (compEqualTo5 == 4)
        || (compEqualTo6 == 4) || (compEqualTo7 == 4) || (compEqualTo8 == 4) || (compEqualTo9 == 4)
        || (compEqualTo10 == 4) || (compEqualTo11 == 4) || (compEqualTo12 == 4) || (compEqualTo13 == 4)
        || (compEqualTo14 == 4) ){
        computerFourOfaKind = 1;
    }
}

function fullHouseComputer(){
    if(  ((compEqualTo2 == 3) || (compEqualTo3 == 3) || (compEqualTo4 == 3) || (compEqualTo5 == 3)
        || (compEqualTo6 == 3) || (compEqualTo7 == 3) || (compEqualTo8 == 3) || (compEqualTo9 == 3)
        || (compEqualTo10 == 3) || (compEqualTo11 == 3) || (compEqualTo12 == 3) || (compEqualTo13 == 3)
        || (compEqualTo14 == 3))
        &&
        ((compEqualTo2 == 2) || (compEqualTo3 == 2) || (compEqualTo4 == 2) || (compEqualTo5 == 2)
            || (compEqualTo6 == 2) || (compEqualTo7 == 2) || (compEqualTo8 == 2) || (compEqualTo9 == 2)
            || (compEqualTo10 == 2) || (compEqualTo11 == 2) || (compEqualTo12 == 2) || (compEqualTo13 == 2)
            || (compEqualTo14 == 2)) ){
        computerFullHouse = 1;
    }
}


function flushComputer(){
    if( (compEqualToType1 == 5) || (compEqualToType2 == 5) || (compEqualToType3 == 5) || (compEqualToType4 == 5) ){
        computerFlush = 1;
    }
}
function straightComputer(){
    if(compEqualTo2 && compEqualTo3 && compEqualTo4 && compEqualTo5 && compEqualTo6 && compEqualTo7 && compEqualTo8 == 1){
        computerStraight = 1;
    } else if (compEqualTo3 && compEqualTo4 && compEqualTo5 && compEqualTo6 && compEqualTo7 && compEqualTo8 && compEqualTo9 == 1){
        computerStraight = 1;
    } else if  (compEqualTo4 && compEqualTo5 && compEqualTo6 && compEqualTo7 && compEqualTo8 && compEqualTo9 && compEqualTo10 == 1){
        computerStraight = 1;
    } else if (compEqualTo5 && compEqualTo6 && compEqualTo7 && compEqualTo8 && compEqualTo9 && compEqualTo10 && compEqualTo11 == 1){
        computerStraight = 1;
    } else if (compEqualTo6 && compEqualTo7 && compEqualTo8 && compEqualTo9 && compEqualTo10 && compEqualTo11 && compEqualTo12 == 1){
        computerStraight = 1;
    } else if (compEqualTo7 && compEqualTo8 && compEqualTo9 && compEqualTo10 && compEqualTo11 && compEqualTo12 && compEqualTo13 == 1){
        computerStraight = 1;
    } else if (compEqualTo14 && compEqualTo2 && compEqualTo3 && compEqualTo4 && compEqualTo5 && compEqualTo6 && compEqualTo7 == 1){
        computerStraight = 1;
    }

}

function threeOfaKindComputer(){
    if( (compEqualTo2 == 3) || (compEqualTo3 == 3) || (compEqualTo4 == 3) || (compEqualTo5 == 3)
        || (compEqualTo6 == 3) || (compEqualTo7 == 3) || (compEqualTo8 == 3) || (compEqualTo9 == 3)
        || (compEqualTo10 == 3) || (compEqualTo11 == 3) || (compEqualTo12 == 3) || (compEqualTo13 == 3)
        || (compEqualTo14 == 3) ){
        computerThreeOfaKind = 1;
    }
}

function twoPairComputer(){
    var computerCountPairs = 0;

    if (compEqualTo2 == 2){
        computerCountPairs++;
    }
    if (compEqualTo3 == 2){
        computerCountPairs++;
    }
    if (compEqualTo4 == 2){
        computerCountPairs++;
    }
    if (compEqualTo5 == 2){
        computerCountPairs++;
    }
    if (compEqualTo6 == 2){
        computerCountPairs++;
    }
    if (compEqualTo7 == 2){
        computerCountPairs++;
    }
    if (compEqualTo8 == 2){
        computerCountPairs++;
    }
    if (compEqualTo9 == 2){
        computerCountPairs++;
    }
    if (compEqualTo10 == 2){
        computerCountPairs++;
    }
    if (compEqualTo11 == 2){
        computerCountPairs++;
    }
    if (compEqualTo12 == 2){
        computerCountPairs++;
    }
    if (compEqualTo13 == 2){
        computerCountPairs++;
    }
    if (compEqualTo14 == 2){
        computerCountPairs++;
    }
    // check how many pairs we have
    if (computerCountPairs == 2){
        computerTwoPair = 1;
    } else {
        computerTwoPair = 0;
    }
}

function onePairComputer(){
    if( (compEqualTo2 == 2) || (compEqualTo3 == 2) || (compEqualTo4 == 2) || (compEqualTo5 == 2)
        || (compEqualTo6 == 2) || (compEqualTo7 == 2) || (compEqualTo8 == 2) || (compEqualTo9 == 2)
        || (compEqualTo10 == 2) || (compEqualTo11 == 2) || (compEqualTo12 == 2) || (compEqualTo13 == 2)
        || (compEqualTo14 == 2) ){
        computerOnePair = 1;
    }
}

function highCardComputer() {
    computerHighCard = cardsDeck[7].val + cardsDeck[8].val;
}

function clearComputer(){
     compEqualTo2 = 0;
     compEqualTo3 = 0;
     compEqualTo4 = 0;
     compEqualTo5 = 0;
     compEqualTo6 = 0;
     compEqualTo7 = 0;
     compEqualTo8 = 0;
     compEqualTo9 = 0;
     compEqualTo10 = 0;
     compEqualTo11 = 0;
     compEqualTo12 = 0;
     compEqualTo13 = 0;
     compEqualTo14 = 0;

     compEqualToType1 = 0;  // a = Clubs
     compEqualToType2 = 0;  // b = Spades
     compEqualToType3 = 0;  // c = Hearts
     compEqualToType4 = 0;  // d = Diamonds


     computerRoyalFlush = 0;
     computerStraightFlush = 0;
     computerFourOfaKind = 0;
     computerFullHouse = 0;
     computerFlush = 0;
     computerStraight = 0;
     computerThreeOfaKind = 0;
     computerTwoPair = 0;
     computerOnePair = 0;
     computerHighCard = 0;
}