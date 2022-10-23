import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import PopupWithForm from './PopupWithForm';

import deleteCard from '../images/deleteCard.png';
import '../index.css';

function App() {

  return (
    <div className="page">

      <Header />
      <Main />
      <Footer />
      <PopupWithForm
        name='edit'
        title='Редактировать профиль'
        buttonSave='Сохранить'

      />

      <PopupWithForm
        name='add'
        title='Новое место'
        buttonSave='Создать'
      />

      <div className="popup popup_open_image">
        <div className="popup__box popup__card-container">
          <button className="popup__close-icon" aria-label="Кнопка закрыть"></button>
          <img className="popup__card-image" alt="" />
          <h2 className="popup__card-title"></h2>
        </div>
      </div>

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
