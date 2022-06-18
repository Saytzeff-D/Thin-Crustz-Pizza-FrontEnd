import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { PaystackButton } from 'react-paystack';

function Menu(props) {
    const {url} = props
    const [ourMenu, setOurMenu] = useState([])
    const [checkOut, setCheckOut] = useState({userName: '', referenceNumber: '', email: '', mobile: '', location: '', menu: '', priceTag: ''})
    const [show, setShow] = useState(false);
    const handlePaystackSuccessAction =(ref)=>{
        axios.post(`${url}checkOut`, checkOut).then((res)=>{
            setShow(false)
            setCheckOut({userName: '', referenceNumber: '', email: '', mobile: '', location: '', menu: '', priceTag: ''})
            alert(res.data.msg)
        }).catch((err)=>{
            alert(err.message)
        })
    }
    const handlePaystackCloseAction =()=>{
        setShow(false)
        setCheckOut({userName: '', referenceNumber: '', email: '', mobile: '', location: '', menu: '', priceTag: ''})
    }

    const config = {
        reference: Math.ceil(Math.random()*1000000000),
        email: checkOut.email,
        amount: checkOut.priceTag + '00',
        publicKey: 'pk_test_bfe3a2fb617743847ecf6d9ea96e3153e2a1186d'
    }
    const componentProps = {
        ...config,
        text: 'CheckOut',
        onSuccess: (reference) => handlePaystackSuccessAction(reference),
        onClose: handlePaystackCloseAction,
    }

    useEffect(()=>{
        axios.get(`${url}viewMenu`).then((res)=>{
            console.log(res.data)
            setOurMenu(res.data)
        })
    }, [url])

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)

    const handleChange =(e)=>{
        setCheckOut({...checkOut, [e.target.name]: e.target.value})
    }
    const orderNow =(i)=>{
        handleShow()
        setCheckOut({...checkOut, referenceNumber: config.reference, menu: ourMenu[i].menu, priceTag: ourMenu[i].priceTag})
        console.log(checkOut)
    }
    return (
        <div>
            <div className="w3-container w3-padding-64 w3-xlarge" id="about">
            <div className="w3-content">
                <h1 className="w3-center h2">Our Menu</h1>
                <hr className='container w-25'/>
                <div className='row w-100'>
                    {
                        ourMenu.map((menu, i)=>(
                            <div className='col-md-4 my-2' key={i}>
                                <div className='card'>
                                <img alt='menuImage' src={menu.imageUrl} height="250px" />
                                <div className='card-body'>
                                    <div className='card-title d-flex justify-content-between'>
                                    <h4>{menu.menu}</h4>
                                    <h4>#{menu.priceTag}</h4>
                                    </div>
                                    <p className='card-text text-muted'>{menu.menuDesc}</p>
                                    <Button variant="warning" onClick={()=>orderNow(i)}>Order Now</Button>
                                </div>
                                </div>
                            </div>
                        ))
                    }    
                </div>        
            </div>
            </div>

            <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Place your order now!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <input onChange={handleChange} name="userName" value={checkOut.userName} className="form-control my-2 mx-1" type="text" placeholder="Fullname" />
            <input onChange={handleChange} name="email" value={checkOut.email} className="form-control my-2 mx-1" type="text" placeholder="E-mail" />
            <input onChange={handleChange} name="mobile" value={checkOut.mobile} className="form-control my-2 mx-1" type="text" placeholder="Mobile" />
            <input onChange={handleChange} name="location" value={checkOut.location} className="form-control my-2 mx-1" type="text" placeholder="Your Location" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <PaystackButton {...componentProps} className="btn btn-primary" />
        </Modal.Footer>
      </Modal>

        </div>
    );
}

export default Menu;