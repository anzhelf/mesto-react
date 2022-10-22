import logo from '../logo.svg';
/*import './App.css';*/

function App() {
  return (
    <div className="App">

      <header class="header content">
        <img class="header__logo" src='images/logo.svg' alt="Логотип с надписью место россия" />
      </header>

      <main class="content">
        <section class="profile">

          <div class="profile__avatar-container">
            <div class="profile__avatar-icon">
              <img class="profile__avatar-edit" src="images/editAvatar.png" alt="Иконка карандаш" />
            </div>
            <img class="profile__photo" src="images/kusto__photo.jpg" alt="Фото профиля" />
          </div>

          <div class="profile__text-box">
            <h1 class="profile__title"></h1>
            <button class="profile__edit" aria-label="Кнопка редактировать информацию о себе"></button>
            <p class="profile__subtitle"></p>
          </div>

          <button class="profile__button-add" aria-label="Кнопка добавить пост"></button>
        </section>

        <section class="cards" aria-label="Блок с карточками мест">
        </section>
      </main>

      <footer class="footer content">
        <p class="footer__text">© 2020 Mesto Russia</p>
      </footer>

      <div class="popup popup_profile_edit">
        <div class="popup__box popup__container popup__container_edit">
          <button class="popup__close-icon" aria-label="Кнопка закрыть"></button>
          <div class="popup__content">
            <h3 class="popup__title">Редактировать профиль</h3>
            <form class="popup__form popup__form_Edit" name="edit" novalidate>

              <label class="popup__label">
                <input name="name" type="text" id="username" minlength="2" maxlength="40" value="Жак-Ив Кусто"
                  placeholder="Имя" class="popup__input popup__input_type_name" required />
                <span class="username-input-error popup__input-error-name"></span>
              </label>

              <label class="popup__label popup__label_last-element">
                <input name="about" type="text" id="biography" minlength="2" maxlength="200" value="Исследователь океана"
                  placeholder="Работа" class="popup__input popup__input_type_job" required />
                <span class="biography-input-error popup__input-error-job"></span>
              </label>

              <button class="popup__save-button popup__save-button_Edit" type="submit"
                aria-label="Кнопка сохранить">Сохранить</button>
            </form>
          </div>
        </div>
      </div>

      <div class="popup popup_add_card">
        <div class="popup__box popup__container popup__container_add">
          <button class="popup__close-icon" aria-label="Кнопка закрыть"></button>
          <div class="popup__content">
            <h3 class="popup__title">Новое место</h3>
            <form class="popup__form popup__form_Add" name="add" novalidate>
              <label class="popup__label">
                <input name='name' type="text" id="namecard" minlength="2" maxlength="30" placeholder="Название"
                  class="popup__input popup__input_type_name" required />
                <span class="namecard-input-error popup__input-error-name"></span>
              </label>

              <label class="popup__label popup__label_last-element">
                <input name='link' type="url" id="link" placeholder="Ссылка на картинку"
                  class="popup__input popup__input_type_job" required />
                <span class="link-input-error popup__input-error-job"></span>
              </label>

              <button class="popup__save-button popup__save-button_add" type="submit"
                aria-label="Кнопка сохранить">Создать</button>
            </form>
          </div>
        </div>
      </div>

      <div class="popup popup_avatar">
        <div class="popup__container popup__container-avatar">
          <button class="popup__close-icon" aria-label="Кнопка закрыть"></button>
          <div class="popup__content">
            <h3 class="popup__title">Обновить аватар</h3>
            <form class="popup__form popup__form_avatar" name="avatar" novalidate>

              <label class="popup__label popup__label_last-element">
                <input name='avatar' type="url" id="avatar" placeholder="Ссылка на картинку"
                  class="popup__input popup__input_type_avatar" required />
                <span class="avatar-input-error popup__input-error-job"></span>
              </label>

              <button class="popup__save-button popup__save-button_avatar" type="submit"
                aria-label="Кнопка сохранить">Сохранить</button>
            </form>
          </div>
        </div>
      </div>

      <div class="popup popup-delete">
        <div class="popup__container popup__container-delete">
          <button class="popup__close-icon" aria-label="Кнопка закрыть"></button>
          <div class="popup__content">
            <h3 class="popup__title">Вы уверены?</h3>
            <form class="popup__form popup__form_delete" name="delete" novalidate>
              <button class="popup__save-button popup__save-button_delete" type="submit" aria-label="Кнопка да">Да</button>
            </form>
          </div>
        </div>
      </div>

      <div class="popup popup_open_image">
        <div class="popup__box popup__card-container">
          <button class="popup__close-icon" aria-label="Кнопка закрыть"></button>
          <img class="popup__card-image" alt="" />
          <h2 class="popup__card-title"></h2>
        </div>
      </div>

      <template class="card-template card-template_type_default">
        <article class="card">
          <img class="card__image" alt="" />
          <img class="card__delete" src="images/delete.png" alt="Иконка урны, для удаления карточки" />
          <div class="card__post">
            <h2 class="card__title"></h2>
            <div class="card__like">
              <button class="card__like-icon" aria-label="Кнопка лайк"></button>
              <p class="card__like-num">0</p>
            </div>
          </div>
        </article>
      </template>

    </div>
  );
}

export default App;
