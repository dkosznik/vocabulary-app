import './Navbar.css'
import { Link } from 'react-router-dom';

import React from 'react';

export default function Navbar() {
  return (
    <div className="navbar">
        <ul>
            <li className='logo'>
                <img src='' alt="logo" />
                <span>Vocabulary</span>
            </li>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/signup'>Singup</Link></li>
        </ul>
    </div>
    )
}
