import './CardView.js';
import PropTypes from 'prop-types';
import nanoid from 'nanoid';

function CardView({ id, name, imgLink, type, associations, descriptons }){
  return (
    <article className="CardView">
      <div className="card_content_wrapper">
        <h3 className="card__title">{ name }</h3>
        <div className="card_img_wrapper">
          <img
            className="card__img"
            src={ imgLink }
            alt={ `${type}: ${name}` }
          />
        </div>
        <div className="card_description_wrapper">
          <h4 className="card_description_title">Общее</h4>
          <p className="card_description_text">
            { descriptions[0] }
          </p>
          <h4 className="card_description_title">Работа</h4>
          <p className="card_description_text">
            { descriptons[1] }
          </p>
          <h4 className="card_description_title">Сознание</h4>
          <p className="card_description_text">
            { descriptons[2] }
          </p>
          <h4 className="card_description_title">Личное</h4>
          <p className="card_description_text">
            { descriptons[3] }
          </p>
          <h4 className="card_description_title">Отношения</h4>
          <p className="card_description_text">
            { descriptons[4] }
          </p>
        </div>
      </div>
    </article>
  )
}

CardView.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  imgLink: PropTypes.string,
  type: PropTypes.string,
  associations: PropTypes.string,
  descriptons: PropTypes.array,
}

export default CardView;

