

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { createContext, useState } from 'react';
import Home from './components/Homepage/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/Homepage/Navbar/Navbar';
import Admin from './components/Admin/Admin';
import AdminHome from './components/AdminHome/AdminHome';
import Book from './components/Book/Book';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div className="App">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]} className="container">
        {/* <h3>email: {loggedInUser.email}</h3> */}

        <Router>

          <Switch>

            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            {/* <PrivateRoute path="/checkout/:id">
              <CheckOut></CheckOut>
            </PrivateRoute>
            <PrivateRoute path="/admin">
              <Admin></Admin>
            </PrivateRoute>
            <PrivateRoute path="/orders">
              <Orders></Orders>
            </PrivateRoute> */}
            <PrivateRoute path="/admin">
              {/* <Navbar></Navbar> */}
              {/* <Sidebar></Sidebar> */}
              <Admin></Admin>
            </PrivateRoute>
            {/* <PrivateRoute path="/book/:id">
              <Book></Book>
            </PrivateRoute> */}
            <PrivateRoute exact path="/book">
              <Book></Book>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>

        </Router>
        {/* <Footer></Footer> */}
      </UserContext.Provider>
    </div>
  );
}

export default App;
