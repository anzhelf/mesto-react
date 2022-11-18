import React, { useState, useEffect, createContext, useContext } from 'react';
import api from '../utils/Api';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import '../index.css';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import AddPlacePopup from './AddPlacePopup';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState({});

  useEffect(() => {
    api.getDataUser()
      .then(data => {
        setCurrentUser(data);
      })
      .catch((err) => console.log(err));

  }, []);

  useEffect(() => {
    api.getInitialCards()
      .then(data => {
        setCards(data);
      })
      .catch((err) => console.log(err));
  }, [cards]);

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

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    if (!isLiked) {
      api.likeCard(card._id);
    }
    else {
      api.deleteLikeCard(card._id);
    }
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.getInicialCards()
      .then((newCard) => {
        setCards(newCard);
      })
      .catch((err) => console.log(err));
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id);
    api.getInitialCards()
      .then(() => {
        setCards((data) => data.filter((c) => c._id !== card._id));
      })
      .catch((err) => console.log(err));
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
    setSelectedCard({});
  }

  function handleUpdateUser(data) {
    api.editDataUser(data.name, data.about)
      .then(data => {
        setCurrentUser(data);
      })
      .then(() => {
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }

  function handleUpdateAvatar(data) {
    api.editAvatarUser(data.avatar)
      .then(data => {
        setCurrentUser(data);
      })
      .then(() => {
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }

  function handleUpdateAddCard(data) {
    api.addNewCard(data.name, data.link)
      .then(newCard => {
        setCards([newCard, ...cards]);
      })
      .then(() => {
        closeAllPopups();
      })
      .catch((err) => console.log(err));
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
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
        <Footer />

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleUpdateAddCard}
        />

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
