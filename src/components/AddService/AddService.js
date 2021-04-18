import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';
import { UserContext } from '../../App';

const AddService = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [insertSuccess, setInsertSuccess] = useState(false);
    const [file, setFile] = useState(null);
    const handleFile = (e) => {
        setFile(e.target.files[0]);
    }
    const handleFocus = (e) => {
        setInsertSuccess(false);

    }
    const onSubmit = data => {
        // console.log(data);

        const eventData = {
            name: data.name,
            cost: data.cost,
            days: data.days,
            location: data.location,
            description: data.description
        };
        console.log(eventData);
        const formData = new FormData();
        formData.append('file', file);
        formData.append('name', eventData.name);
        formData.append('cost', eventData.cost);
        formData.append('days', eventData.days);
        formData.append('location', eventData.location);
        formData.append('description', eventData.description);

        fetch(`https://powerful-earth-79300.herokuapp.com/addServices`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className="d-flex" style={{ backgroundColor: "#cddef8" }}>
            <Sidebar></Sidebar>
            <div className="m-5 main-container" style={{ backgroundColor: "white", borderRadius: "10px", width: "80vw" }}>
                <div className="ml-5 mt-4 mr-5 ">
                    <h1>Add Service</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3 d-flex">

                            <input className="form-control" name="name" id="pdName" placeholder="Name" ref={register} onFocus={handleFocus} />
                        </div>
                        <div className="mb-3 d-flex">

                            <input className="form-control" type="number" name="cost" id="cost" placeholder="Cost per person" ref={register} onFocus={handleFocus} />
                        </div>
                        <div className="mb-3 d-flex">

                            <input className="form-control" type="number" name="days" id="days" placeholder="Number of Days" ref={register} onFocus={handleFocus} />
                        </div>
                        <div className="mb-3 d-flex">

                            <input className="form-control" type="text" name="location" id="location" placeholder="Location Address" ref={register} onFocus={handleFocus} />
                        </div>
                        <div class="mb-3 d-flex">

                            <textarea class="form-control" id="exampleFormControlTextarea1" name="description" rows="3" placeholder="Description" ref={register} onFocus={handleFocus}></textarea>
                        </div>
                        <div className="mb-3 d-flex">

                            <input type="file" className="form-control" onChange={handleFile} name="image" id="image" placeholder="Location Address" ref={register} onFocus={handleFocus} />
                        </div>



                        <input type="submit" className="btn  btn-block mb-5" value='Add Product' style={{ backgroundColor: 'rgb(252, 97, 7)', color: 'white' }} />

                    </form>
                    {
                        insertSuccess && <p className="text-success">Product Inserted Successfully</p>
                    }
                </div>
            </div>
        </div>

    );
};

export default AddService;