import React from 'react';

function TodoItem (props) {
    return (
        <div className = "todo-item">

            <input 
                type = "checkbox" 
                checked = {props.items.completed} 
                onChange = {() => console.log("Hello World")}
            />
            <p>{props.items.text}</p>

        </div>
    )
}
export default TodoItem
