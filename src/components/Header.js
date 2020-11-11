import React from 'react';
import { Link } from 'react-router-dom';
import ghMark from '../images/GitHub-Mark-32px.png';
import liMark from '../images/LI-In-Bug.png';
import MediumMark from '../images/Medium-logo.png';
import SocialMediaIcon from './SocialMediaIcon';

export default function Header(){
    return (
        <div className='header'>

            <div className='name-logo'>
                <Link to='/'>// Regina Furness</Link>
            </div>
            <div className='contact-links'>
                < SocialMediaIcon icon={ghMark} link='https://github.com/ReginaF2012' />
                < SocialMediaIcon icon={liMark} link='https://www.linkedin.com/in/regina-furness/' />
                < SocialMediaIcon icon={MediumMark} link='https://reginafurness.medium.com/' />
            </div>
        </div>
    )
}