import React, { useState } from 'react';
import axios from 'axios'

const AddMenu = (props) => {
  const {url} = props
  const [serverMessage, setServerMessage] = useState({status: '', msg: ''})
  const [menuPic, setMenuPic] = useState('')
  const [myMenu, setMyMenu] = useState({menu: '', menuDesc: '', priceTag: '', imageUrl: ''})

  const pickFile =(e)=>{
    const reader = new FileReader()
    reader.readAsDataURL(e.target.files[0])
    reader.onload=()=>{
      console.log(reader.result)
      setMenuPic(reader.result)
    }
  }
  const addNewMenu =(e)=>{
    e.preventDefault()
    myMenu.imageUrl = menuPic
      console.log(myMenu)
      axios.post(`${url}addMenu`, myMenu).then((res)=>{
        console.log(res)
        setServerMessage({status: res.status, msg: res.data.msg})
        setMyMenu({menu: '', menuDesc: '', priceTag: '', imageUrl: ''})
      }).catch((err)=>{
        console.log(err.message)
        setServerMessage({status: err.response.status, msg: err.response.data.msg})
      })
  }
  const handleChange =(e)=>{
    setMyMenu({...myMenu, [e.target.name]: e.target.value})
  }

  return (
    <form onSubmit={addNewMenu} className="container w-50 border border-warning shadow pb-5 px-5">
        <p className='text-center h1'>Add Menu</p>
        {
          serverMessage.status === 302
          ?
          <div className="alert alert-danger alert-dismissible">
              <button type="button" className="close" data-dismiss="alert" onClick={()=>{setServerMessage({})}}>&times;</button>
              <strong>ErrorMessage!</strong> {serverMessage.msg}.
          </div>
          :
          ''
        }
        {
          serverMessage.status === 202
          ?
          <div className="alert alert-success alert-dismissible">
            <button type="button" className="close" data-dismiss="alert" onClick={()=>{setServerMessage({})}}>&times;</button>
            <strong>Success!</strong> {serverMessage.msg}.
          </div>
          :
          ''
        }
      <label htmlFor="menu">Menu</label>
      <input
        onChange={handleChange}
        className='form-control m-1'
        name="menu"
        type="text"
        placeholder='Enter Menu'
        value={myMenu.menu}
        />

      <label htmlFor="menuDesc">Menu Description</label>
      <input
        onChange={handleChange}
        className='form-control m-1'
         name="menuDesc" 
         type="text" 
         placeholder='Enter the menu Desc...'
         value={myMenu.menuDesc}
        />

      <label htmlFor="priceTag">Price Tag</label>
      <input
        onChange={handleChange} 
        className='form-control m-1'
        name="priceTag" 
        type="number" 
        placeholder='Enter the price tag'
        value={myMenu.priceTag}
      />
      
      <label htmlFor="imageUrl">Image of the menu</label>
      <input
       className='form-control m-1'
       type="file" 
       onChange={pickFile}
      />

      <button
       type="submit" 
       className='btn btn-warning btn-block'
      >
        Submit
      </button>
    </form>
  );
};

export default AddMenu