import React from 'react';

export default function SocialMediaIcon({icon, link}){
    return (
        <div className='social-media'>
            <a target='_blank' href={link}>
                <img className='sm-logo' src={icon} />
             </a>
        </div>
    )
}