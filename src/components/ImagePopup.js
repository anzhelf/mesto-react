function ImagePopup(props) {
  const { name, link } = props.card;

  if (props.isOpen) {
    return (
      <div className={`popup ${props.isOpen && 'popup_opened'}`}>
        <div className="popup__box popup__card-container">
          <button className="popup__close-icon" aria-label="Кнопка закрыть" onClick={props.onClose}></button>
          <img className="popup__card-image" alt={name} src={link} />
          <h2 className="popup__card-title">{name}</h2>
        </div>
      </div>
    );
  }
}
export default ImagePopup;