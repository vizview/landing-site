import React from 'react';
import {NavLink} from 'react-router-dom'
import './Footer.css'

const footer = () => {
    return (
        <footer class="footer">
            <div class="row">
                <div class="col-12 col-md-8">
                    <h3>Subscribe</h3>
                    <p>Subscribe to our monthly newsletter and be the first one to see our lastest story. </p>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Email" aria-label="Search"></input>
                        <button class="btn btn-outline-custom my-2 my-sm-0" type="submit">Subscribe</button>
                    </form>
                </div>
                <div class="col-12 col-md-4">
                    <ul class="list-unstyled text-small">
                        <li><a href="/">Home</a></li>
                        <li><a href="/work">Work</a></li>
                        <li><a href="/about">About</a></li>

                    </ul>
                </div>

            </div>
            <div class="copyright">
                <small>Copyright &copy; 2020 VizView - All Rights Reserved.</small>
            </div>
        </footer>

    )

}

export default footer;