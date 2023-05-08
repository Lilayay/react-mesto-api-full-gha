import closeCross from '../images/close.svg'

function ImagePopup({ card, onClose, isOpen }) {
    return (
        <div className={isOpen ? `popup popup-image popup_opened` : `popup`}>
            <div className="popup__image-container">
                <img className="popup__image-full" src={card.link} alt={card.name} />
                <p className="popup__description">{card.name}</p>
                <button className="popup__close" aria-label="Закрыть" onClick={onClose}>
                    <img className="popup__cross" src={closeCross} alt="Закрыть" />
                </button>
            </div>
        </div>
    )
}

export default ImagePopup;