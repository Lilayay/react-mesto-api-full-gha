import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { useEffect, useState, useContext } from 'react';

function PopupEditProfile({ isOpen, onClose, onUpdateUser, isLoading }) {

    const [name, setName] = useState('');
    const [about, setAbout] = useState('');
    const currentUser = useContext(CurrentUserContext);

    useEffect(() => {
        setName(currentUser.name);
        setAbout(currentUser.about);
    }, [currentUser, isOpen]);

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateUser({
            name: name, about: about
        });
    }

    function handleNameOnChange(e) {
        setName(e.target.value);
    }

    function handleAboutOnChange(e) {
        setAbout(e.target.value);
    }

    return (
        <PopupWithForm name="edit" title="Редактировать профиль" submit="Сохранить"
            onSubmit={handleSubmit} isOpen={isOpen} onClose={onClose}
            buttonText={isLoading ? "Сохранение..." : "Сохранить"}>
            <div className="popup__input">
                <label className="popup__label">
                    <input id="profile-input" type="text" name="name" className="popup__text popup__text_type_name" required
                        minLength="2" maxLength="40" value={name || ''} onChange={handleNameOnChange} />
                    <span className="popup__input-error profile-input-error"></span>
                </label>
                <label className="popup__label">
                    <input id="about-input" type="text" name="about" className="popup__text popup__text_type_about" required
                        minLength="2" maxLength="200" value={about || ''} onChange={handleAboutOnChange} />
                    <span className="popup__input-error about-input-error"></span>
                </label>
            </div>
        </PopupWithForm>
    )
}

export default PopupEditProfile;