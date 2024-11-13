import React from 'react'
import './nav.css'
import {Link} from 'react-router-dom'



const nav = () => {
  return (
    <div className='nav-position'>
        <div className='nav1'>
            <img src={'images/logo.png'} height="80" width="80" className='image-logo'/>
            
            <input type="text" placeholder="Search.." className='input'></input>
            <button type="submit" className='search-logo'><i class="fa fa-search"></i></button>
            
        </div>
        <div>
            <ul className='list-items'>
                <li><Link to='/' className='link'>Home</Link></li>
                <li><Link to='/dogs' className='link'>Dogs</Link></li>
                <li><Link to='/cats' className='link'>Cats</Link></li>
                <li><Link to='/cart' className='link'>Cart</Link></li>
                <li><Link to='/login' className='link'>Login</Link></li>
                <li><Link to='/server' className='link'>Server</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default nav