import logo from './logo.svg';
import { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Projects from './pages/Projects'
import Students from './pages/Students';


class App extends Component {

  state = {
    loggedInUser: false,
  }

  handleLogin = (value) => {
    this.setState({
      loggedInUser: value
    })
  }

render(){

  return (
    <div className="App">
      <NavBar
        loggedInUser={this.state.loggedInUser}/>
      <Switch>
        <Route exact path='/' component={ Home }/>
        <Route path='/signup' component={ Signup }/>
        <Route path='/login' render = { (props) => <Login {...props} handleLogin={this.handleLogin} />} />
        <Route path='/projects' component = {Projects}/>
        <Route path='/students' component = {Students}/>
        <Route/>
      </Switch>
    </div>
  );
}
}

export default App;
