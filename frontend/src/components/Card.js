import { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

const Card = ({ card, onCardClick, onCardLike, onDelete }) => {
    //определение владельца карточки
    const currentUser = useContext(CurrentUserContext);
    const isOwn = card.owner._id === currentUser._id;
    //лайк 
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    const cardLikeButtonClassName = `gallery__like-button ${isLiked ? 'gallery__like-button_active' : ''}`;

    function handleClick() {
        onCardClick(card);
    }

    function handleLikeClick() {
        onCardLike(card);
    }

    function handleDeleteClick() {
        onDelete(card);
    }

    return (
        <li className="gallery__element">
            {isOwn && <button className='gallery__delete-button' type="button" onClick={handleDeleteClick} />}
            <div className="gallery__image-container">
                <img className="gallery__image" src={card.link} alt={card.name} onClick={handleClick} />
            </div>
            <div className="gallery__description">
                <h2 className="gallery__title">{card.name}</h2>
                <div className="gallery__like">
                    <button className={cardLikeButtonClassName} type="button" onClick={handleLikeClick} aria-label="Нравится"></button>
                    <h3 className="gallery__like-counter">{card.likes.length}</h3>
                </div>
            </div>
        </li>
    )
}

export default Card;