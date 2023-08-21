function Task({task}){
    return (
        <>
        {task.name}
        <br />
        {task.priority}
        <hr />
        </>
    )
}

export default Task