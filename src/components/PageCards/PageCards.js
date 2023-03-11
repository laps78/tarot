import './PageCards.css';
import CardView from './CardView.js';
import nanoid from 'nanoid';

export default function PageCards({ collecion }){
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
      <h2 className="PageHeder">{ collecion.name }</h2>
      { }
    </div>);
}
