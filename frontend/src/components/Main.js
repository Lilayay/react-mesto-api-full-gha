import { useContext } from 'react';
import React from 'react';
import Card from "./Card";
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main(props) {
    //Информация о пользователе
    const currentUser = useContext(CurrentUserContext);

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__info">
                    <div onClick={props.onEditAvatar} className="profile__avatar-button"><img className="profile__avatar" src={currentUser.avatar}
                        alt="Аватар" /></div>
                    <div className="profile__text">
                        <h1 className="profile__title">{currentUser.name}</h1>
                        <button onClick={props.onEditProfile} className="profile__edit-button" aria-label="Редактировать профиль"></button>
                        <p className="profile__subtitle">{currentUser.about}</p>
                    </div>
                </div>
                <button onClick={props.onAddPlace} className="profile__add-button" aria-label="Добавить"></button>
            </section>

            < section className="gallery">
                <ul className="gallery__elements">
                    {props.cards.map((card) => (
                        <Card
                            key={card._id}
                            onCardClick={props.onCardClick}
                            card={card}
                            onCardLike={props.onCardLike}
                            onDelete={props.onDelete}
                        />
                    ))}
                </ul>
            </section>
        </main >
    )
}

export default Main;