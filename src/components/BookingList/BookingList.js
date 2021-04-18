import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Sidebar from '../Sidebar/Sidebar';
import BookingBox from './BookingBox';

const BookingList = () => {
    const [bookingList, setBookingList] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch(`https://powerful-earth-79300.herokuapp.com/bookingList?email=` + loggedInUser.email)
            .then(res => res.json())
            .then(data => setBookingList(data))
    }, [loggedInUser.email])
    return (
        <div className="d-flex" style={{ backgroundColor: "#cddef8" }}>
            <Sidebar></Sidebar>
            <div className="m-5 main-container" style={{ backgroundColor: "white", borderRadius: "10px", width: "80vw" }}>
                <div className="ml-5 mt-5 mr-5">
                    <h1>Booking List</h1>
                    <div class="row row-cols-1 row-cols-md-3 g-4 justify-content-center pb-5">
                        {
                            bookingList.map(booking => <BookingBox booking={booking}></BookingBox>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingList;