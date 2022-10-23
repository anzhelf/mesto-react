

function ImagePopup() {
  return (
    <div className="popup popup_open_image">
      <div className="popup__box popup__card-container">
        <button className="popup__close-icon" aria-label="Кнопка закрыть"></button>
        <img className="popup__card-image" alt="" />
        <h2 className="popup__card-title"></h2>
      </div>
    </div>
  );
}

export default ImagePopup;