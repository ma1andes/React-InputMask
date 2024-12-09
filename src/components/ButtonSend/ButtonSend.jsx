import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

function ButtonSend({ onSubmit, isDisabled }) { // Пропсы передаются как объект
    return (
        <button 
            className="btn btn-primary" 
            type="button"
            onClick={onSubmit}
            disabled={isDisabled}
        >   
            Отправить
        </button>
    );
}

export default ButtonSend;
