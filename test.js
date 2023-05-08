// // Create a test using Mocha and Chai for the card game at index.js
const expect = chai.expect;
const assert = chai.assert;
// The code below is to test the function to create a deck of 52 cards.
// The code was copied from index.js
// a test variable is created to instantiate the new Deck class
// the test variable at create the deck is called
// expect the deck length to equal 52 cards
describe('Creating a deck of cards', () => {
    
        it('should create a deck of cards', () => {
            let suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs']
            let ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace']
            let mainDeck = [];
            
            for (let j = 0; j < ranks.length; j++) {
                for (let i = 0; i < suits.length; i++) {
                          
                    mainDeck.push(new Card(suits[i], ranks[j], j));
                } 
            }
            
            let testDeck = new Deck();
            testDeck.createDeck();
            expect(testDeck.mainDeck.length).to.equal(52);              
        })           
});
    
    
