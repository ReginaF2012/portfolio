import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar(){

    return (
        <div className='sidebar'>
            <div className='nav-item'>
                <span class="iconify" data-icon="entypo-chevron-thin-right" data-inline="false"></span>
                <Link to='/'>about</Link>
            </div>  

            <div className='nav-item'>
                <span class="iconify" data-icon="entypo-chevron-thin-right" data-inline="false"></span>
                <Link to='/portfolio'>portfolio</Link>   
            </div>

            <div className='nav-item'>
                <span class="iconify" data-icon="entypo-chevron-thin-right" data-inline="false"></span>
                <Link to='/contact'>contact</Link>
            </div>

        </div>
    )
}