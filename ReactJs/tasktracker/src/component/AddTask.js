import {useState} from 'react'

const AddTask = (props) => {

    const [text, setText] = useState('')
    const [day, setDay] = useState ('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (event) => {
        event.preventDefault()
        if(!text) {
            alert ("Please add a task")
            return
        }
        props.onAdd({text, day, reminder})
        //Set state back to original
        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className = 'add-form' onSubmit = {onSubmit}>
            <div className = 'form-control'>
                <label>Task</label>
                <input 
                    type = 'text' 
                    placeholder = 'Add Task' 
                    value = {text}
                    onChange = {(event) => (setText(event.target.value))}
                />
            </div>
            <div className = 'form-control'>
                <label>Day & Time</label>
                <input 
                    type = 'text' 
                    placeholder = 'Add Day & Time' 
                    value = {day}
                    onChange = {(event) => (setDay(event.target.value))}
                />
            </div>
            <div className = 'form-control form-control-check'>
                <label>Reminder</label>
                <input 
                    type = 'checkbox' 
                    checked = {reminder}
                    value = {reminder}
                    onChange = {(event) => (setReminder(event.currentTarget.checked))}
                />
            </div>
            <button className = 'btn btn-block'>Save Task</button>
        </form>
    )
}
export default AddTask