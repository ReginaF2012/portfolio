import React from 'react';
import image from '../images/20200825_071055.jpg';

export default function Home(){
    return (
        <div className='home section'>
            <div className='summary'>
                <div className='bio'>
                    <h2>/* Hello there! */</h2>
                    <p>
                        I'm in search of opportunities in software engineering and web development. Experienced in React, JavaScript, Ruby, and Ruby on Rails. Great communicator, teamplayer, and problem solver.
                        <br/><br/>
                        Looking forward to meeting other passionate people, continuing to learn and hone my skills.
                        <br/><br/>
                        Currently based out of the Greater St. Louis area. Open to work remotely.
                    </p>
                </div>    
            </div>
            <div className='about'> 
                <img className='regina-picture' src={image} alt='Regina Furness'/>
                <div>
                    <h3>About Me</h3>
                    <p>
                        Originally from upstate New York. Moved to the Greater St. Louis area earlier this year. I decided that along with change of location that I wanted to finally pursue my dream of becoming a software engineer!
                        <br/><br/><br/>
                        Curious, animal lover, and dreamer. I enjoy being in nature, drawing, and learning in my spare time.
                    </p>
                </div>
                  
            </div>
        </div>
    )
}