import PopupWithForm from './PopupWithForm';
import { useRef, useEffect } from 'react';

function PopupEditAvatar({ isOpen, onClose, onUpdateAvatar, isLoading }) {

    const avatarRef = useRef();

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateAvatar({
            avatar: avatarRef.current.value,
        });
    }

    useEffect(() => {
        avatarRef.current.value = '';
    }, [isOpen]);

    return (
        <PopupWithForm name="avatar" title="Обновить аватар" submit="Сохранить"
            isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}
            buttonText={isLoading ? "Сохранение..." : "Сохранить"}>
            <div className="popup__input">
                <label className="popup__label">
                    <input id="avatar-input" type="url" name="avatar" placeholder="Ссылка на аватар"
                        className="popup__text popup__text_type_avatar" ref={avatarRef} required />
                    <span className="popup__input-error avatar-input-error"></span>
                </label>
            </div>
        </PopupWithForm>
    )
}

export default PopupEditAvatar;