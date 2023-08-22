function Task({task}){
    return (
        <>
        <h3> Name of the task </h3>
        {task.name}
        <br />
        <h3> Priority </h3>
        {task.priority == 'high'? <div className="high-priority">{task.priority} </div>
        : <div className="low-priority">{task.priority}</div>
    }
        
        <hr />
        </>
    )
}

export default Task