import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';
import { CDBInput, CDBContainer } from "cdbreact";
import ReactStars from "react-rating-stars-component";
import { UserContext } from '../../App';

const Review = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [insertSuccess, setInsertSuccess] = useState(false);
    const [rating, setRating] = useState(0);
    const ratingChanged = (newRating) => {
        console.log(newRating);
        setRating(newRating);
    };
    const handleFocus = (e) => {
        setInsertSuccess(false);

    }
    const onSubmit = data => {
        console.log(data);
        const eventData = {
            name: data.name,
            org: data.org,
            description: data.description,
            rating: rating,
            photo: loggedInUser.photo
        };
        console.log(eventData);
        const url = `http://localhost:8000/addReview`;

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
                <div className="ml-5 mt-5 mr-5">
                    <h1>Review</h1>
                    {/* <form onSubmit={handleSubmit(onSubmit)} >
                        <CDBInput material label="Your Name" type="text" name="name" id="pdName" ref={register} onFocus={handleFocus} />
                        <CDBInput material type="text" name="org" id="org" label="Your Position & Organization" ref={register} onFocus={handleFocus} />
                        <CDBInput
                            label="Your Description"
                            type="textarea"
                            material
                            rows={2}
                            cols={10}
                            ref={register} onFocus={handleFocus}
                            name="description" id="description"
                        />
                        <div className="d-flex alilgn-items-center">

                            <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                size={40}
                                isHalf={true}
                                emptyIcon={<i className="far fa-star"></i>}
                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                fullIcon={<i className="fa fa-star"></i>}
                                activeColor="#ffd700"
                            />
                        </div>
                        <CDBInput material type="submit" value="Submit" />



                    </form> */}


                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3 d-flex">

                            <input className="form-control" name="name" id="pdName" placeholder="Name" ref={register} onFocus={handleFocus} />
                        </div>
                        <div className="mb-3 d-flex">

                            <input className="form-control" name="org" id="org" placeholder="Position,Organization" ref={register} onFocus={handleFocus} />
                        </div>
                        <div class="mb-3 d-flex">

                            <textarea class="form-control" id="exampleFormControlTextarea1" name="description" rows="3" placeholder="Description" ref={register} onFocus={handleFocus}></textarea>
                        </div>
                        <div class="mb-3 d-flex align-items-center" >
                            <p style={{ marginTop: '20px' }}>Rating:</p>
                            <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                size={40}
                                isHalf={true}
                                emptyIcon={<i className="far fa-star"></i>}
                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                fullIcon={<i className="fa fa-star"></i>}
                                activeColor="#ffd700"
                            />
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

export default Review;