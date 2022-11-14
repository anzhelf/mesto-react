import React, { useState, useEffect, useContext } from 'react';
import userEvent from '@testing-library/user-event';
import { useInsertionEffect } from 'react';
import editAvatar from '../images/editAvatar.png';
import api from '../utils/Api';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({ cards, ...props }) {

  const dataUser = React.useContext(CurrentUserContext);
  //console.log(dataUser);

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
            src={dataUser.avatar}
          />
        </div>

        <div className="profile__text-box">
          <h1 className="profile__title" aria-label="Имя профиля">{dataUser.name}</h1>
          <button className="profile__edit" aria-label="Кнопка редактировать информацию о себе"
            onClick={props.onEditProfile}

          ></button>
          <p className="profile__subtitle">{dataUser.about}</p>
        </div>

        <button className="profile__button-add" aria-label="Кнопка добавить пост"
          onClick={props.onAddPlace}
        ></button>
      </section>

      <section className="cards" aria-label="Блок с карточками мест">

        {
          cards.map((card) => (<Card key={card._id} id={card._id} name={card.name} link={card.link} likes={card.likes.length} onCardClick={props.onCardClick} />))
        }

      </section>
    </main>
  );
}

export default Main;