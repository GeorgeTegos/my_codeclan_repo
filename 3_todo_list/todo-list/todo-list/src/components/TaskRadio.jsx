import React from "react"

function TaskRadio(props){

    return (
        <>
            <div>
                <label>
                    <input type="radio" value="high" onChange={props.handleChange} checked={props.priority === 'high'} />
                    High
                </label>
                <br />
                <label>
                    <input type="radio" value="low" onChange={props.handleChange} checked={props.priority === 'low'} />
                    Low
                </label>
            </div>
            </>
    )
}

export default TaskRadio