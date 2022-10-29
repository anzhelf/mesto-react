import React, { useState, useEffect } from 'react';
import userEvent from '@testing-library/user-event';
import { useInsertionEffect } from 'react';
import editAvatar from '../images/editAvatar.png';
import api from '../utils/Api';
import Card from './Card';
import cardDelete from '../images/deleteCard.png';

function deleteCard() {
  document.querySelector('.popup_type_delete').classList.add('popup_opened');
  console.log(document.querySelector('.popup_type_delete'));
}

function Main(props) {
  const [cards, setCards] = React.useState([]);

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');

  useEffect(() => {
    api.getDdataUser()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      }).catch((err) => console.log(err));
  });

  useEffect(() => {
    api.getInicialCards()
      .then(data => {
        setCards(data);
      }).catch((err) => console.log(err));
  });

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
            src={userAvatar}
          />
        </div>

        <div className="profile__text-box">
          <h1 className="profile__title" aria-label="Имя профиля">{userName}</h1>
          <button className="profile__edit" aria-label="Кнопка редактировать информацию о себе"
            onClick={props.onEditProfile}

          ></button>
          <p className="profile__subtitle">{userDescription}</p>
        </div>

        <button className="profile__button-add" aria-label="Кнопка добавить пост"
          onClick={props.onAddPlace}
        ></button>
      </section>

      <section className="cards" aria-label="Блок с карточками мест">
        {
          cards.map((card) => <Card key={card._id} id={card._id} name={card.name} link={card.link} likes={card.likes.length} />)
        }
      </section>
    </main>
  );
}

export default Main;