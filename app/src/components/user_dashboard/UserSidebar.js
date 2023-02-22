import React from 'react';
import '../dashboard/sidebar.css';
import LibraryImg from '../../imgs/library.png';
import HomeImg from '../../imgs/Home.png';
import SearchImg from '../../imgs/Search.png';
import { AiFillHome } from 'react-icons/ai';
import { RiSearchLine } from 'react-icons/ri';

const Sidebar = () => {

    return (
        <div className="Sidebar">
                <h1 className="Spotify_Logo"></h1>
                <div className="Nav_Button_Container">

                </div>
            <div className="Nav">
                <ul>
                    <li>
                        <a href="home">
                            <span className="Sidebar_Img">
                                <AiFillHome style={{verticalAlign: 'middle', color: 'rgb(255, 255, 255)'}} size="1.5em" />
                            </span>
                            <span style={{color: "rgb(255, 255, 255)"}}>Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="http://localhost:3000/search">
                            <span className="Sidebar_Img">
                                <RiSearchLine style={{verticalAlign: 'middle', color: 'rgb(255, 255, 255)'}} size="1.5em" />
                            </span>
                            <span>Search</span>
                        </a>
                    </li>
                    <li>
                        <a href="http://localhost:3000/library">
                            <span className="Sidebar_Img">
                                <img src={LibraryImg} width="20 px" style={{height: "100%", verticalAlign: "middle"}} />
                            </span>
                            <span>Your Library</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;