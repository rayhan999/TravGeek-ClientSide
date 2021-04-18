import React, { useContext, useEffect, useState } from 'react';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import { Link, NavLink } from 'react-router-dom';
import { UserContext } from '../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setAdmin] = useState(null);
    const [sidebarOpen, setSidebarOpen] = useState(true);
    console.log(loggedInUser.email)
    useEffect(() => {
        fetch(`http://localhost:8000/isAdmin?email=` + loggedInUser.email)
            .then(res => res.json())
            .then(data => setAdmin(data))
    }, [loggedInUser.email])
    const handleClick = () => {

    }
    return (
        <div
            style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}
        >
            <CDBSidebar textColor="#fff" backgroundColor="#333" >
                <CDBSidebarHeader prefix={<i onClick={() => setSidebarOpen(!sidebarOpen)} className="fa fa-bars fa-large"></i>}>
                    <Link
                        to="/"
                        className=""
                        style={{ color: 'inherit' }}
                    >
                        TravGeek
          </Link>
                </CDBSidebarHeader>

                <CDBSidebarContent className="sidebar-content">
                    <div className={sidebarOpen ? " text-center d-block" : " text-center d-none"} >

                        <img src={loggedInUser.photo} style={{ width: "100px", borderRadius: "50px" }} alt="" />
                        <p>{loggedInUser.name}</p>
                    </div>
                    <CDBSidebarMenu>
                        {
                            isAdmin ?
                                <div>
                                    <NavLink exact to="/admin" activeClassName="activeClicked">
                                        <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
                                    </NavLink>
                                    <NavLink exact to="/admin/OrderList" activeClassName="activeClicked">
                                        <CDBSidebarMenuItem icon="shopping-basket">Order List</CDBSidebarMenuItem>
                                    </NavLink>
                                    <NavLink exact to="/admin/addService" activeClassName="activeClicked">
                                        <CDBSidebarMenuItem icon="plus-circle">Add Service</CDBSidebarMenuItem>
                                    </NavLink>
                                    <NavLink exact to="/admin/makeAdmin" activeClassName="activeClicked">
                                        <CDBSidebarMenuItem icon="user-plus">Make Admin</CDBSidebarMenuItem>
                                    </NavLink>
                                    <NavLink exact to="/admin/manageServices" activeClassName="activeClicked">
                                        <CDBSidebarMenuItem icon="list-alt">Manage Services </CDBSidebarMenuItem>
                                    </NavLink>
                                </div>
                                :
                                <div>
                                    <NavLink to="/admin/book" activeClassName="activeClicked">
                                        <CDBSidebarMenuItem icon="shopping-cart">Book</CDBSidebarMenuItem>
                                    </NavLink>
                                    <NavLink exact to="/admin/bookingList" activeClassName="activeClicked">
                                        <CDBSidebarMenuItem icon="shopping-bag">Booking List</CDBSidebarMenuItem>
                                    </NavLink>
                                    <NavLink exact to="/admin/review" activeClassName="activeClicked">
                                        <CDBSidebarMenuItem icon="comment">Review</CDBSidebarMenuItem>
                                    </NavLink>
                                </div>
                        }

                        <NavLink
                            exact
                            to="/hero404"
                            target="_blank"
                            activeClassName="activeClicked"
                        >

                        </NavLink>
                    </CDBSidebarMenu>
                </CDBSidebarContent>

                <NavLink exact to="/" activeClassName="activeClicked">
                    <CDBSidebarFooter style={{ textAlign: 'center' }}>
                        <div
                            style={{
                                float: 'right',
                            }}
                        >
                            <CDBSidebarMenuItem icon="power-off" onClick={() => setLoggedInUser({})} style={{ right: '0', backgroundColor: 'white', color: 'black', borderRadius: '70px' }}>

                            </CDBSidebarMenuItem>
                        </div>
                    </CDBSidebarFooter>
                </NavLink>
            </CDBSidebar>
        </div>
    );
};

export default Sidebar;

