
//Logged in home page

import React from 'react';
import '../styling.css';
import './home.css';
import SpotifyLogoImg from '../../imgs/Spotifylogo.png';
import { RiPlayFill } from 'react-icons/ri';

import DownArrowImg from '../../imgs/downArrow.png';
import Album1Img from '../../imgs/albums/1.PNG';
import Album2Img from '../../imgs/albums/2.PNG';
import Album3Img from '../../imgs/albums/3.PNG';
import Album4Img from '../../imgs/albums/4.PNG';
import Album5Img from '../../imgs/albums/5.PNG';
import Album6Img from '../../imgs/albums/6.PNG';
import Album7Img from '../../imgs/albums/7.PNG';
import Album8Img from '../../imgs/albums/8.PNG';
import Album9Img from '../../imgs/albums/9.PNG';
import Album10Img from '../../imgs/albums/10.PNG';
import Album11Img from '../../imgs/albums/11.PNG';
import LoggedInSidebar from '../../components/user_dashboard/LoggedInSidebar';

const UserHome = () => {

    const PlayButton = () => {
        return (
            <div className="play">
                <button type="button" className="playBtn fa-solid fa-play">
                    <RiPlayFill style={{verticalAlign: "middle", color: "rgb(0, 0, 0)"}} size="1.8em" />
                </button>
            </div>
        )
    }
    return (
        <div className="Home">
            <div className="main">
                <div className="playlists">
                    <div className='Home_Playlist_Header'>
                        <div className="Home_Playlist_Header_Title_Button_Wrapper">
                            <button type="button" className='Home_Playlist_Header_Title_Button'>The state of music today</button>
                        </div>
                        <div className="Home_Playlist_Header_ShowAll_Button_Wrapper">
                            <button type="button" className="Home_Playlist_Header_ShowAll_Button">Show all</button>
                        </div>
                    </div>
                    <div className="playlists-list">
                        <div className="playlists-item">
                            <img src={Album1Img}/>
                            <PlayButton />
                            <h4>Today's Tops Hits</h4>
                            <p>Sam Smith is on top of the Hottest 50!</p>
                        </div>

                        <div className="playlists-item">
                            <img src={Album2Img}/>
                            <PlayButton />
                            <h4>Hot Hits USA</h4>
                            <p>The hottest tracks in the United States...</p>
                        </div>

                        <div className="playlists-item">
                            <img src={Album3Img}/>
                            <PlayButton />
                            <h4>Viral Hits</h4>
                            <p>Viral, trending and taking off.</p>
                        </div>

                        <div className="playlists-item">
                            <img src={Album4Img}/>
                            <PlayButton />
                            <h4>RapCaviar</h4>
                            <p>Music from Metro Boomin, DaBaby and Rae...</p>
                        </div>

                        <div className="playlists-item">
                            <img src={Album5Img}/>
                            <PlayButton />
                            <h4>Rock This</h4>
                            <p>Fall Out Boy along with the biggest Rock songs you...</p>
                        </div>

                        <div className="playlists-item">
                            <img src={Album6Img}/>
                            <PlayButton />
                            <h4>Are & Be</h4>
                            <p>The pulse of R&B music today.</p>
                        </div>
                    </div>
                </div>
                <div className="playlists">
                    <div className='Home_Playlist_Header'>
                        <div className="Home_Playlist_Header_Title_Button_Wrapper">
                            <button type="button" className='Home_Playlist_Header_Title_Button'>Studying</button>
                        </div>
                        <div className="Home_Playlist_Header_ShowAll_Button_Wrapper">
                            <button type="button" className="Home_Playlist_Header_ShowAll_Button">Show All</button>
                        </div>
                    </div>
                    <div className= "playlists-list">
                        <div className="playlists-item">
                            <img src={Album7Img}/>
                            <PlayButton />
                            <h4>Instrumental Study</h4>
                            <p>By Spotify</p>
                        </div>

                        <div className="playlists-item">
                            <img src={Album8Img}/>
                            <PlayButton />
                            <h4>Study Vibes</h4>
                            <p>By Lofi Girl</p>
                        </div>

                        <div className="playlists-item">
                            <img src={Album9Img}/>
                            <PlayButton />
                            <h4>Study Music 2023</h4>
                            <p>By Naeleck</p>
                        </div>

                        <div className="playlists-item">
                            <img src={Album10Img}/>
                            <PlayButton />
                            <h4>Studying Mix</h4>
                            <p>By Spotify</p>
                        </div>

                        <div className="playlists-item">
                            <img src={Album11Img}/>
                            <PlayButton />
                            <h4>Study Mode</h4>
                            <p>By Spotify</p>
                        </div>
                    </div>
                </div>
            </div>
	    </div>
    )
}

export default UserHome;