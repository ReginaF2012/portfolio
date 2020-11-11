import React from 'react';
import Project from './Project';

export default function Portfolio(){
    return (
        <div className='portfolio section'>
            <Project 
                name='Recipe Tracker' 
                repos={[{'Github Frontend': 'https://github.com/ReginaF2012/recipe-tracker-frontend'}, {'Github Backend': 'https://github.com/ReginaF2012/recipe-tracker-backend'}]} 
                videoURL='https://youtube.com/embed/FRJYJsqAJ9c'
                description='Recipe-Tracker is a virtual recipe box. Users can perform all CRUD actions on recipes they submit, as well as view the recipes submitted by other users! Comes with image upload supported by Cloudinary. Built with a Rails API backend and a React frontend.'
            />
            <Project 
                name='Dottomodachi Virtual Pixel Pet Game' 
                repos={[{'Github Frontend': 'https://github.com/ReginaF2012/dottomodachi-front-end'}, {'Github Backend': 'https://github.com/ReginaF2012/dottomodachi-back-end'}]} 
                videoURL='https://youtube.com/embed/MUfwBFG941M' 
                description='Dottomodachi is a virtual pixel pet game reminiscent of tamagotchi. Frontend built using vanilla JavaScript, backend is a Rails API. Utilizes JWT for user authentication, and ES6 JavaScript classes to achieve more modular code.'
            />
            <Project 
                name='Dreamcatcher'
                repos={[{'Github Repo': 'https://github.com/ReginaF2012/Dreamcatcher'}]}
                videoURL='https://youtube.com/embed/yLjmxtnphRU'
                description='Dreamcatcher is a virtual dream diary RESTful web app. Users can perform full CRUD actions on their dream logs as well as view publicly posted dream logs of other users. Utilizes Google OAuth for user authentication.'
            />
            <Project
                name='Pet Care ToDo App'
                repos={[{'Github Repo': 'https://github.com/ReginaF2012/pet-care-todo-app'}]}
                videoURL='https://youtube.com/embed/sZV9Q-qq80g'
                description='The PetCareToDoApp is a Sinatra application that aids users in keeping track of a To Do List for their pets. Users can sign up, log in, log out, and perform CRUD(Create, read, update, delete) actions on their pets, and to do list items.'
            />

            <Project
                name='Animal Crossing Villager Finder'
                repos={[{'Github Repo': 'https://github.com/ReginaF2012/AnimalCrossingVillagerFinder-'}]}
                videoURL='https://youtube.com/embed/bdo7sxqo8qM'
                description='Ruby CLI Gem. Scrapes info from https://animalcrossing.fandom.com/wiki/Villager_list_(New_Horizons) using Nokogiri. Allows users to learn more about the characters in Animal Crossing and play a Guess the Villager minigame.'
            />
        </div>
    )
}