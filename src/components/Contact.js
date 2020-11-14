import React from 'react';
import EmbeddedEmail from './EmbeddedEmail';
import SocialMediaIcon from './SocialMediaIcon';
import GitHub from '../images/GitHub_Logo_White.png'
import LinkedIn from '../images/LI-Logo.png'
import Medium from '../images/Medium-Wordmark-White-RGB@1x.png';


export default function Contact(){
    return (
        <div className='contact'>
            <h1>Let's Get in Touch!</h1>
            <div className='email'>
                <h2>Email</h2>
                <EmbeddedEmail />  
            </div>
            <div className='other-contacts'>
                <h2>You can also find me here</h2>
                <div className="social-media-contacts">
                    <SocialMediaIcon 
                        stylingClass='large-logo' 
                        icon={GitHub} 
                        link='https://github.com/ReginaF2012'
                        titleText='Github'
                    />
                    <SocialMediaIcon 
                        stylingClass='large-logo' 
                        icon={Medium} 
                        link='https://reginafurness.medium.com/'
                        titleText='Medium'
                    />
                    <SocialMediaIcon 
                        stylingClass='white large-linkedin' 
                        icon={LinkedIn} 
                        link='https://www.linkedin.com/in/regina-furness/'
                        titleText='LinkedIn'
                    />
                </div>
            </div>
        </div>
    )
}