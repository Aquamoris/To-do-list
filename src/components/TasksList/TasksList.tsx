import React, {useEffect, useState} from 'react';
import style from './TasksList.module.css'
import {TaskType} from "../TaskType";
import Task from "../Task/Task";
import complete from "../../assets/img/complete.png"

const TaskList:React.FC = () => {

    const [tasks, setTasks] = useState<TaskType[]>([]);
    const [inputText, setInputText] = useState<string>('');
    const [menuStatus, setMenuStatus] = useState<'all' | 'completed' | 'notCompleted'>('all');
    const [tasksToShow, setTasksToShow] = useState<JSX.Element[]>([]);

    useEffect(() => {
        if (menuStatus === 'all') {
            const toShow = tasks.map(task => ( <Task
                id={task.id}
                text={task.text}
                completed={task.completed}
                key={task.id}
                editTask={editTask}
                completeTask={completeTask}
                deleteTask={deleteTask} />) );

            setTasksToShow( toShow );
        } else if (menuStatus === 'completed') {
            const completedTasks = tasks.filter((task) => task.completed)
            const toShow = completedTasks.map(task => (
                <Task
                    id={task.id}
                    text={task.text}
                    completed={task.completed}
                    key={task.id}
                    editTask={editTask}
                    completeTask={completeTask}
                    deleteTask={deleteTask} />
            ))

            setTasksToShow( toShow );
        } else {
            const notCompletedTasks = tasks.filter((task) => !(task.completed))
            const toShow = notCompletedTasks.map(task => (
                <Task
                    id={task.id}
                    text={task.text}
                    completed={task.completed}
                    key={task.id}
                    editTask={editTask}
                    completeTask={completeTask}
                    deleteTask={deleteTask} />
            ))

            setTasksToShow( toShow );
        }
    }, [menuStatus, tasks])

    function addTask() {
        if (inputText) {
            setInputText(inputText.trim());
            setTasks([...tasks, {text: inputText, completed: false, id: tasks.length}])
            setInputText('');
        }
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
                { tasksToShow }
            </div>
            <div className={style.inputWrapper}>
                <input className={style.input}
                       type="text"
                       value={inputText}
                       onChange={(e) => {
                    setInputText(e.target.value);
                }}/>
                <button className={style.functionalButton}
                        onClick={addTask}>
                    <img src={complete} alt="complete"/>
                </button>
            </div>
            <div className={style.menu}>
                <button className={menuStatus === 'all' ? style.menuButton + ' ' + style.active : style.menuButton}
                        onClick={() => setMenuStatus('all')}>
                    All
                </button>
                <button className={menuStatus === 'completed' ? style.menuButton + ' ' + style.active : style.menuButton}
                        onClick={() => setMenuStatus('completed')}>
                    Completed
                </button>
                <button className={menuStatus === 'notCompleted' ? style.menuButton + ' ' + style.active : style.menuButton}
                        onClick={() => setMenuStatus('notCompleted')}>
                    In process
                </button>
            </div>
        </div>
    );
}

export default TaskList;