import editAvatar from '../images/editAvatar.png';

function handleEditAvatarClick() {
  document.querySelector('.popup_type_avatar').classList.add('popup_opened');
  console.log(document.querySelector('.popup_type_avatar'));
}
function handleEditProfileClick() {
  document.querySelector('.popup_type_edit').classList.add('popup_opened');
  console.log(document.querySelector('.popup_type_edit'));
}
function handleAddPlaceClick() {
  document.querySelector('.popup_type_add').classList.add('popup_opened');
  console.log(document.querySelector('.popup_type_add'));
}

function Main() {
  return (
    <main className="content">
      <section className="profile">

        <div className="profile__avatar-container">
          <div className="profile__avatar-icon">
            <img className="profile__avatar-edit" src={editAvatar} alt="Иконка карандаш"
              onClick={handleEditAvatarClick}

            />
          </div>
          <img className="profile__photo" alt="Фото профиля" />
        </div>

        <div className="profile__text-box">
          <h1 className="profile__title" aria-label="Имя профиля"></h1>
          <button className="profile__edit" aria-label="Кнопка редактировать информацию о себе"
            onClick={handleEditProfileClick}

          ></button>
          <p className="profile__subtitle"></p>
        </div>

        <button className="profile__button-add" aria-label="Кнопка добавить пост"
          onClick={handleAddPlaceClick}
        ></button>
      </section>

      <section className="cards" aria-label="Блок с карточками мест">
      </section>
    </main>
  );
}

export default Main;