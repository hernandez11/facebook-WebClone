import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import {Avatar, IconButton} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from './StateProvider';

function Header() {
  const [{ user }, dispatch] = useStateValue();
  const firstName = user.displayName.split(' ').slice(0,-1);

    return (
        <div className="header">
            <div className='header_left'>
                <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png"
                alt="" />
                <div className='header_input'>
                    <SearchIcon/>
                    <input placeholder="Search Facebook" type="text" />
                </div>
            </div>

            <div className="header_center">
                <div className="header_option
                header_option--active">
                    <HomeIcon fontsize="large"/>
                </div>
                <div className="header_option">
                    <FlagIcon fontsize="large"/>
                </div>
                <div className="header_option">
                    <SubscriptionsIcon fontsize="large"/>
                </div>
                <div className="header_option">
                    <StorefrontIcon fontsize="large"/>
                </div>
                <div className="header_option">
                    <SupervisedUserCircleIcon fontsize="large"/>
                </div>
            </div>

            <div className="header_right">
                <div className="header_info">
                    <Avatar src={user.photoURL}/>
                    <h4>{firstName}</h4>
                </div>
                <IconButton>
                    <AddIcon/>
                </IconButton>
                <IconButton>
                    <ForumIcon/>
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon/>
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon/>
                </IconButton>
            </div>
        </div>
    )
}

export default Header;