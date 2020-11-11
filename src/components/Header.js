import React from 'react';
import { Link } from 'react-router-dom';
import ghMark from '../images/GitHub-Mark-32px.png';
import liMark from '../images/LI-In-Bug.png';

export default function Header(){
    return (
        <div className='header'>

            <div className='name-logo'>
                <Link to='/'>// Regina Furness</Link>
            </div>
            <div className='contact-links'>
                <a target='_blank' href='https://github.com/ReginaF2012'>
                    <img className='sm-logo' src={ghMark} />
                </a>
                <a target='_blank' href='https://www.linkedin.com/in/regina-furness/'>
                    <img className='sm-logo' src={liMark} />
                </a>
            </div>
        </div>
    )
}