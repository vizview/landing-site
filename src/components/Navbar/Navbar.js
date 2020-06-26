import React from 'react';
import {NavLink} from 'react-router-dom'
import './Navbar.css'



const navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-light">
                <NavLink className="navbar-brand" exact to="/">VizView</NavLink>
               
                <div class="justify-content-end" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <NavLink className="inactive" to="/" exact activeStyle={
                            {color: '#E84D28', textDecoration: "underline"}
                        }>Home</NavLink>
                        <NavLink className="inactive" to="/work" exact activeStyle={
                            {color: '#E84D28', textDecoration: "underline"}
                        }>Work</NavLink>
                        <NavLink className="inactive" to="/about" exact activeStyle={
                            {color: '#E84D28', textDecoration: "underline"}
                        }>About</NavLink>
                        
                    </div>
                </div>
            </nav>
        </div>

    )

}

export default navbar;