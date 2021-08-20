import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './assest/css/bootstrap.min.css';
import './assest/css/main.css'
import Nav from './components/Nav';
import Login from './components/Login';
import Register from './components/Register';
import Create from './components/Create';
import AllTasks from './components/AllTasks';
import Edit from './components/Edit';


export default function App() {
  return (
    <Router>
      <Nav/>
      <Route exact path='/' component={Login}/>
      <Route exact path='/register' component={Register}/>
      <Route exact path='/create' component={Create}/>
      <Route exact path='/tasks' component={AllTasks}/>
      <Route exact path='/edit/:id' component={Edit}/>
      
    </Router>
  )
}