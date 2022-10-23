import logo from '../images/logo.svg';
import editAvatar from '../images/editAvatar.png';
import deleteCard from '../images/deleteCard.png';
import '../index.css';

function App() {
  return (
    <div className="page">

      <header className="header content">
        <img className="header__logo" src={logo} alt="Логотип с надписью место россия" />
      </header>

      <main className="content">
        <section className="profile">

          <div className="profile__avatar-container">
            <div className="profile__avatar-icon">
              <img className="profile__avatar-edit" src={editAvatar} alt="Иконка карандаш" />
            </div>
            <img className="profile__photo" alt="Фото профиля" />
          </div>

          <div className="profile__text-box">
            <h1 className="profile__title" aria-label="Имя профиля"></h1>
            <button className="profile__edit" aria-label="Кнопка редактировать информацию о себе"></button>
            <p className="profile__subtitle"></p>
          </div>

          <button className="profile__button-add" aria-label="Кнопка добавить пост"></button>
        </section>

        <section className="cards" aria-label="Блок с карточками мест">
        </section>
      </main>

      <footer className="footer content">
        <p className="footer__text">© 2020 Mesto Russia</p>
      </footer>

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

      <div className="popup popup_open_image">
        <div className="popup__box popup__card-container">
          <button className="popup__close-icon" aria-label="Кнопка закрыть"></button>
          <img className="popup__card-image" alt="" />
          <h2 className="popup__card-title"></h2>
        </div>
      </div>

      <template className="card-template card-template_type_default">
        <article className="card">
          <img className="card__image" alt="" />
          <img className="card__delete" src={deleteCard} alt="Иконка урны, для удаления карточки" />
          <div className="card__post">
            <h2 className="card__title"></h2>
            <div className="card__like">
              <button className="card__like-icon" aria-label="Кнопка лайк"></button>
              <p className="card__like-num">0</p>
            </div>
          </div>
        </article>
      </template>

    </div>
  );
}

export default App;
