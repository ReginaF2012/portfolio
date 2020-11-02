import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(){
    return (
        <div className="header">

            <div className="name-logo">
                <Link to="/">Regina Furness</Link>
            </div>

            <div className="navigation">

                <div className="nav-item">
                    <Link to="/">Home</Link>
                </div>

                <div className="nav-item">
                    <Link to="/projects">Projects</Link>   
                </div>

                <div className="nav-item">
                    <Link to="/contact">Contact</Link>
                </div>

            </div>
        </div>
    )
}