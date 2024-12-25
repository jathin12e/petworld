import React from 'react'
import './footer.css'

const footer = () => {
  return (
    <div className='back'>
        <h1>Contact Us</h1>
        <div className='contact-position'>
            <h3>Email : muppalaJathin@gmail.com</h3>
            <h3>Phone No : 7305929739</h3>
        </div> 
        <input type='text' placeholder='ask queastion' className='input2'/> 
        <button>post</button>
    </div>
  )
}

export default footer