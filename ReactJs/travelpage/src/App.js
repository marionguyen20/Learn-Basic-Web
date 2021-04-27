import './App.css';
import NavBar from './components/NavBar'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/pages/Home';
import Service from './components/pages/Service'
import Product from './components/pages/Product'
import SignUp from './components/pages/Sign-up';

function App() {
  return (
    <>
    <Router>
      <NavBar />
      <Switch>
        <Route path = '/' exact component = {Home} />
        <Route path = '/Service' exact component = {Service} />
        <Route path = '/Product' exact component = {Product} />
        <Route path = '/Sign-up' exact component = {SignUp} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
