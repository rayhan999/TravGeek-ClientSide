import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import OrderBox from './OrderBox';

const OrderList = () => {
    const [orderList, setOrderList] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:8000/orderList`)
            .then(res => res.json())
            .then(data => setOrderList(data))
    }, [])
    return (
        <div className="d-flex" style={{ backgroundColor: "#cddef8" }}>
            <Sidebar></Sidebar>
            <div className="m-5 main-container" style={{ backgroundColor: "white", borderRadius: "10px", width: "80vw" }}>
                <div className="ml-5 mt-5 mr-5">
                    <h1>Order List</h1>
                    <div class="row row-cols-1 row-cols-md-3 g-4 justify-content-center pb-5">
                        {
                            orderList.map(order => <OrderBox order={order}></OrderBox>)
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default OrderList;