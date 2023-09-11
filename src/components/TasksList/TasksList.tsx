import React, {MouseEventHandler, useState} from 'react';
import style from './TasksList.module.css'
import {TaskType} from "../TaskType";
import Task from "../Task/Task";


const TaskList:React.FC = () => {

    const [tasks, setTasks] = useState<TaskType[]>([]);

    function addTask() {
        let text: string |null = prompt('New task for today!');

        if (text) {
            setTasks([...tasks, {text: text, completed: false, id: tasks.length}]);
        }
    }

    function clearList() {
        setTasks([]);
    }

    function editTask(index: number) {
        let newText: string | null = prompt('Edit your task here');
        let newTasks: Array<TaskType> = tasks.map(e => {
            if (e.id === index && newText) {
                e.text = newText;
            }
            return e;
        })
        setTasks(newTasks);
    }

    function completeTask(index: number) {
        let newTasks: Array<TaskType> = tasks.map(e => {
            if (e.id === index) {
                e.completed = !(e.completed);
            }
            return e;
        });
        setTasks(newTasks);
    }

    function deleteTask(index: number) {
        let newTasks: Array<TaskType> = tasks.filter(e => {
            if (e.id !== index) {
                return e
            }
        });
        newTasks.forEach((e, i) => {
            e.id = i;
        })
        setTasks(newTasks);
    }

    return (
        <div className={style.wrapper}>
            <div className={style.title}>Your Tasks</div>
            <div className={style.tasks}>
                { tasks.map((task) => ( <Task
                    id={task.id}
                    text={task.text}
                    completed={task.completed}
                    key={task.id}
                    editTask={editTask}
                    completeTask={completeTask}
                    deleteTask={deleteTask} />
                ) )}
            </div>
            <div className={style.functional}>
                <button className={style.functionalButton} onClick={addTask}>Add</button>
                <button className={style.functionalButton} onClick={clearList}>Clear</button>
            </div>
        </div>
    );
}

export default TaskList;