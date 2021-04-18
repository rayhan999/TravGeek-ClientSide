import React, { useContext, useEffect, useState } from 'react';
import './Book.css';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import Calendar from 'react-calendar';
import Sidebar from '../Sidebar/Sidebar';
import Spinner from '../Spinner/Spinner';

import 'react-calendar/dist/Calendar.css';
import ProcessPayment from '../ProcessPayment/ProcessPayment';

const Book = () => {
    // const { id } = useParams();
    // console.log(id);

    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [insertSuccess, setInsertSuccess] = useState(false);
    const [servicesName, setServicesName] = useState([])
    const [id, setId] = useState(null);
    const [serviceDetails, setServiceDetails] = useState(null);
    const [date, setDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [totalCost, setTotalCost] = useState(0);
    const [loader, setLoader] = useState(false);
    const [formSubmit, setFormSubmit] = useState(false);

    useEffect(() => {
        fetch(`https://powerful-earth-79300.herokuapp.com/services`)
            .then(res => res.json())
            .then(data => setServicesName(data))
    }, [])
    const handleClick = (e) => {
        setId(e.target.value);
        setLoader(true);
        console.log(e.target.value);

    }
    useEffect(() => {
        fetch(`https://powerful-earth-79300.herokuapp.com/services/${id}`)
            .then(res => res.json())
            .then(data => setServiceDetails(data))
    }, [id])

    const handleBlur = e => {
        setTotalCost(e.target.value * parseInt(serviceDetails.cost));
    }
    const handleChange = (date) => {

        // console.log(new Date.getDate(date));
        // console.log()
        const newDate = new Date(date)
        // console.log(serviceDetails.days);
        const addedDays = serviceDetails.days;
        newDate.setDate(newDate.getDate() + parseInt(addedDays));
        // console.log(newDate);
        setEndDate(newDate);
        setDate(date);
    }

    const handleFocus = (e) => {
        setInsertSuccess(false);

    }
    const onSubmit = data => {
        setFormSubmit(true);
    }
    const handlePaymentSuccess = (paymentId) => {
        const orderDetails = {
            userName: loggedInUser.name,
            userEmail: loggedInUser.email,
            totalCost: totalCost,
            // tourName: serviceDetails.name,
            // tourImage: serviceDetails.image,
            // tourLocation: serviceDetails.location,
            // paymentId: paymentId,
            tourId: serviceDetails._id,
            startingDate: date.toDateString(),
            endDate: endDate.toDateString(),
            orderTime: new Date(),
            status: 'pending'
        };
        console.log(orderDetails);
        const url = `https://powerful-earth-79300.herokuapp.com/addOrder`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
            .then(res => setInsertSuccess(true))
            .then(res => console.log('server side response', res))




    }
    return (
        <div className="d-flex" style={{ backgroundColor: "#cddef8" }}>
            <Sidebar></Sidebar>
            <div className="m-5 main-container" style={{ backgroundColor: "white", borderRadius: "10px", width: "80vw" }}>
                <div className="ml-5 mt-4 mr-5 ">
                    <h1>Book Tour</h1>
                    <div className={formSubmit ? 'd-none' : 'd-block'}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div class="input-group mb-3">
                                <label class="input-group-text" for="inputGroupSelect01">Packages</label>
                                <select class="form-control" id="inputGroupSelect01">
                                    <option selected disabled>Choose Destination...</option>

                                    {
                                        servicesName.length > 0 ?
                                            servicesName.map(serviceName => <option value={serviceName._id} onClick={handleClick}>{serviceName.name}</option>)
                                            :
                                            <option onClick={handleClick}>Loading...</option>
                                    }
                                </select>

                            </div>
                            <div>
                                {
                                    loader && serviceDetails === null && <Spinner></Spinner>
                                }
                            </div>
                            {/* <div>
                            {
                                serviceDetails !== null &&
                                <div>
                                    <p>Loaction: {serviceDetails.location}</p>
                                    <p>Cost: {serviceDetails.cost} $</p>
                                    <p>Number of Days: {serviceDetails.days}</p>
                                </div>
                            }
                        </div> */}

                            <div className="mb-3 d-flex">
                                {
                                    serviceDetails !== null &&
                                    <input className="form-control" type="number" name="person" id="person" placeholder="Total Number of Person" ref={register} onBlur={handleBlur} />
                                }
                            </div>
                            <div className="mb-3 d-flex">
                                {
                                    serviceDetails !== null &&
                                    <Calendar
                                        onChange={handleChange}
                                        value={new Date()}
                                    />
                                }


                                {
                                    date != null && totalCost >= 1 &&
                                    <div className="ml-5">
                                        <p>Name: {loggedInUser.name}</p>
                                        <p>Email: {loggedInUser.email}</p>
                                        <p>Loaction: {serviceDetails.location}</p>
                                        <p>Cost: {serviceDetails.cost} $</p>
                                        <p>Number of Days: {serviceDetails.days}</p>
                                        <p> Starting Date: {date.toDateString()}</p>
                                        <p>Ending Date: {endDate.toDateString()}</p>
                                        <p className="text-danger fw-bold">You have to pay {totalCost} $ </p>


                                    </div>
                                }

                            </div>







                            <input type="submit" className={totalCost >= 1 ? "btn  btn-block" : "btn  btn-block disabled"} value='Go To Payment' style={{ backgroundColor: 'rgb(252, 97, 7)', color: 'white' }} />

                        </form>
                    </div>
                    <div className={formSubmit ? 'd-block' : 'd-none'} >
                        <h2>Please Pay for me</h2>
                        <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Book;