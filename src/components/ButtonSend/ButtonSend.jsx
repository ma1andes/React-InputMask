import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from 'prop-types'; 

function ButtonSend({ onSubmit = null, isDisabled = false }) {
    const handleClick = () => {
        if (typeof onSubmit === "function") {
            onSubmit();
        } else {
            console.warn('onSubmit не передан или не является функцией.');
        }
    };

    return (
        <button 
            className="btn btn-primary" 
            type="submit"
            onClick={handleClick}
            disabled={isDisabled}
        >   
            Отправить
        </button>
    );
}

ButtonSend.propTypes = {
    onSubmit: PropTypes.func,
    isDisabled: PropTypes.bool,
};

export default ButtonSend;
