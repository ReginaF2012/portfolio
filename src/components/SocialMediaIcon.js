import React from 'react';

export default function SocialMediaIcon({icon, link, stylingClass}){
    return (
        <div className='social-media'>
            <a target='_blank' rel='noreferrer' href={link}>
                <img alt={`${link}+icon-link`} className={stylingClass} src={icon} />
             </a>
        </div>
    )
}