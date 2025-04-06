// Deal 26 Cards to each Player from a Deck of 52 cards.
//Iterate through the turns where each Player plays a Card.
//The Player who played the higher card is awarded a point.
//-Ties result in zero points for both Players.
//After all cards have been played, display the score and declare the winner.//

class Deck {
    constructor() {
        this.deck = [];
        this.ranks =[
            "ACE",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "Jack",
            "Queen",
            "King",
        ];
        this.suits = ["Hearts", "Diamonds", "Spades","Clubs" ]
    }

 createDeck() {
    for (let i = 0; i < this.suits.length; i++) {
        for(let j = 0; j < this.ranks.length; j++) {
            let card = {
                    name: `${this.ranks[j]} of ${this.suits[i]}`,
                    value: j + 1
            }
            this.deck.push(card)

            console.log(card)
        }
    }
 }

  shuffleDeck() {
    for (let i = this.deck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [this.deck[i], this.deck[j]] = [this.deck[j], this.deck [i]];
    }
  }

}
// instantiate a new deck inside our game
// be able to create, shuffle, and pass deck
// add 2 players with a place to keep score, hand , ID of player (whos turn is it)


class Game{
    constructor(){ 
        this.player1 = {
            name: 'Player 1',
            score: 0,
            hand: []
        }
        this.player2 = {
            name: 'Player 2',
            score: 0,
            hand: []
        }    
   }
 //pass out cards to players
 // how many turns depending on number of cards
 //points
 // log winner

 playGame(){
    // instatiate a new deck, create, then shuffle deck
    const deck = new Deck
    deck.createDeck()
    deck.shuffleDeck()

    while (deck.deck.length !== 0) {
        this.player1.hand.push(deck.deck.shift())
        this.player2.hand.push(deck.deck.shift())
    }
    console.log(this.player1.hand)
    console.log(this.player2.hand)

// what happens at game
 // turns

 for (let i = 0; i < this.player1.hand.length; i++){
    if(this.player1.hand[i].value> this.player2.hand[i].value) {
        this.player1.score ++
        console.log(`
         P1 Card: ${this.player1.hand[i].name}
         P2 Card: ${this.player2.hand[i].name}
         Player 1 wins!
         current Score: p1: ${this.player1.score}, p2: ${this.player2.score}
        `)
    } else if (this.player2.hand[i].value > this.player1.hand[i].value) {
       this.player2.score ++
       console.log(`
         P1 Card: ${this.player1.hand[i].name}
         P2 Card: ${this.player2.hand[i].name}
         Player 2 wins!
         current Score: p1: ${this.player1.score}, p2: ${this.player2.score}
        `)
    } else {
        console.log(`
         P1 Card: ${this.player1.hand[i].name}
         P2 Card: ${this.player2.hand[i].name}
         TIE! no points!
         current Score: p1: ${this.player1.score}, p2: ${this.player2.score}
         `)
    }
 }

 if (this.player1.score > this.player2.score){
    console.log(` Player 1 Wins!
        Final Score:    P1: ${this.player1.score}
                                P2: ${this.player2.score}
    `)
 } else if (this.player2.score > this.player1.score){
    console.log(`player 2 Wins!
        Final Score:    P1: ${this.player1.score}
                                P2: ${this.player2.score}
        `)
 } else {
    console.log('TIE!')
 }

 }
}
const game = new Game
game.playGame()








