import { useState } from "react";
import TaskRadio from "./TaskRadio";

function TaskForm({tasks, setTasks}){
  const [name, setName] = useState("");
  const [priority, setPriority] = useState("");

  function handleChange(event){
    setPriority(event.target.value)
  }

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
            <label> Priority:</label>
            <TaskRadio priority={priority} handleChange={handleChange} />
        </div>
        <button onClick={createTask}>Add Task</button>
    </>
)
}
export default TaskForm