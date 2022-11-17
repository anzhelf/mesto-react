import React, { useState, useEffect, createContext, useContext } from 'react';

function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen && 'popup_opened'}`}>
      <div className={`popup__box popup__container popup__container_${props.name} `}>
        <button className="popup__close-icon" aria-label="Кнопка закрыть" onClick={props.onClose}></button>
        <div className="popup__content">
          <h3 className="popup__title">{props.title}</h3>
          <form onSubmit={props.onSubmit} className={`popup__form popup__form_${props.name} `} name={props.name} noValidate>
            {props.children}
            <button className={`popup__save-button popup__save-button_${props.name}`} type="submit"
              aria-label="Кнопка сохранить">{props.buttonSave}</button>
          </form>
        </div>
      </div>
    </div >
  );
}
export default PopupWithForm;