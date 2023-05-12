/*This final JavaScript project is an automated version of the classic card game WAR.  
- As a part of this assignment, you will also be asked to consider:
-- Creating classes such as Card, Deck & Player
-- Keeping in mind what fields and methods each class might have.

- The completed project will do the following:

-- Deal 26 Cards to 2 Players from a Deck
-- Iterate through the turns where each Player plays a Card
--- Award a point to the Player with the higher Card
--- Ties result in zero points for both Players
-- After all cards have been played, display the score and declare the winner.

- Finally, you will be asked to write a Unit Test using Mocha and Chai for at least one of your functions // using class Card constructor to contain the suit, rank, and value of each card in the deck*/



// card object
class Card {
    constructor(suit, rank, value){
        this.suit = suit;
        this.rank = rank;
        this.value = value;
    }       
}

// player object with an empty array for the deck and score
class Player {
    constructor() {
        this.playerDeck = [];
        this.playerScore = 0;
        
    }
    // show the player score
    showScore() {
        return this.playerScore;
    }
}

// deck object with a main deck array to push the new cards
// a player 1 & 2 array to deal the deck to
class Deck {
    constructor() {
        this.mainDeck = [];
        this.player1Cards = [];
        this.player2Cards = [];
    }
     
    // create the deck using suits and ranks arrays
    // iterate over the rank arrays length and the suit arrays length
    // push each new card instance to the mainDeck
    // the new Card will push the suit at the index, the rank at the index, and the index of the rank
    //     to create 52 cards with a suit, rank, value 
    createDeck() {
        let suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs']
        //let ranks = {'2' : 2, '3': 3, '4': 4, '5' : 5, '6':6, '7':7, '8': 8, '9': 9, '10': 10, 'Jack': 11, 'Queen': 12, 'King': 13, 'Ace': 14}
        let ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace']
        for (let i = 0; i < suits.length; i++) {
             for (let j = 0; j < ranks.length; j++) {                    
                this.mainDeck.push(new Card(suits[i], ranks[j], j+2));
            } 
        }            
    }

    // shuffle the cards method
    // iterate over the mainDeck arrays length
    shuffle() {
        for (let i = 0; i < this.mainDeck.length; i++) {
            // create a temporary place to hold the card to switch
            let tempPlaceHold = this.mainDeck[i]; 
            // searched for how to choose random number and copy/pasted it in (need #btwn 0-52)
            // made this random number chooser a variable so I can use it later in function
            // Took a card at a random index from the deck and a card from the deck
            //   and switched the two cards based on the index
            //Honestly, I am not sure if that is a correct explanation.(But it the code works!)
            let randomCardAtIndex = Math.floor(Math.random() * i);
            this.mainDeck[i] = this.mainDeck[randomCardAtIndex];
            this.mainDeck[randomCardAtIndex] = tempPlaceHold;
            }            
    } 
    
    // deal method to deal to the player decks(26 cards)
    deal() {
        // slice the deck and give 1st half to p1 and 2nd half to p2
        this.player1Cards = this.mainDeck.slice(0, 26);
        this.player2Cards = this.mainDeck.slice(26, 52); 
            
        
        // log player1 cards and player 2 cards for my own check
        // console.log('Player 1 Cards', this.player1Cards);
        // console.log('Player 2 Cards', this.player2Cards);
    } 

    // for my own check later
    // show the player 1 top card
    showTopCard () {
        console.log(this.player1Cards)
    }   
    
    // for my own check later
    // method to show the players cards
//     showCards() {
//         for (let i = 0; i < this.player1Cards.length; i++) {
//             console.log(this.player1Cards[i]);
//         }
//         for (let i = 0; i < this.player2Cards.length; i++) {
//             console.log(this.player2Cards[i]);
//         }

//     }
}                                  

// check for myself to instantiate the Deck class: create, shuffle
// let myDeck = new Deck();
// myDeck.createDeck();
// myDeck.shuffle();
// //myDeck.deal();
// console.log(myDeck);

/* Now to play the game! 
   create a game class 
   instantiate Deck class
   instantiate Player class...to allow the methods in those classes to be called.*/
class Game {
    constructor () {
        this.deck = new Deck();
        this.player1Card;
        this.player2Card;
        this.p1 = new Player();
        this.p2 = new Player();
    }
    
    // start game method with player 1 and player 2 params
    // create the deck
    // shuffle the deck
    // deal the deck
    // play rounds
    startGame(player1, player2) {
        //console.log(this.deck)   Note to self: come back to this and see why the array in the console shows array.length = 0 BUT there are cards there      
        this.player1 = player1;
        this.player2 = player2;
        this.deck.createDeck();
        console.log(this.deck.mainDeck)
        this.deck.shuffle();
        this.deck.deal();
        this.playHand();    
        
        //log player2 cards for my own check
        //console.table('Player 2 Cards:', this.deck.player2Cards);

    }   
    
    // play the rounds
    // pop off the card from each players deck
    // compare if >, < , or =
    // increment playerScore
    playHand(){
              
        //checks for myself: player 1 and 2 score. & the length of the card array
        // console.log('Player 1 Score is:', this.p1.showScore());
        // console.log('Player 2 Score is: ', this.p2.showScore());
         //console.log(this.deck.player1Cards);
         
         //log the player names
         console.log(`${this.player1} is player 1.`);
         console.log(`${this.player2} is player 2.`);

         // while each player has cards (26 total iterations if the .length doesn't work)
         //  pop off cards and compare: increment points to the winner
        while (this.deck.player1Cards.length !== 0 && this.deck.player2Cards.length !== 0) {
            // pop card from player 1 and player2
            this.player1Card = this.deck.player1Cards.pop();
            console.log(`${this.player1}'s Card`, this.player1Card);
            this.player2Card = this.deck.player2Cards.pop();
            console.log(`${this.player2}'s Card`, this.player2Card);
            // for my own check for the card value
            //console.log(this.player2Card.value);

            // compare the card values and increment the score accordingly
            // log round winner to the console for myself
            //log the player score
            if (this.player1Card.value > this.player2Card.value) {
                        this.p1.playerScore++;
                        console.log(`${this.player1} wins the round`);
                    } else if (this.player1Card.value < this.player2Card.value) {
                        this.p2.playerScore++;
                        console.log(`${this.player2} wins the round`);
                    } else {
                        console.log('Tie: No one wins the round.');
                    }
                    console.log(`${this.player1}'s Score:`, this.p1.showScore());
                    console.log(`${this.player2}'s Score: `, this.p2.showScore());                                
                    console.log('End of round');
            } 
            //compare the player scores to declare a winner          
            if (this.p1.playerScore > this.p2.playerScore) {
                console.log(`${this.player1} is the winner of the game.`); 
            } else if (this.p1.playerScore < this.p2.playerScore) {
                console.log(`${this.player2} is the winner of the game.`);                
            } else {
                console.log('Tie: No winner.')
            }     
        }
        
}

// instantiate a new game
// call startGame with params
let myGame = new Game();
myGame.startGame("Doc Holiday", "Wyatt Earp");



