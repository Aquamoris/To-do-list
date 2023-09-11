import React, {useState} from 'react';
import style from './TasksList.module.css'
import {TaskType} from "../TaskType";
import Task from "../Task/Task";


const TaskList:React.FC = () => {

    const [tasks, setTasks] = useState<TaskType[]>([]);

    function addTask() {
        let text:string|null = prompt('input');

        if (text) {
            setTasks([...tasks, {text: text, completed: false}]);
        }
    }

    function clearList() {
        setTasks([]);
    }

    return (
        <div className={style.wrapper}>
            <div className={style.tasks}>
                <div className={style.title}>Your Tasks</div>
                { tasks.map((task) => ( <Task
                    text={task.text}
                    completed={task.completed}
                /> ) )}
            </div>
            <div className={style.functional}>
                <button className={style.functionalButton} onClick={addTask}>Add</button>
                <button className={style.functionalButton} onClick={clearList}>Clear</button>
            </div>
        </div>
    );
}

export default TaskList;