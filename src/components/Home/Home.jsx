import React from 'react'
import Navbar from '../Navbar/Navbar'
import Note from '../Note/Note'
import './home.css'

const Home = () => {
  return (
    <div className='home-container'>
        <Navbar/>
        <Note/>
    </div>
  )
}

export default Home