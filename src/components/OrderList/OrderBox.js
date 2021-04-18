import React, { useEffect, useState } from 'react';

const OrderBox = (props) => {
    // console.log(props.order);
    const { _id, tourId, totalCost, startingDate, endDate, orderTime, status } = props.order;
    const [serviceDetails, setServiceDetails] = useState(null);
    useEffect(() => {
        fetch(`https://powerful-earth-79300.herokuapp.com/services/${tourId}`)
            .then(res => res.json())
            .then(data => setServiceDetails(data))
    }, [tourId])

    const handleClick = e => {
        console.log(e.target.value);
        const url = `https://powerful-earth-79300.herokuapp.com/updateOrder/${_id}/${e.target.value}`;
        console.log(url)
        fetch(url, {
            method: 'POST'
        })
            .then(res => res.json())
        // .then(data => setDeleted(true))
    }
    return (
        <div class="col mb-3">
            {serviceDetails !== null &&
                <div class="card  h-60 shadow  bg-white  border-0 rounded">
                    {/* <h1>{tourId}</h1> */}

                    <img src={`data:image/png;base64,${serviceDetails.image.img}`} class="card-img-top" alt="..." />

                    <div class="card-body">

                        <h2 class="card-title">{serviceDetails.name}</h2>
                        <div className="d-flex justify-content-between">

                            <div className="col-md-5"><p>{totalCost} $</p></div>


                        </div>
                        <div class=" input-group">
                            <label class="input-group-text " for="inputGroupSelect01">{status}</label>
                            <select class="form-control" id="inputGroupSelect01">
                                <option selected disabled ></option>
                                <option value="pending" onClick={handleClick} className="text-primary ">Pending</option>
                                <option value="ongoing" onClick={handleClick} className="text-warning " >On Going</option>
                                <option value="done" onClick={handleClick} className="text-success">Done</option>
                            </select>
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

export default OrderBox;