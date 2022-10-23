

function PopupWithForm(props) {

  return (
    <div className={`popup popup_type_${props.name}`}>
      <div className={`popup__box popup__container popup__container_${props.name}`}>
        <button className="popup__close-icon" aria-label="Кнопка закрыть"></button>
        <div className="popup__content">
          <h3 className="popup__title">{props.title}</h3>
          <form className={`popup__form popup__form_${props.name}`} name={props.name} noValidate>

            <label className="popup__label">
              <input name="name" type="text" id="username" minLength="2" maxLength="40"
                placeholder="Имя" className="popup__input popup__input_type_name" required />
              <span className="username-input-error popup__input-error-name"></span>
            </label>

            <label className="popup__label popup__label_last-element">
              <input name="about" type="text" id="biography" minLength="2" maxLength="200" placeholder="Работа" className="popup__input popup__input_type_job" required />
              <span className="biography-input-error popup__input-error-job"></span>
            </label>

            <button className={`popup__save-button popup__save-button_${props.name}`} type="submit"
              aria-label="Кнопка сохранить">{props.buttonSave}</button>
          </form>
        </div>
      </div>
    </div>

  );
}

export default PopupWithForm;

/*
      <div className="popup popup_profile_edit">
        <div className="popup__box popup__container popup__container_edit">
          <button className="popup__close-icon" aria-label="Кнопка закрыть"></button>
          <div className="popup__content">
            <h3 className="popup__title">Редактировать профиль</h3>
            <form className="popup__form popup__form_Edit" name="edit" noValidate>

              <label className="popup__label">
                <input name="name" type="text" id="username" minLength="2" maxLength="40"
                  placeholder="Имя" className="popup__input popup__input_type_name" required />
                <span className="username-input-error popup__input-error-name"></span>
              </label>

              <label className="popup__label popup__label_last-element">
                <input name="about" type="text" id="biography" minLength="2" maxLength="200" placeholder="Работа" className="popup__input popup__input_type_job" required />
                <span className="biography-input-error popup__input-error-job"></span>
              </label>

              <button className="popup__save-button popup__save-button_Edit" type="submit"
                aria-label="Кнопка сохранить">Сохранить</button>
            </form>
          </div>
        </div>
      </div>

      <div className="popup popup_add_card">
        <div className="popup__box popup__container popup__container_add">
          <button className="popup__close-icon" aria-label="Кнопка закрыть"></button>
          <div className="popup__content">
            <h3 className="popup__title">Новое место</h3>
            <form className="popup__form popup__form_Add" name="add" noValidate>
              <label className="popup__label">
                <input name='name' type="text" id="namecard" minLength="2" maxLength="30" placeholder="Название"
                  className="popup__input popup__input_type_name" required />
                <span className="namecard-input-error popup__input-error-name"></span>
              </label>

              <label className="popup__label popup__label_last-element">
                <input name='link' type="url" id="link" placeholder="Ссылка на картинку"
                  className="popup__input popup__input_type_job" required />
                <span className="link-input-error popup__input-error-job"></span>
              </label>

              <button className="popup__save-button popup__save-button_add" type="submit"
                aria-label="Кнопка сохранить">Создать</button>
            </form>
          </div>
        </div>
      </div>

      <div className="popup popup_avatar">
        <div className="popup__container popup__container-avatar">
          <button className="popup__close-icon" aria-label="Кнопка закрыть"></button>
          <div className="popup__content">
            <h3 className="popup__title">Обновить аватар</h3>
            <form className="popup__form popup__form_avatar" name="avatar" noValidate>

              <label className="popup__label popup__label_last-element">
                <input name='avatar' type="url" id="avatar" placeholder="Ссылка на картинку"
                  className="popup__input popup__input_type_avatar" required />
                <span className="avatar-input-error popup__input-error-job"></span>
              </label>

              <button className="popup__save-button popup__save-button_avatar" type="submit"
                aria-label="Кнопка сохранить">Сохранить</button>
            </form>
          </div>
        </div>
      </div>

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