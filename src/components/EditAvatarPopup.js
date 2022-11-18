import React, { useState, useEffect, createContext, useContext } from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {
  const [avatar, setAvatar] = useState('');

  React.useEffect(() => {
    setAvatar('');
  }, [props.isOpen]);

  function handleAvatarProfile(e) {
    setAvatar(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateAvatar({
      avatar: avatar
    });
  }

  return (
    <PopupWithForm
      name='avatar'
      title='Обновить аватар'
      buttonSave='Сохранить'
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__label popup__label_last-element">
        <input onChange={handleAvatarProfile} value={avatar} name='avatar' type="url" id="avatar" placeholder="Ссылка на картинку"
          className="popup__input popup__input_type_avatar" required />
        <span className="avatar-input-error popup__input-error-job"></span>
      </label>
    </PopupWithForm>
  )
}
export default EditAvatarPopup;