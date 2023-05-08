import PopupWithForm from './PopupWithForm';
import { useState, useEffect } from 'react';

function PopupAddPlace({ isOpen, onClose, onAddPlace, isLoading }) {

    const [name, setName] = useState('');
    const [link, setLink] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        onAddPlace({
            name: name, link: link
        });
    }

    function handleNameOnChange(e) {
        setName(e.target.value);
    }

    function handleLinkOnChange(e) {
        setLink(e.target.value);
    }

    useEffect(() => {
        setName('');
        setLink('');
    }, [isOpen]);

    return (
        <PopupWithForm name="add" title="Новое место" submit="Сохранить"
            isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}
            buttonText={isLoading ? "Сохранение..." : "Сохранить"}>
            <div className="popup__input">
                <label className="popup__label">
                    <input id="image-input" type="text" name="name" placeholder="Название"
                        className="popup__text popup__text_type_title" required minLength="2" maxLength="30"
                        value={name || ''} onChange={handleNameOnChange} />
                    <span className="popup__input-error image-input-error"></span>
                </label>
                <label className="popup__label">
                    <input id="link-input" type="url" name="link" placeholder="Ссылка на картинку"
                        className="popup__text popup__text_type_link" required
                        value={link || ''} onChange={handleLinkOnChange} />
                    <span className="popup__input-error link-input-error"></span>
                </label>
            </div>
        </PopupWithForm>
    )
}

export default PopupAddPlace;