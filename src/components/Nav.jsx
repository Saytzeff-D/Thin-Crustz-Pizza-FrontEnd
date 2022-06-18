import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

function Nav(props) {
    const navigate = useNavigate()
    return (
        <div>
            <div className="w3-top w3-hide-small">
            <div className="w3-bar w3-xlarge w3-black w3-opacity w3-hover-opacity-off" id="myNavbar">
                <a href="/" className="w3-bar-item w3-button">HOME</a>
                <a href="/menu" className="w3-bar-item w3-button">MENU</a>
                <a href="/about" className="w3-bar-item w3-button">ABOUT</a>
                <a href="/googleMap" className="w3-bar-item w3-button">CONTACT</a>
            <div className="d-flex justify-content-end mt-2">
                <button className="btn btn-warning text-white" onClick={()=>{navigate('/admin')}}>Admin</button>
            </div>
            </div>
            </div>
            <Outlet/>
        </div>
    );
}

export default Nav;