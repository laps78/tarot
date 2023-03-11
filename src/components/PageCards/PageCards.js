import './PageCards.css';
import CardView from './CardView.js';
import nanoid from 'nanoid';

function PageCards({ collection }){
  const makeCardsReviewList = () => collection.cards.map(card => {
    const id = nanoid();
    <CardView
      key={id}
      id={id}
      name={card.name}
      imgLink={card.imgLink}
      type={card.typeName}
      associations={card.associations}
      descriptions={card.descriptions}
    />
  });
  return (
    <div className="cardReviews_wrapper">
      <h1 className="PageHeder">{ collecion.name }</h1>
      <p className="cards_collection_description">
        { collection.description }
      </p>
      { makeCardsReviewList() }
    </div>);
}

export default PageCards;
