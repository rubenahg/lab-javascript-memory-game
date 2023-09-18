class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards(cards) {
    if(this.cards){
      for(let i = this.cards.length -1; i > 0; i--){
        let pickingRandom = Math.floor(Math.random() * (i + 1));
        [this.cards[i], this.cards[pickingRandom]] = [this.cards[pickingRandom], this.cards[i]]
      }
      return cards;
    } else {
      return undefined;
    }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++
    if(card1 === card2){
      this.pairsGuessed++
      return true;
    } else {
      return false;
    }
  }

  checkIfFinished() {
    if(this.pairsGuessed === this.cards.length / 2){
      return true;
    } else {
      return false;
    }
  }
}
