import React, {FunctionComponent} from 'react';
import style from './Task.module.css';
import complete from '../../assets/img/complete.png';
import edit from '../../assets/img/edit.png';
import del from '../../assets/img/delete.png';
import {TaskType} from "../TaskType";

const Task:FunctionComponent<TaskType> = ({id,
                                              text,
                                              completed,
                                              editTask,
                                              completeTask,
                                          deleteTask}) => {
    return (
        <div className={style.task}>
            <div className={style.text}>
                {completed ? <s>{text}</s> : text}
            </div>
            <div className={style.functional}>
                <img src={complete} onClick={() => {
                    if (completeTask) {
                        completeTask(id);
                }}} alt="complete"/>
                <div onClick={() => {
                    if (editTask) {
                        editTask(id);
                    }
                }}>
                    <img src={edit} alt="edit"/>
                </div>
                <div onClick={() => {
                    if (deleteTask) {
                        deleteTask(id)
                    }
                }}>
                    <img src={del} alt="delete"/>
                </div>
            </div>
        </div>
    );
}

export default Task;