import React, { useContext, useState } from 'react';
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
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const handleClick = () => {

    }
    return (
        <div
            style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}
        >
            <CDBSidebar textColor="#fff" backgroundColor="#333">
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
                        <NavLink exact to="/admin" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/admin/payment" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="table">Tables</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/analytics" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="chart-line">
                                Analytics
              </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="shopping-cart">Book</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="shopping-bag">Booking List</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="comment">Review</CDBSidebarMenuItem>
                        </NavLink>

                        <NavLink
                            exact
                            to="/hero404"
                            target="_blank"
                            activeClassName="activeClicked"
                        >
                            <CDBSidebarMenuItem icon="exclamation-circle">
                                404 page
              </CDBSidebarMenuItem>
                        </NavLink>
                    </CDBSidebarMenu>
                </CDBSidebarContent>

                <CDBSidebarFooter style={{ textAlign: 'center' }}>
                    <div
                        style={{
                            padding: '20px 5px',
                        }}
                    >
                        Sidebar Footer
          </div>
                </CDBSidebarFooter>
            </CDBSidebar>
        </div>
    );
};

export default Sidebar;

