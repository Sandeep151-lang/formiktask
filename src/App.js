import React from 'react'
import Sidebars from './components/Sidebars'
import './App.css'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Dashboard from './components/Dashboard';
import User from './components/User';
import EditUser from './components/EditUser';
import ViewUser from './components/ViewUser';
import { AddUser } from './components/AddUser';


const App = () => {
  return <>
    <div id="wrapper">
      <Router>
        <Sidebars />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content" >
            <Dashboard />
            <Switch>
              <Route exact path="/" component={User} />
              <Route exact path="/create" component={AddUser} />
              <Route exact path="/edit/:id" component={EditUser} />
              <Route exact path="/view/:id" component={ViewUser} />
              <Redirect to='/' />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  </>
}
export default App
