import React, { useEffect, useState } from 'react';

const BookingBox = (props) => {
    console.log(props.booking)
    const { _id, tourId, totalCost, startingDate, endDate, orderTime, status } = props.booking;
    const [serviceDetails, setServiceDetails] = useState(null);
    useEffect(() => {
        fetch(`https://powerful-earth-79300.herokuapp.com/services/${tourId}`)
            .then(res => res.json())
            .then(data => setServiceDetails(data))
    }, [tourId])
    return (
        <div class="col mb-3">
            {serviceDetails !== null &&
                <div class="card  h-60 shadow  bg-white  border-0 rounded">
                    {/* <h1>{tourId}</h1> */}

                    <img src={`data:image/png;base64,${serviceDetails.image.img}`} class="card-img-top" alt="..." />

                    <div class="card-body">

                        <h2 class="card-title">{serviceDetails.name}</h2>
                        <div className="d-flex justify-content-between">

                            <div ><p>Total Cost: {totalCost} $</p></div>


                        </div>
                        <div class=" input-group">
                            <label class="input-group-text " for="inputGroupSelect01">Status: {status}</label>
                            {/* <select class="form-control" id="inputGroupSelect01">
                                <option selected disabled ></option>
                                <option value="pending"  className="text-primary ">Pending</option>
                                <option value="ongoing"  className="text-warning " >On Going</option>
                                <option value="done"  className="text-success">Done</option>
                            </select> */}
                        </div>
                        <div className="d-flex pt-3 mt-3 mb-3 justify-content-center" style={{ textAlign: 'center', backgroundColor: "gray", borderRadius: "10px" }}>

                            <p className="pl-2 text-white">{startingDate}</p>
                            <p className="pl-2 pr-2 text-white">-</p>

                            <p className="pl-2 text-white">{endDate}</p>
                        </div>


                    </div>


                </div>
            }
        </div>
    );
};

export default BookingBox;