import React from 'react';
import { Link } from 'react-router-dom';
import './Lunch.css'

const Lunch = (props) => {
    const {id,name,price,image}=props.item;
    
    
    return (
        <div className="col-lg-4 mb-3 ">

            <div className="card h-100 ">

                <img src={image} className="align-img img-fluid rounded-start w-75" alt="..." />


                <div className="card-body">
                    <h5 className="card-title text-center">{name}</h5>
                    <p className="text-center">Delisious Food</p>
                    <h6 className="card-text text-center"> Price : {price}</h6>
                </div>
                <Link to={`/detail/${id}`}>
                    <button className="btn btn-danger align mb-3">add to purchase</button>
                </Link> 

                </div>

        </div>
    );
};

export default Lunch;