import React from 'react';

export default function SocialMediaIcon({icon, link, stylingClass, titleText}){
    return (
        <div className='social-media'>
            <a target='_blank' rel='noreferrer'title={titleText} href={link}>
                <img alt={`${link}+icon-link`} className={stylingClass} src={icon} />
             </a>
        </div>
    )
}