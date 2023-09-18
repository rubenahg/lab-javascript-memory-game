const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);

window.addEventListener('load', (event) => {
  let html = '';
  //memoryGame.shuffleCards(cards)
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      let firstCardName = ""
      if(document.querySelectorAll('.card.turned').length < 1){
        card.setAttribute("class","card turned firstCard")
        firstCardName = document.querySelector(`.firstCard`).dataset.cardName
        console.log(firstCardName)
      } else {
        card.setAttribute("class","card turned")
        memoryGame.pairsClicked += 1
        console.log(card.dataset.cardName, card.dataset.cardName === firstCardName)
        setTimeout(() => checkIfMatch(card, firstCardName), 1000)
      }
    });
  });
});


function checkIfMatch(card, firstCardName){
  if(memoryGame.checkIfPair(card.dataset.cardName, firstCardName)){
    memoryGame.pickedCards.push(card.dataset.cardName)
    card.setAttribute("class","card turned")
    document.querySelector(`.firstCard`).setAttribute("class","card turned")
    console.log("ITS A PAIR!", firstCard)
  } else {
    document.querySelector(`.firstCard`).setAttribute("class","card")
    card.setAttribute("class","card")
        console.log("not a match", memoryGame.pickedCards)
  }
}