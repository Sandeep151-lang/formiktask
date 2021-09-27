import React from 'react'
import Sidebars from './components/Sidebars'
import './App.css'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Dashboard from './components/Dashboard';
import User from './components/User';
import CreateEdit from './components/CreateEdit'
import EditUser from './components/EditUser';
import ViewUser from './components/ViewUser';


const App = () => {
  return <>
    <body id="page-top">
      <div id="wrapper">
        <Router>
          <Sidebars />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content" >
              <Dashboard />
              <Switch>
                <Route exact path="/" component={User} />
                <Route exact path="/create" component={CreateEdit} />
                <Route exact path="/edit/:id" component={EditUser} />
                <Route exact path="/view/:id" component={ViewUser} />
                <Redirect to='/' />
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    </body>
  </>
}
export default App
