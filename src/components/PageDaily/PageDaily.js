import './PageDaily.css';

function PageDaily({ collection }) {
  const cards = collection.cards;
  const usedCards = [];
  
  const mixCards = (cards) => cards.sort(() => Math.random() - 0.5);
  const selectRandomCard = (cards) => cards[Math.floor(Math.random() * cards.length)];
  const throwCard = (card) => {
    cards.splice(cards.indexOf(card), 1);
      usedCards.push(card);
  }
   
  return (
    null;
  )
}

export default PageDaily;
