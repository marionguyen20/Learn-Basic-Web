import './App.css';
import NavBar from './components/NavBar'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
      <NavBar />
      <Switch>
        <Route path = '/' exact />
      </Switch>
    </Router>
    </>
  );
}

export default App;
