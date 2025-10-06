import React from 'react'
import './App.css'

function App() {
  return (
    <div className='Restaurant-website'>

      <div className='Header'>
        <h2>John's Kitchen</h2>
        <nav>
          <a href = "#Home">Home</a>
          <a href = "#About">About</a>
          <a href = "#Menu">Menu</a>
          <a href = "#Contact">Contact</a>
        </nav>
      </div>

      <div className='About section'>
        <p>Experience variety of foods, food from different cultures
          and places and at John's Kitchen</p>
      </div>

      <div className='Menu Section'>
        <ul>
          <li>Hyderabadi Biryani-Must have at John's kitchen</li>
          <li>fish fry - perfectly crisp</li>
          <li>kebabs - melt in mouth kebabs</li>
        </ul>
      </div>

      <div className='Footer'>
        <Footer>Contact us on 9743500415</Footer>
      </div>
    </div>
  )
}

export default App
