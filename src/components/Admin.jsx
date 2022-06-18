import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

function Admin(props) {
    const navigate = useNavigate()
    const goToHistory =()=>{
        navigate('/admin/orderHistory')
    }
    const goToMenu =()=>{
        navigate('/admin')
    }
    return (
        <div>
            <nav className="navbar navbar-warning bg-warning">
                <a href="/" className="navbar-brand text-white h1">thin CRUST PIZZA</a>
                <div className='d-flex justify-content-end'>
                    <button className='btn btn-light border-warning text-warning mx-1' onClick={goToMenu}>Add Menu</button>
                    <button className='btn btn-light border-warning text-warning mx-1' onClick={goToHistory}>Order History</button>
                </div>
            </nav>
            <p className='text-center h2'>Welcome Admin</p>
            <Outlet/>
        </div>
    );
}

export default Admin;