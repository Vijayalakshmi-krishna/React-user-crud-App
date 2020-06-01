import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AddUser from './Adduser';
import ViewUser from './Viewuser'
import EditUser from './Edituser'
import DeleteUser from './Deleteuser'

function App() {
  return (
    <Router>
   
    <div className="App">
      <h1>User application</h1>
      
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#"><Link to="adduser">Create User</Link></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><Link to="edituser">Edit User</Link></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><Link to="deleteuser">Delete User</Link></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><Link to="viewuser">List User</Link></a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container mt-3">
          <Switch>
           
            <Route exact path="/adduser" component={AddUser} />
            <Route exact path="/viewuser" component={ViewUser} />
            <Route exact path="/edituser" component={EditUser} />
            <Route exact path="/deleteuser" component={DeleteUser} />
            
          </Switch>
        </div>
      
    </div>
    </Router>
  );
}

export default App;
