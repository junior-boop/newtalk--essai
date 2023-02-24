import React, { useState } from 'react'
import Navbar from './components/nav/navbar';
import Home from './components/pages/home';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'

import {
  createBrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
import Sensibilisation from './components/pages/sensibilisation';
import Footer from './components/footer/footer';
import Soutient from './overlay/soutient_overlay';
import Temoignage_page from './overlay/temoignage';
import ContactUs from './Layouts/temoignage';



const router = createBrowserRouter([
  {
    path : '/',
    element : <div>Bonjour</div>
  }
])

export default function App() {

 

  return (
    <>
        <Router>
          <div id='app'>
            <Navbar />
            <Routes>
              <Route path='/' element= {<Home/>} />
              <Route path='/sensibilisation' element= {<Sensibilisation/>} />
              <Route path='/contact-us' element= {<ContactUs />} />
            </Routes>
            <Footer />
          </div>
          <Routes>
              <Route path='*' element= {<Soutient/>} />
              <Route path='/temoignage' element= {<Temoignage_page />} />
              <Route path='/inscription' element = {<div>inscription</div>} />
          </Routes>
        </Router>
    </>   
  )
}

 

