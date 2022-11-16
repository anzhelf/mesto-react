import React, { useState, useEffect, createContext, useContext } from 'react';
import api from '../utils/Api';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import '../index.css';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {
  const [currentUser, setCurrentUser] = useState({});

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  useEffect(() => {
    api.getDdataUser()
      .then(data => {
        setCurrentUser(data);
      })
      .catch((err) => console.log(err));

  }, []);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function handleCardClick(data) {
    setIsImagePopupOpen(!isImagePopupOpen);
    setSelectedCard(data);

  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>

        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <Footer />

        <PopupWithForm
          name='avatar'
          title='Обновить аватар'
          buttonSave='Сохранить'
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
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
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
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
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
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
          onClose={closeAllPopups}
        />

        <ImagePopup
          card={selectedCard}
          isOpen={isImagePopupOpen}
          onClose={closeAllPopups}
        />

      </CurrentUserContext.Provider>
    </div>

  );
}

export default App;
