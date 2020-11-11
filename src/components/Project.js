import React from 'react';

export default function Project({name, videoURL, repos, description}){
    return (
        <div className='project'>
            <div className='video'>
                <h2>{name}</h2>
                <iframe src={videoURL}/>
            </div>
            <div className='project-description'>
                <p>{description}</p>
                <ul className='repos'>
                    Repos: {repos.map(repo => {
                    return <li><a href={Object.values(repo)[0]}> {Object.keys(repo)[0]}</a></li>
                    })}
                </ul>
            </div>   
        </div>
    )
}