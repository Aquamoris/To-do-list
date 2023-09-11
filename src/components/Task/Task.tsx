import React, {FunctionComponent} from 'react';
import style from './Task.module.css';
import {TaskType} from "../TaskType";
import complete from '../../assets/img/complete.png';
import edit from '../../assets/img/edit.png';
import del from '../../assets/img/delete.png';

const Task: FunctionComponent<TaskType> = ({text, completed}) => {
    return (
        <div className={style.task}>
            <div className={style.text}>
                {completed ? <s>text</s> : text}
            </div>
            <div className={style.functional}>
                <img src={complete} alt="complete"/>
                <img src={edit} alt="edit"/>
                <img src={del} alt="delete"/>
            </div>
        </div>
    );
}

export default Task;