import React from 'react';
import { Link } from 'react-router-dom';
import SocialMediaIcon from './SocialMediaIcon';
import GitHub from '../images/GitHub-Mark-32px.png';
import LinkedIn from '../images/LI-In-Bug.png';
import Medium from '../images/Medium-Symbol-White-RGB@1x.png';


export default function Header(){
    return (
        <div className='header'>

            <div className='name-logo'>
                <Link to='/'>// Regina Furness</Link>
            </div>
            <div className='contact-links'>
              <div className='social-media-group'>
                    <SocialMediaIcon 
                        stylingClass='sm-logo white' 
                        icon={GitHub} 
                        link='https://github.com/ReginaF2012'
                        titleText='GitHub'
                    />
                    <SocialMediaIcon 
                        stylingClass='sm-logo' 
                        icon={Medium} 
                        link='https://reginafurness.medium.com/'
                        titleText='Medium'
                    />
                    <SocialMediaIcon 
                        stylingClass='sm-logo white' 
                        icon={LinkedIn} 
                        link='https://www.linkedin.com/in/regina-furness/'
                        titleText='LinkedIn'
                    />
                </div>
            </div>
        </div>
    )
}