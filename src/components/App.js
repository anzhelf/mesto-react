import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

import deleteCard from '../images/deleteCard.png';
import '../index.css';

function App() {

  return (
    <div className="page">

      <Header />
      <Main />
      <Footer />

      <PopupWithForm
        name='avatar'
        title='Обновить аватар'
        buttonSave='Сохранить'
        onEditAvatar=''
      >
        <label className="popup__label popup__label_last-element">
          <input name='avatar' type="url" id="avatar" placeholder="Ссылка на картинку"
            className="popup__input popup__input_type_avatar" required />
          <span className="avatar-input-error popup__input-error-job"></span>
        </label>
      </PopupWithForm>

      <PopupWithForm
        name='edit'
        title='Редактировать профиль'
        buttonSave='Сохранить'
        onEditProfile=''
      >
        <label className="popup__label">
          <input name="name" type="text" id="username" minLength="2" maxLength="40"
            placeholder="Имя" className="popup__input popup__input_type_name" required />
          <span className="username-input-error popup__input-error-name"></span>
        </label>

        <label className="popup__label popup__label_last-element">
          <input name="about" type="text" id="biography" minLength="2" maxLength="200" placeholder="Работа" className="popup__input popup__input_type_job" required />
          <span className="biography-input-error popup__input-error-job"></span>
        </label>

      </PopupWithForm>

      <PopupWithForm
        name='add'
        title='Новое место'
        buttonSave='Создать'
        onAddPlace=''
      >
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
      </PopupWithForm>

      <PopupWithForm
        name='delete'
        title='Вы уверены?'
        buttonSave='Да'
        onAddPlace=''
      />

      <ImagePopup />

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
