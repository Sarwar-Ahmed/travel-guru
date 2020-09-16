import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const [navCollapsed, setNavCollapsed] = useState(true);
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark">
                <img src="https://iili.io/2nXeCg.png" alt="" className="navbar-brand" />
                <button onClick={() => setNavCollapsed(!navCollapsed)} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={(navCollapsed ? "collapse" : "") + ' navbar-collapse navbar-dark ml-auto'} id="navbarTogglerDemo02">
                    <form className="form-inline my-2 my-lg-0 mr-auto">
                        <input className="form-control mr-sm-2 bg-dark text-white" type="search" placeholder="Search your destination" />
                    </form>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link className="nav-link" to="#">News <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Destination</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Contact</Link>
                        </li>
                        <button className="loginBtn">Login</button>
                    </ul>

                </div>
            </nav>
            <div class="card mb-3" style="max-width: 540px;">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src="..." class="card-img" alt="...">
            </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
    );
};

export default Home;