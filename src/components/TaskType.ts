export type TaskType = {
    id: number,
    text: string,
    completed: boolean,
    editTask?: Function,
    completeTask?: Function,
    deleteTask?: Function
}