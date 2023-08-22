import { useState } from "react";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";

function TaskContainer(){

    const [tasks,setTasks] = useState ([
        {
        id: 1,
        name: "Do this program",
        priority: "high"
        },
        {
            id: 2,
            name : "Do this too",
            priority: "low"
        }
    ]);

    return(
        <>
        <h1>Hello</h1>
        <TaskForm tasks={tasks} setTasks={setTasks} />
        <TaskList tasks={tasks}/>
        
        </>
    )
}

export default TaskContainer