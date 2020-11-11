import React from 'react';
import Project from './Project';

export default function Portfolio(){
    return (
        <div className='portfolio section'>
            <Project 
                name="Recipe Tracker" 
                repos={[{'Github Frontend': 'https://github.com/ReginaF2012/recipe-tracker-frontend'}, {'Github Backend': 'https://github.com/ReginaF2012/recipe-tracker-backend'}]} 
                videoURL={'https://youtube.com/embed/FRJYJsqAJ9c'} 
                description={'Recipe-Tracker is a virtual recipe box. Users can perform all CRUD actions on recipes they submit, as well as view the recipes submitted by other users! Comes with image upload supported by Cloudinary. Built with a Rails API backend and a React frontend.'}
            />
            <Project 
                name="Dottomodachi Virtual Pixel Pet Game" 
                repos={[{'Github Frontend': 'https://github.com/ReginaF2012/dottomodachi-front-end'}, {'Github Backend': 'https://github.com/ReginaF2012/dottomodachi-back-end'}]} 
                videoURL={'https://youtube.com/embed/MUfwBFG941M'} 
                description={'Dottomodachi is a virtual pixel pet game reminiscent of tamagotchi. Frontend built using vanilla JavaScript, backend is a Rails API. Utilizes JWT for user authentication, and ES6 JavaScript classes to achieve more modular code.'}
            />
        </div>
    )
}