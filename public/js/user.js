/**
 * Created by Gilad on 3/30/2014.
 */
// what cards do we have and how much from each one (user)
var equalTo2 = 0;
var equalTo3 = 0;
var equalTo4 = 0;
var equalTo5 = 0;
var equalTo6 = 0;
var equalTo7 = 0;
var equalTo8 = 0;
var equalTo9 = 0;
var equalTo10 = 0;
var equalTo11 = 0;
var equalTo12 = 0;
var equalTo13 = 0;
var equalTo14 = 0;

var equalToType1 = 0;  // a = Clubs
var equalToType2 = 0;  // b = Spades
var equalToType3 = 0;  // c = Hearts
var equalToType4 = 0;  // d = Diamonds


// final hand (user)
var userRoyalFlush = 0;
var userStraightFlush = 0;
var userFourOfaKind = 0;
var userFullHouse = 0;
var userFlush = 0;
var userStraight = 0;
var userThreeOfaKind = 0;
var userTwoPair = 0;
var userOnePair = 0;
var userHighCard = 0;


// check cards value (user)
function checkUser() {
    for (var i = 0; i < 7; i++) {
        if (cardsDeck[i].val == 2) {
            equalTo2++;
        }
        if (cardsDeck[i].val == 3) {
            equalTo3++;
        }
        if (cardsDeck[i].val == 4) {
            equalTo4++;
        }
        if (cardsDeck[i].val == 5) {
            equalTo5++;
        }
        if (cardsDeck[i].val == 6) {
            equalTo6++;
        }
        if (cardsDeck[i].val == 7) {
            equalTo7++;
        }
        if (cardsDeck[i].val == 8) {
            equalTo8++;
        }
        if (cardsDeck[i].val == 9) {
            equalTo9++;
        }
        if (cardsDeck[i].val == 10) {
            equalTo10++;
        }
        if (cardsDeck[i].val == 11) {
            equalTo11++;
        }
        if (cardsDeck[i].val == 12) {
            equalTo12++;
        }
        if (cardsDeck[i].val == 13) {
            equalTo13++;
        }
        if (cardsDeck[i].val == 14) {
            equalTo14++;
        }
    }
    //CHECK FOR TYPE
    for (var i = 0; i < 7; i++) {
        if (cardsDeck[i].myType == "a") {
            equalToType1++;
        }
        if (cardsDeck[i].myType == "b") {
            equalToType2++;
        }
        if (cardsDeck[i].myType == "c") {
            equalToType3++;
        }
        if (cardsDeck[i].myType == "d") {
            equalToType4++;
        }
    }

}


// function for each rank of hand

function royalFlushUser(){
    for (var i = 0; i < 7; i++) {
        if ( (cardsDeck[i].val == 11) && (cardsDeck[i].val == 12) && (cardsDeck[i].val == 13) && (cardsDeck[i].val == 14)
            && (cardsDeck[0].myType && cardsDeck[1].myType && cardsDeck[2].myType && cardsDeck[3].myType && cardsDeck[4].myType && cardsDeck[5].myType && cardsDeck[6].myType == "a")
            ||
            (cardsDeck[i].val == 11) && (cardsDeck[i].val == 12) && (cardsDeck[i].val == 13) && (cardsDeck[i].val == 14)
            && (cardsDeck[0].myType && cardsDeck[1].myType && cardsDeck[2].myType && cardsDeck[3].myType && cardsDeck[4].myType && cardsDeck[5].myType && cardsDeck[6].myType == "b")
            ||
            (cardsDeck[i].val == 11) && (cardsDeck[i].val == 12) && (cardsDeck[i].val == 13) && (cardsDeck[i].val == 14)
            && (cardsDeck[0].myType && cardsDeck[1].myType && cardsDeck[2].myType && cardsDeck[3].myType && cardsDeck[4].myType && cardsDeck[5].myType && cardsDeck[6].myType == "c")
            ||
            (cardsDeck[i].val == 11) && (cardsDeck[i].val == 12) && (cardsDeck[i].val == 13) && (cardsDeck[i].val == 14)
            && (cardsDeck[0].myType && cardsDeck[1].myType && cardsDeck[2].myType && cardsDeck[3].myType && cardsDeck[4].myType && cardsDeck[5].myType && cardsDeck[6].myType == "d")){
            userRoyalFlush = 1;
        }
    }
}


function straightFlush() {
    for (var i = 0; i < 7; i++) {
        if (( (equalToType1 == 5) || (equalToType2 == 5) || (equalToType3 == 5) || (equalToType4 == 5) )
            && (equalTo2 && equalTo3 && equalTo4 && equalTo5 && equalTo6 && equalTo7 && equalTo8 == 1)) {
            userStraightFlush = 1;
        } else if (( (equalToType1 == 5) || (equalToType2 == 5) || (equalToType3 == 5) || (equalToType4 == 5) )
            && (equalTo3 && equalTo4 && equalTo5 && equalTo6 && equalTo7 && equalTo8 && equalTo9 == 1)) {
            userStraightFlush = 1;
        } else if (( (equalToType1 == 5) || (equalToType2 == 5) || (equalToType3 == 5) || (equalToType4 == 5) )
            && (equalTo4 && equalTo5 && equalTo6 && equalTo7 && equalTo8 && equalTo9 && equalTo10 == 1)) {
            userStraightFlush = 1;
        } else if (( (equalToType1 == 5) || (equalToType2 == 5) || (equalToType3 == 5) || (equalToType4 == 5) )
            && (equalTo5 && equalTo6 && equalTo7 && equalTo8 && equalTo9 && equalTo10 && equalTo11 == 1)) {
            userStraightFlush = 1;
        } else if (( (equalToType1 == 5) || (equalToType2 == 5) || (equalToType3 == 5) || (equalToType4 == 5) )
            && (equalTo6 && equalTo7 && equalTo8 && equalTo9 && equalTo10 && equalTo11 && equalTo12 == 1)) {
            userStraightFlush = 1;
        } else if (( (equalToType1 == 5) || (equalToType2 == 5) || (equalToType3 == 5) || (equalToType4 == 5) )
            && (equalTo7 && equalTo8 && equalTo9 && equalTo10 && equalTo11 && equalTo12 && equalTo13 == 1)) {
            userStraightFlush = 1;
        } else if (( (equalToType1 == 5) || (equalToType2 == 5) || (equalToType3 == 5) || (equalToType4 == 5) )
            && (equalTo14 && equalTo2 && equalTo3 && equalTo4 && equalTo5 && equalTo6 && equalTo7 == 1)) {
            userStraightFlush = 1;
        }
    }
}

function fourOfaKind(){
        if( (equalTo2 == 4) || (equalTo3 == 4) || (equalTo4 == 4) || (equalTo5 == 4)
            || (equalTo6 == 4) || (equalTo7 == 4) || (equalTo8 == 4) || (equalTo9 == 4)
            || (equalTo10 == 4) || (equalTo11 == 4) || (equalTo12 == 4) || (equalTo13 == 4)
            || (equalTo14 == 4) ){
            userFourOfaKind = 1;
            }
}

function fullHouse(){
        if(  ((equalTo2 == 3) || (equalTo3 == 3) || (equalTo4 == 3) || (equalTo5 == 3)
            || (equalTo6 == 3) || (equalTo7 == 3) || (equalTo8 == 3) || (equalTo9 == 3)
            || (equalTo10 == 3) || (equalTo11 == 3) || (equalTo12 == 3) || (equalTo13 == 3)
            || (equalTo14 == 3))
            &&
            ((equalTo2 == 2) || (equalTo3 == 2) || (equalTo4 == 2) || (equalTo5 == 2)
            || (equalTo6 == 2) || (equalTo7 == 2) || (equalTo8 == 2) || (equalTo9 == 2)
            || (equalTo10 == 2) || (equalTo11 == 2) || (equalTo12 == 2) || (equalTo13 == 2)
            || (equalTo14 == 2)) ){
            userFullHouse = 1;
    }
}


function flush(){
        if( (equalToType1 == 5) || (equalToType2 == 5) || (equalToType3 == 5) || (equalToType4 == 5) ){
            userFlush = 1;
    }
}


function straight(){
    if(equalTo2 && equalTo3 && equalTo4 && equalTo5 && equalTo6 && equalTo7 && equalTo8 == 1){
        userStraight = 1;
    } else if (equalTo3 && equalTo4 && equalTo5 && equalTo6 && equalTo7 && equalTo8 && equalTo9 == 1){
        userStraight = 1;
    } else if (equalTo4 && equalTo5 && equalTo6 && equalTo7 && equalTo8 && equalTo9 && equalTo10 == 1){
        userStraight = 1;
    } else if (equalTo5 && equalTo6 && equalTo7 && equalTo8 && equalTo9 && equalTo10 && equalTo11 == 1){
        userStraight = 1;
    } else if (equalTo6 && equalTo7 && equalTo8 && equalTo9 && equalTo10 && equalTo11 && equalTo12 == 1){
        userStraight = 1;
    } else if (equalTo7 && equalTo8 && equalTo9 && equalTo10 && equalTo11 && equalTo12 && equalTo13 == 1){
        userStraight = 1;
    } else if (equalTo14 && equalTo2 && equalTo3 && equalTo4 && equalTo5 && equalTo6 && equalTo7 == 1){
        userStraight = 1;
    }

}


function threeOfaKind(){
    if( (equalTo2 == 3) || (equalTo3 == 3) || (equalTo4 == 3) || (equalTo5 == 3)
        || (equalTo6 == 3) || (equalTo7 == 3) || (equalTo8 == 3) || (equalTo9 == 3)
        || (equalTo10 == 3) || (equalTo11 == 3) || (equalTo12 == 3) || (equalTo13 == 3)
        || (equalTo14 == 3) ){
            userThreeOfaKind = 1;
        }
}


function twoPair(){
    var userCountPairs = 0;

    if (equalTo2 == 2){
        userCountPairs++;
        }
    if (equalTo3 == 2){
        userCountPairs++;
    }
    if (equalTo4 == 2){
        userCountPairs++;
    }
    if (equalTo5 == 2){
        userCountPairs++;
    }
    if (equalTo6 == 2){
        userCountPairs++;
    }
    if (equalTo7 == 2){
        userCountPairs++;
    }
    if (equalTo8 == 2){
        userCountPairs++;
    }
    if (equalTo9 == 2){
        userCountPairs++;
    }
    if (equalTo10 == 2){
        userCountPairs++;
    }
    if (equalTo11 == 2){
        userCountPairs++;
    }
    if (equalTo12 == 2){
        userCountPairs++;
    }
    if (equalTo13 == 2){
        userCountPairs++;
    }
    if (equalTo14 == 2){
        userCountPairs++;
    }
    // check how many pairs we have
    if (userCountPairs == 2){
        userTwoPair = 1;
    } else {
        userTwoPair = 0;
    }
}



function onePair(){
    if( (equalTo2 == 2) || (equalTo3 == 2) || (equalTo4 == 2) || (equalTo5 == 2)
        || (equalTo6 == 2) || (equalTo7 == 2) || (equalTo8 == 2) || (equalTo9 == 2)
        || (equalTo10 == 2) || (equalTo11 == 2) || (equalTo12 == 2) || (equalTo13 == 2)
        || (equalTo14 == 2) ){
            userOnePair = 1;
        }
}

function highCard(){
    userHighCard = cardsDeck[0].val + cardsDeck[1].val;
}


function clearUser(){
    equalTo2 = 0;
    equalTo3 = 0;
    equalTo4 = 0;
    equalTo5 = 0;
    equalTo6 = 0;
    equalTo7 = 0;
    equalTo8 = 0;
    equalTo9 = 0;
    equalTo10 = 0;
    equalTo11 = 0;
    equalTo12 = 0;
    equalTo13 = 0;
    equalTo14 = 0;

    equalToType1 = 0;  // a = Clubs
    equalToType2 = 0;  // b = Spades
    equalToType3 = 0;  // c = Hearts
    equalToType4 = 0;  // d = Diamonds

    userRoyalFlush = 0;
    userStraightFlush = 0;
    userFourOfaKind = 0;
    userFullHouse = 0;
    userFlush = 0;
    userStraight = 0;
    userThreeOfaKind = 0;
    userTwoPair = 0;
    userOnePair = 0;
    userHighCard = 0;
}