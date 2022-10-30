import cardDelete from '../images/deleteCard.png';

function Card(props) {
  function handleClick() {
    props.onCardClick(props);
  }
  return (
    <div className="card-template card-template_type_default" >
      <article className="card" id={props.id}>
        <img className="card__image" alt={props.name} src={props.link} onClick={handleClick} />
        <img className="card__delete" src={cardDelete} alt="Иконка урны, для удаления карточки" />
        <div className="card__post">
          <h2 className="card__title">{props.name}</h2>
          <div className="card__like">
            <button className="card__like-icon" aria-label="Кнопка лайк"></button>
            <p className="card__like-num">{props.likes}</p>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Card;