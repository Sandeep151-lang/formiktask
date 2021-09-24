
import './App.css';
import Sidebars from './components/Sidebars';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import User from './components/User';
import CreateEdit from './components/CreateEdit';
import EditUser from './components/EditUser';
import ViewUser from './components/ViewUser';
import Dashboard from './components/Dashboard';




function App() {

  return (

    <>
      <Router>
        <Sidebars />
        <div className="container dashboard">
          <Dashboard />
        </div>
        <Switch>
          <div className="container component">
            {/* Add user component */}
            <Route  path="/create" component={CreateEdit} />

            {/* Edit The details of user component */}
            <Route  path="/edit/:id" component={EditUser} />

            {/* View particular user details component */}
            <Route path="/view/:id" component={ViewUser} />

            {/* listing user component */}
            <Route exact path="/" component={User} />
          </div>
        </Switch>
      </Router>
    </>
  );
}

export default App;
