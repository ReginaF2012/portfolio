import React from 'react';
import image from '../images/20200825_071055.jpg';

export default function Home(){
    return (
        <div className='home'>
            <div className='picture'>
                <h2>/* Hello there! */</h2>
                <img className='regina-picture' src={image} alt='Regina Furness'/>
            </div>
            <div className='about'> 
                <h3>About Me</h3>
                <p>
                    <br/>
                </p>
                  
            </div>
        </div>
    )
}