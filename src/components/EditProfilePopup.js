import React, { useState, useEffect, createContext, useContext } from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup(props) {
  const currentUser = React.useContext(CurrentUserContext);
  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  React.useEffect(() => {
    setNameProfile(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  const [nameProfile, setNameProfile] = useState(currentUser.name);
  const [description, setDescription] = useState(currentUser.about);

  function handleNameProfile(e) {
    setNameProfile(e.target.value);
  }
  function handleDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdateUser({
      name: nameProfile,
      about: description
    });
  }

  return (
    <PopupWithForm
      name='edit'
      title='Редактировать профиль'
      buttonSave='Сохранить'
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__label">
        <input onChange={handleNameProfile} value={nameProfile} name="name" type="text" id="username" minLength="2" maxLength="40"
          placeholder="Имя" className="popup__input popup__input_type_name" required />
        <span className="username-input-error popup__input-error-name"></span>
      </label>

      <label className="popup__label popup__label_last-element">
        <input onChange={handleDescription} value={description} name="about" type="text" id="biography" minLength="2" maxLength="200" placeholder="Работа" className="popup__input popup__input_type_job" required />
        <span className="biography-input-error popup__input-error-job"></span>
      </label>

    </PopupWithForm>
  )
}
export default EditProfilePopup;