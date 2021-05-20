import React ,{useState} from 'react';
import "./Header.css";

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';

import {Link} from "react-router-dom";

function Header() {
  const[inputSearch,setInputSearch] = useState("")

    return (
        <div className="header">
        <div className="header__left">
        <MenuIcon/>
        <Link to="/">
        <img
          className="header__logo"
          alt="youtube-logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5gX7nrO2y-yf1YpUsBYtEZ6OiM3sEp4NnbT9YjNC3-cDi-pknIo1htcbR4azPiaHNLiQ&usqp=CAU"
          >

          </img>
        </Link>
         
        </div>
         
         <div className="header__input">
         <input 
         onChange={e=>setInputSearch(e.target.value)}
         value={inputSearch} placeholder="Explore" type="text"></input>
         <Link to={`/search/${inputSearch}`}>
         <SearchIcon className="header__inputButton" />
         </Link>
         </div>

         <div className="header__icons">
         <VideoCallIcon className="header__icon" />
          <AppsIcon className="header__icon" />
          <NotificationsIcon className="header__icon" />
          <Avatar 
            alt= 'Farsan'
            src='https://lh3.googleusercontent.com/ogw/ADGmqu8q7JHNHTE3PoXUVOylSHzYandIaGjQ7SoY7QLD=s83-c-mo'
          />
         </div>          
         
         
        </div>
    )
}

export default Header
