import React from 'react';
import logo from '../../logo2.png'

const Header = () => {
    return (
        <div>


            <div className="d-flex justify-content-between">
                <div className="m-2 p-3">
                    <img className="w-25" src={logo} alt="" />
                </div>
                <div className="m-3">
                    <button className="btn btn-dark m-2 ">Sign In</button>
                    <button className="btn btn-danger m-2 ">Sign up</button>
                </div>
            </div>
            <div className="banner">
                <div className="banner-item">
                    <h1 className="fw-bold text-center">Best Food Waiting For You</h1>
                    <input className="pt-2 " type="search" name="" id="" />
                    <button className="btn btn-danger m-1">Serach</button>
                </div>
            </div>
        </div>
    );
};

export default Header;