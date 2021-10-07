// initialize & set variables
let player = {
    name: "Evelyn",
    chips: 200
}
let cards = [];
let sum = 0;
let isAlive = false;
let hasBlackJack = false;
let message = "";

// Elements
let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = `${player.name} : $${player.chips}`

// ======================= Functions =======================

// Outputs random card from 1 - 13 
function getRandomCard() {
    let randomNum =  Math.floor(Math.random() * 13) + 1;

    if ( randomNum === 1) {
        return 11
    } else if ( randomNum > 10) {
        return 10
    } else {
        return randomNum
    }
}

// sets the game and calls on the logic
function startGame() {
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    isAlive = true;

    renderGame();
}

// Loops through the cards array and depending on the sum of the cards determines if you win, lose or keep playing.
function renderGame() {
    cardsEl.textContent = "Cards: ";
    // loop through the array of cards
    for( let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum;

    if ( sum <= 20 ) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21 ) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "Sorry, you lose!";
        isAlive = false;
    }
    messageEl.textContent = message;
}

//  newCard()
function newCard() {
    if( isAlive === true && hasBlackJack === false ) {
        let card = getRandomCard();
        sum += card
        cards.push(card)
        renderGame()
    }
}






// RULES:
    //  21 === "Blackjack!"
    //  < 21 === "new card"
    // > 21 === "lose"