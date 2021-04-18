import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
import AddAdmin from '../AddAdmin/AddAdmin';
import AddService from '../AddService/AddService';
import AdminHome from '../AdminHome/AdminHome';
import Book from '../Book/Book';
import BookingList from '../BookingList/BookingList';
import Home from '../Homepage/Home/Home';
import OrderList from '../OrderList/OrderList';
import Payment from '../Payment/Payment';
import Review from '../Review/Review';
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
                    <Route path="/admin/book">
                        <Book></Book>
                    </Route>
                    <Route path="/admin/review">
                        <Review></Review>
                    </Route>
                    <Route path="/admin/addService">
                        <AddService></AddService>
                    </Route>
                    <Route path="/admin/orderList">
                        <OrderList></OrderList>
                    </Route>
                    <Route path="/admin/makeAdmin">
                        <AddAdmin></AddAdmin>
                    </Route>
                    <Route path="/admin/bookingList">
                        <BookingList></BookingList>
                    </Route>
                    {/* <Route path="/admin/book/:id">
                        <Book></Book>
                    </Route> */}
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