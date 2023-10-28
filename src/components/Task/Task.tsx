import React, {FunctionComponent, useEffect, useState} from 'react';
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

    const [editMode, setEditMode] = useState<boolean>(false);
    const [editText, setEditText] = useState<string>(text);

    const editTextHandler = (e: React.FormEvent<HTMLInputElement>) => {
        setEditText(e.currentTarget.value);
    }

    const editTextOnBlur = () => {
        (editTask && editText) ? editTask(id, editText) : setEditText(text);
        setEditMode(!editMode)
    }

    useEffect(() => {
        setEditText(text);
    }, [text]);

    return (
        <div className={style.task}>
            {
                !editMode
                    ? <div className={style.text}>
                        {completed ? <s>{text}</s> : text}
                    </div>
                    : <div className={style.inputWrapper}>
                        <input className={style.input}
                               onChange={editTextHandler}
                               onBlur={editTextOnBlur}
                               autoFocus={true}
                               type="text"
                               value={editText}
                        />
                    </div>
            }
            <div className={style.functional}>
                <div onClick={() => {
                    if (completeTask) {
                        completeTask(id)
                    }
                }}>
                    <img src={complete} alt="delete"/>
                </div>
                <div onClick={() => {
                    setEditMode(!editMode)
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