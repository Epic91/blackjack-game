// initialize & set variables
let player = {
    name: "Evelyn",
    chips: 200
}
let cards = 0;
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

// getRandom()
function getRandomCard() {
    let randomNum =  Math.floor(Math.random() * 13) + 1;

    // Conditional:
    if ( randomNum === 1) {
        return 11
    } else if ( randomNum > 10) {
        return 10
    } else {
        return randomNum
    }
}

// stargame()
function startGame() {
    let firstCard = getRandomCard();
}
    // create firstCard and secondCard


//  newCard()






// RULES:
    //  21 === "Blackjack!"
    //  < 21 === "new card"
    // > 21 === "lose"