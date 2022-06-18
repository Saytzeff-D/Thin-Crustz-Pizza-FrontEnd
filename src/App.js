import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import AddMenu from './components/AddMenu';
import Admin from './components/Admin';
import HistoryOfOrder from './components/HistoryOfOrder';
import Home from './components/Home';
import Menu from './components/Menu';
import Nav from './components/Nav';

function App() {
  // const server = 'http://localhost:9090/'
  const server = 'https://thin-crustz-pizza.herokuapp.com/'
  useEffect(()=>{
    // window.confirm("Are you sure you want to view this page")
  })
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Nav/>}>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/menu' element={<Menu url={server} />} />
          </Route>
          <Route path="/admin" element={<Admin/>} >
            <Route path='/admin/' element={<AddMenu url={server}/>} />
            <Route path='/admin/orderHistory' element={<HistoryOfOrder/>} />
          </Route>
        </Routes>
    </div>
  );
}

export default App;
