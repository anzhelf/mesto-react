import React, { useState, useEffect, useContext } from 'react';
import userEvent from '@testing-library/user-event';
import { useInsertionEffect } from 'react';
import editAvatar from '../images/editAvatar.png';
import api from '../utils/Api';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { CardsContext } from '../contexts/CardsContext';

function Main(props) {

  const currentUser = React.useContext(CurrentUserContext);
  //
  const cards = React.useContext(CardsContext);

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
          cards.map((card) => (<Card key={card._id} card={card} onCardClick={props.onCardClick} />))

        }

      </section>
    </main>
  );
}

export default Main;

//id={card._id} name={card.name} link={card.link} likes={card.likes.length}