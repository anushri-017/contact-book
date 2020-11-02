import React from 'react';
import history from '../history';
import {Route,Router,NavLink,Switch} from 'react-router-dom';
import ContactList from '../Components/ContactList';
import AddContacts from '../Components/AddContact';
import EditContacts from '../Components/EditContact';
import ShowContacts from '../Components/ShowContact';

function Navbar() {
  return (
    <div >
    <div className = "container">
    <Router history={history}>
    <Navigation/>
     <Main/>
    </Router>
    </div>
    </div>
  );
}

const Navigation = () => (
  <nav className="navbar navbar-expand-sm shadow  navbar-light bg-info navbar-fixed font-weight-bold ">
    <ul className="navbar-nav mr-2 py-1">
      <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/" >Contacts</NavLink></li>
      <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/addContacts">Add_Contact</NavLink></li>
      <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/editContacts/:id">Edit_Contact</NavLink></li>
    </ul>
  </nav>
);

const Main = () => (
  <Switch>
    <Route exact path='/' component={ContactList} />
    <Route exact path='/addContacts' component={AddContacts} />
    <Route exact path = '/editContacts/:id'  component = {EditContacts}/>
    <Route exact path = '/showcontact/:id'  component = {ShowContacts}/>
  </Switch>
)

export default  Navbar;