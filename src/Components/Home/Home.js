import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const [navCollapsed, setNavCollapsed] = useState(true);
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
                <Link className="navbar-brand" to="#">
                    <img src="https://iili.io/2nXeCg.png" className="w-25 bg-white" alt=""/>
                </Link>
                <button onClick={() => setNavCollapsed(!navCollapsed)} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={(navCollapsed ? 'collapse' : '') + ' navbar-collapse text-dark'} id="navbarTogglerDemo02">
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search your destination" />
                    </form>
                    <ul className="navbar-nav mt-2 mt-lg-0">
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
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Home;