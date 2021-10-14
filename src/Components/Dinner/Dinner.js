import React from 'react';
import './Dinner.css'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Dinner = () => {
    const [items,setItems]=useState([]);
    useEffect(()=>{
        fetch('/dinnerData.json')
        .then(res=>res.json())
        .then(data=>setItems(data))
    },[])
    
    return (
        <div className="container mt-3 bg-light">
            <h1 className="mt-3 text-center">Dinner <span className="text-danger">Item</span> </h1>
            <div className="row g-4">
                {items.map((pd) => (
                    
                    <div  key={pd.id} className="col-md-6 col-lg-4 col-sm-12">
                        
                        <div  className="card h-100">

                            <img src={pd.image} className="align-img img-fluid rounded-start w-75" alt="..." />


                            <div className="card-body">
                                <h5 className="card-title text-center">{pd.name}</h5>
                                <p className="text-center">Delisious Food</p>
                                <h6 className="card-text text-center"> Price : {pd.price}</h6>
                            </div>

                            <Link to={`/detail/${pd.id}`}>
                            <button className="btn btn-danger align mb-3">add to purchase</button>
                            </Link>
                        </div>
                        
                    </div>
                ))}
            </div>
            <div className="text-center m-4">
            <Link  to ="/home">Go Back</Link>
            </div>
            
        </div>
    );
};

export default Dinner;