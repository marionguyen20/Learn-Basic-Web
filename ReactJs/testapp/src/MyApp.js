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
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(id) {
        this.setState(prevState => {
            const updatedTodo = prevState.todos.map (todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedTodo
            }
        })
    }
    render() {
        const itemComponent = this.state.todos.map (
            items => <TodoItem key ={items.id} items = {items} handleChange = {this.handleChange} />
        )
        return (
            <div className = "todo-list">
                {itemComponent}
            </div>
        );
    }
}
export default MyApp