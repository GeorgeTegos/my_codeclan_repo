function Task({task}){
    return (
        <>
        {task.priority == 'high'? <div className="high-priority">{task.name} </div>
        : <div className="low-priority">{task.name}</div>}  
        <hr />
        </>
    )
}

export default Task