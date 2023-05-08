import PopupWithForm from "./PopupWithForm";

function PopupDelete({ isOpen, onClose, onDelete, card, isLoading }) {

    function handleSubmit(e) {
        e.preventDefault();
        onDelete(card);
    }

    return (
        <PopupWithForm name="delete" title="Вы уверены?" submit="Да"
            isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} buttonText={isLoading ?
                "Удаление..." : "Да"}></PopupWithForm>
    );
}

export default PopupDelete;

