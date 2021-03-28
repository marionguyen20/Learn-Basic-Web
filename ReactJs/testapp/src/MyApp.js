import React from "react"
import './index.css'
import TodoItem from "./TodoItem"
import todoData from "./ItemsData"

class MyApp extends React.Component {

    constructor () {
        super()
        this.state = {
            todos: todoData
        }
    }
    render() {
        const itemComponent = this.state.todos.map (
            items => <TodoItem key ={items.id} items = {items} />
        )
        return (
            <div className = "todo-list">
            {itemComponent}
         </div>
        );
    }
}
export default MyApp