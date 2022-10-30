function ImagePopup(props) {
  return (
    <div className={`popup ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__box popup__card-container">
        <button className="popup__close-icon" aria-label="Кнопка закрыть" onClick={props.onClose}></button>
        <img className="popup__card-image" alt={props.card.name} src={props.card.link} />
        <h2 className="popup__card-title">{props.card.name}</h2>
      </div>
    </div>
  );
}
export default ImagePopup;