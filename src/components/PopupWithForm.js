
function PopupWithForm(props) {

  return (
    <div className={`popup popup_type_${props.name}`}>
      <div className={`popup__box popup__container popup__container_${props.name}`}>
        <button className="popup__close-icon" aria-label="Кнопка закрыть"></button>
        <div className="popup__content">
          <h3 className="popup__title">{props.title}</h3>
          <form className={`popup__form popup__form_${props.name}`} name={props.name} noValidate>

            {props.children}

            <button className={`popup__save-button popup__save-button_${props.name}`} type="submit"
              aria-label="Кнопка сохранить">{props.buttonSave}</button>
          </form>
        </div>
      </div>
    </div >

  );
}

export default PopupWithForm;

/*

      <div className="popup popup-delete">
        <div className="popup__container popup__container-delete">
          <button className="popup__close-icon" aria-label="Кнопка закрыть"></button>
          <div className="popup__content">
            <h3 className="popup__title">Вы уверены?</h3>
            <form className="popup__form popup__form_delete" name="delete" noValidate>
              <button className="popup__save-button popup__save-button_delete" type="submit" aria-label="Кнопка да">Да</button>
            </form>
          </div>
        </div>
      </div>
*/