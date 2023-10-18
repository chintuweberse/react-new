import React from 'react';

import {Routes, Route, Navigate} from 'react-router-dom';

import About from './../Pages/About';
import Contact from './../Pages/Contact';
import Home from './../Pages/Home';

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={< Navigate to ='Home'/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/' element={<Contact/>}/>
            
                </Routes>
               )
}

export default Routers;
