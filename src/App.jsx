import { useState } from 'react'

import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Components/Home'

function App() {


  return (
    <div className='text-center'>
     <Header/>
     <Home/>
     <Footer/>
    </div>
  )
}

export default App
