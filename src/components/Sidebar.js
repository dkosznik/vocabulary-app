import './Sidebar.css'
import { NavLink } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';

import React from 'react';

export default function Sidebar() {
    const { user } = useAuthContext()

    return (
        <div className='sidebar'>
            <div className="sidebar-content">
                <div className="user">
                    <p>Hey {user.displayName}</p>
                </div>
                <nav className="links">
                    <ul>
                        <li>
                            <NavLink to='/'>
                                <span>Dashboard</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/create'>
                                <span>Create New Lesson</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            
        </div>
    )
    }