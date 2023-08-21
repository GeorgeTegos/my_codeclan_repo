import Task from "./Task"

function TaskList({tasks}){
    const taskItems = tasks.map((task) => <Task task={task} key={task.id}/>)

    return (
        <h4>
        {taskItems}
        </h4>
    )
}

export default TaskList