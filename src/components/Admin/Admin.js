import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
import AdminHome from '../AdminHome/AdminHome';
import Home from '../Homepage/Home/Home';
import Payment from '../Payment/Payment';
import Sidebar from '../Sidebar/Sidebar';

const Admin = () => {
    return (
        <div >

            <Router>

                <Switch>
                    <Route exact path="/">
                        <Home></Home>
                    </Route>
                    <Route exact path="/admin">
                        <AdminHome></AdminHome>
                    </Route>
                    <Route path="/admin/payment">
                        <Payment></Payment>
                    </Route>
                    {/* <Route path="/admin/addProduct">
        <AddProduct></AddProduct>
    </Route>
    <Route path="/admin/manageProduct">
        <ManageProduct></ManageProduct>
    </Route> */}
                </Switch>

            </Router>

        </div>
    );
};

export default Admin;