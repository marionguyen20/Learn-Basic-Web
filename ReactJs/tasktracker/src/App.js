import Header from './component/Header'
import Tasks from './component/Tasks'
import AddTask from './component/AddTask'
import {useState} from 'react'

function App() {

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctor Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:00pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30pm',
        reminder: false,
    }
  ])

  //Delete Task
  //Filter => get data if true condition
  const onDelete = (id) => {
    setTasks (tasks.filter(
      (task) => task.id !== id
    ))
  }

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => 
        task.id === id ? {...task, reminder: !task.reminder} : task
      )
    )
  }

  //Add Task
  const addTask = (task) => {
    //Generate random id
    const id = Math.floor(Math.random()*100) + 1
    
    //Create new task
    const newTask = {id,...task}
    
    //Settask to add new task
    setTasks([...tasks, newTask]) //...tasks->get all informations in tasks
  }

  return (
    <div className="container">
      <Header title = 'Task Tracker'/>
      <AddTask onAdd = {addTask} />
      {
        tasks.length > 0 ? (
          <Tasks 
            tasks = {tasks} 
            onDelete = {onDelete} 
            onToggle = {toggleReminder} 
          />
        ) : "No tasks to show"
      }
    </div>
  );
}

export default App;
