import Header from './component/Header'
import Footer from './component/Footer'
import Tasks from './component/Tasks'
import AddTask from './component/AddTask'
import About from './component/About'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {useEffect, useState} from 'react'

function App() {

  const [showTasks, setShowTasks] = useState(false)
  const [tasks, setTasks] = useState([])

  //Use EffectHook to get tasks
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])

  //Fetch data from server
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks")
    const data = await res.json()
    return data
  }

  //Get single task from server
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    return data
  }

  //Delete Task
  //Filter => get data if true condition
  const onDelete = async (id) => {
    //Delete on server
    await fetch(`http://localhost:5000/tasks/${id}`,
    {
      method: 'DELETE',
    })

    setTasks (tasks.filter(
      (task) => task.id !== id
    ))
  }

  //Toggle Reminder
  const toggleReminder = async (id) => {
    //Get data need to toggle
    const taskToToggle = await fetchTask(id)

    //Update this task
    const updateTask = {...taskToToggle, reminder: !taskToToggle.reminder}
    
    //Update into server
    const res = await fetch (`http://localhost:5000/tasks/${id}`,{
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updateTask)
    })

    //Get json file
    const data = await res.json()

    setTasks(
      tasks.map((task) => 
        task.id === id ? {...task, reminder: data.reminder} : task
      )
    )
  }

  //Add Task
  const addTask = async (task) => {
    const res = await fetch ('http://localhost:5000/tasks',{
      method: 'POST', //add -> post request
      headers: {
        //Specify content type 
        'Content-type': 'application/json'
      },
      //Transfer js object into JSON String
      body: JSON.stringify(task), 
    })

    const data = await res.json()

    setTasks ([...tasks, data])

    //Generate random id
    // const id = Math.floor(Math.random()*100) + 1 => No need to create id
    //Create new task
    // const newTask = {id,...task}
    //Settask to add new task
    // setTasks([...tasks, newTask]) //...tasks->get all informations in tasks
  }
//Wrap everything in Router to use Route
   return (
    <Router>
      <div className="container">
      <Header 
        // onAdd = {() => setShowTasks(!showTasks)} 
        onAdd = {() => setShowTasks(!showTasks)}
        onShowTask = {showTasks} 
        title = 'Task Tracker'
      />
        <Route path = '/' exact render = {
        (props) => (
          <>
            {showTasks && <AddTask onAdd = {addTask} />}
            {
              tasks.length > 0 ? (
                <Tasks 
                  tasks = {tasks} 
                  onDelete = {onDelete} 
                  onToggle = {toggleReminder} 
                />
              ) : "No tasks to show"
            } 
          </>
        )}/>
      <Route path='/about' component = {About} />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
