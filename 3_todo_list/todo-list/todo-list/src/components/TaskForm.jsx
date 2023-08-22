import { useState } from "react";

function TaskForm({tasks, setTasks}){
  const [name, setName] = useState("");
  const [priority, setPriority] = useState("");

  const createTask = () => {
    const newTask = {
      id: tasks.length + 1,
      name: name,
      priority: priority,
    };

    setTasks([newTask, ...tasks]);

    setName("")
    setPriority("")
}
return(
    <>
    <h2>Add Task</h2>
        <div>
            <label>Task:</label>
            <input onChange={(e) => setName(e.target.value)} value={name}/>
        </div>
        <div>
            <label> Priority</label>
            <input onChange={(e) => setPriority(e.target.value)} value={priority}/>
        </div>
        <button onClick={createTask}>Add Task</button>
    </>
)
}
export default TaskForm