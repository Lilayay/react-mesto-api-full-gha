import closeCross from '../images/close.svg'
import React from 'react';

function PopupWithForm(props) {

    return (
        <div className={props.isOpen ? `popup popup_type_${props.name} popup_opened` : `popup`} >
            <form className={`popup__container popup__container_${props.name}`}
                name={props.name}
                onSubmit={props.onSubmit}>
                <h2 className="popup__title">{props.title}</h2>
                {props.children}
                <button type="submit" className="popup__submit-btn">{props.buttonText}</button>
                <button type="button" className="popup__close" aria-label="Закрыть" onClick={props.onClose}>
                    <img className="popup__cross" src={closeCross} alt="Закрыть" />
                </button>
            </form>
        </div>
    )
}

export default PopupWithForm;