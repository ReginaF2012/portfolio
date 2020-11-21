import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar(){

    return (
        <div className='sidebar'>
            <div className='nav-item'>
                <span class="iconify" data-icon="entypo-chevron-thin-right" data-inline="false"></span>
                <Link to={process.env.PUBLIC_URL + '/'}>about</Link>
            </div>  

            <div className='nav-item'>
                <span class="iconify" data-icon="entypo-chevron-thin-right" data-inline="false"></span>
                <Link to={process.env.PUBLIC_URL + '/portfolio'}>portfolio</Link>   
            </div>

            <div className='nav-item'>
                <span class="iconify" data-icon="entypo-chevron-thin-right" data-inline="false"></span>
                <Link to={process.env.PUBLIC_URL + '/contact'}>contact</Link>
            </div>

            <div className='nav-item'>
                <span class="iconify" data-icon="entypo-chevron-thin-right" data-inline="false"></span>
                <Link to={process.env.PUBLIC_URL + '/resume'}>resume</Link>
            </div>

        </div>
    )
}