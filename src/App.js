import './App.css';
import React, { Component } from 'react';
import Navbar from './Components/Layout/Navbar';
import Dashboard  from './Components/Dashboard/Dashboard';
import ProjectDetails from './Components/projects/ProjectDetails';
import SignIn from './Components/auth/SignIn';
import SignUp from './Components/auth/SignUp';
import CreateProject from './Components/projects/CreateProject'
import{BrowserRouter as Router,Switch,Route} from 'react-router-dom'
 
 class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Navbar/>

        <Switch>
        <Route exact path='/' component={Dashboard}/>

        <Route path='/project/:id' component={ProjectDetails}/>
        <Route path="/login" component={SignIn}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/create" component={CreateProject}/>

        </Switch>
      </div>
      </Router>
    )
  }
}

export default App


