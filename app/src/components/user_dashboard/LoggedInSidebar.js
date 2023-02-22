import React from 'react';
import Library from '../../imgs/library.png';
import Home from '../../imgs/Home.png';
import Search from '../../imgs/Search.png';
import DownArrow from "../../imgs/downArrow.png"
import { AiFillHome } from 'react-icons/ai';
import { RiSearchLine } from 'react-icons/ri';

function LoggedInSidebar() {
    return (
        <div>
            <div className="sidebar">
                <h1 className="Spotify_logo" />
                <div className="nav_button_container">
                </div>
                <div className="nav">
                    <ul>
                        <li>
                            <a href="home">
                                    <span className="img">
                                      <img  src={Home} className="home" alt="home" />
                                    </span>
                                <span>Home</span>
                            </a>
                        </li>
                        <li>
                            <a href="http://localhost:3000/search">
                                    <span className="img">
                                        <img  src={Search} className="search" alt="search" />
                                    </span>
                                <span>Search</span>

                            </a>
                        </li>
                        <li>
                            <a href="http://localhost:3000/library">
                                    <span className="img">
                                        <img  src={Library} className="library" alt="library" />
                                    </span>
                                <span>Your Library</span>

                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="main">
                <div className="header">
                    <div className="buttons">
                        <button type="button" className="fa-solid fa-chevron-left" />
                        <button type="button" className="fa-solid fa-chevron-right" />
                    </div>
                    <div className="searchBar">
                        <form className="search">
                            <input type="text" placeholder="What do you want to listen to?" />
                        </form>
                    </div>
                    <div className="dropdown">
                        <button className="dropdownBtn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Raquel
                            <img  src={DownArrow} className="downArrow" alt="DownArrow" />

                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Account</a></li>
                            <li><a className="dropdown-item" href="#">Sign Out</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoggedInSidebar;
