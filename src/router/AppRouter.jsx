import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from '../pages/about/About';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import Navbar from '../components/navbar/Navbar';
import Details from '../pages/details/Details';
import PrivateRouter from './PrivateRouter';

function AppRouter() {
  return (
    <div>
        <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route path='/' element={<Login/>} />

              <Route path='/home' element={<PrivateRouter/>} >
                <Route path='' element={<Home/>} />
              </Route>

            

              <Route path= "/about" element={<PrivateRouter/>}>
                <Route path='' element={<About/>} />
              </Route>

              <Route path="/details" element={<Details />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default AppRouter