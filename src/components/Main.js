import React, { useState, useEffect, useContext } from 'react';
import userEvent from '@testing-library/user-event';
import { useInsertionEffect } from 'react';
import editAvatar from '../images/editAvatar.png';
import api from '../utils/Api';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main(props) {
  const [cards, setCards] = useState([]);
  const currentUser = React.useContext(CurrentUserContext);
  useEffect(() => {
    api.getInicialCards()
      .then(data => {
        setCards(data);
      })
      .catch((err) => console.log(err));
  }, []);
  //

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
    api.deliteCard(card._id);
    api.getInicialCards()
      .then(() => {
        setCards((data) => data.filter((c) => c._id !== card._id));
      })
      .catch((err) => console.log(err));
  }

  return (
    <main className="content">
      <section className="profile">

        <div className="profile__avatar-container">
          <div className="profile__avatar-icon">
            <img className="profile__avatar-edit" src={editAvatar} alt="Иконка карандаш"
              onClick={props.onEditAvatar}
            />
          </div>
          <img className="profile__photo" alt="Фото профиля"
            src={currentUser.avatar}
          />
        </div>

        <div className="profile__text-box">
          <h1 className="profile__title" aria-label="Имя профиля">{currentUser.name}</h1>
          <button className="profile__edit" aria-label="Кнопка редактировать информацию о себе"
            onClick={props.onEditProfile}

          ></button>
          <p className="profile__subtitle">{currentUser.about}</p>
        </div>

        <button className="profile__button-add" aria-label="Кнопка добавить пост"
          onClick={props.onAddPlace}
        ></button>
      </section>

      <section className="cards" aria-label="Блок с карточками мест">
        {
          cards.map((card) => (<Card key={card._id} card={card} onCardDelete={handleCardDelete} onCardLike={handleCardLike} onCardClick={props.onCardClick} />))
        }
      </section>
    </main>
  );
}

export default Main;