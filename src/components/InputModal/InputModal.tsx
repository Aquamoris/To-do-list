import React from 'react';
import style from './InputModal.module.css';

const InputModal = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.modal}>
                <div className={style.input}>
                    <div>Hi</div>
                    <input type="text" className={style.inputField}/>
                </div>
                <div className={style.functional}>
                    <button className={style.functionalButton}>OK</button>
                    <button className={style.functionalButton}>Cancel</button>
                </div>
            </div>
        </div>
    );
}

export default InputModal;