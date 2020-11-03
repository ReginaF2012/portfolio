import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar(){

    return (
        <div className='sidebar'>
            <div className='nav-item'>
                <span className='right-arrow'>&#8250;</span><Link to='/'>about</Link>
            </div>  

            <div className='nav-item'>
                <span className='right-arrow'>&#8250;</span><Link to='/projects'>projects</Link>   
            </div>

            <div className='nav-item'>
                <span className='right-arrow'>&#8250;</span><Link to='/contact'>contact</Link>
            </div>

        </div>
    )
}