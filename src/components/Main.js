import editAvatar from '../images/editAvatar.png';

function deleteCard() {
  document.querySelector('.popup_type_delete').classList.add('popup_opened');
  console.log(document.querySelector('.popup_type_delete'));
}

function Main(props) {
  return (
    <main className="content">
      <section className="profile">

        <div className="profile__avatar-container">
          <div className="profile__avatar-icon">
            <img className="profile__avatar-edit" src={editAvatar} alt="Иконка карандаш"
              onClick={props.onEditAvatar}

            />
          </div>
          <img className="profile__photo" alt="Фото профиля" />
        </div>

        <div className="profile__text-box">
          <h1 className="profile__title" aria-label="Имя профиля"></h1>
          <button className="profile__edit" aria-label="Кнопка редактировать информацию о себе"
            onClick={props.onEditProfile}

          ></button>
          <p className="profile__subtitle"></p>
        </div>

        <button className="profile__button-add" aria-label="Кнопка добавить пост"
          onClick={props.onAddPlace}
        ></button>
      </section>

      <section className="cards" aria-label="Блок с карточками мест">
      </section>
    </main>
  );
}

export default Main;