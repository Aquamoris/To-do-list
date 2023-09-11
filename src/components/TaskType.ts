export type TaskType = {
    text: string,
    completed: boolean,
    edit?: Function,
    delete?: Function,
    complete?: Function
}