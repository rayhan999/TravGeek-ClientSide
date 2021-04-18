import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import Sidebar from '../Sidebar/Sidebar';

const AddAdmin = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [insertSuccess, setInsertSuccess] = useState(false);
    const onSubmit = data => {
        const eventData = {
            email: data.email

        };
        console.log(eventData);
        const url = `http://localhost:8000/addAdmin`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => setInsertSuccess(true))
            .then(res => console.log('server side response', res))
    }
    return (
        <div className="d-flex" style={{ backgroundColor: "#cddef8" }}>
            <Sidebar></Sidebar>
            <div className="m-5 main-container" style={{ backgroundColor: "white", borderRadius: "10px", width: "80vw" }}>
                <div className="ml-5 mt-4 mr-5 ">
                    <h1>Add Admin</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3 d-flex">

                            <input className="form-control" type="email" name="email" id="email" placeholder="Enter Email" ref={register} />
                        </div>
                        <input type="submit" className="btn  btn-block mb-5" value='Add Admin' style={{ backgroundColor: 'rgb(252, 97, 7)', color: 'white' }} />

                    </form>
                    {
                        insertSuccess && <p className="text-success">Product Inserted Successfully</p>
                    }


                </div>
            </div>
        </div>
    );
};

export default AddAdmin;