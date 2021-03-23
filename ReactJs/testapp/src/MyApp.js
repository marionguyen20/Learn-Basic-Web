import React from "react"
import './index.css'
import TodoItem from "./TodoItem"

function MyApp () {
    return (
        <div className = "todo-list">
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </div>
    )
}
export default MyApp