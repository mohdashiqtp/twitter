import React from 'react'
import './Sidebar.css'
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarOption from './SidebarOption'
import HomeIcon from '@material-ui/icons/Home';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import SearchIcon from '@material-ui/icons/Search';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import {Button} from '@material-ui/core'
function Sidebar() {
    return (
        <div className="sidebar">
            {/* twitter logo */}
            <Button className="twitter__logo"><TwitterIcon className="sidebar__twitter"/></Button>
            
            <SidebarOption active Icon={HomeIcon} text="Home"/>
            <SidebarOption Icon={NotificationsNoneIcon} text="Explore"/>
            <SidebarOption Icon={SearchIcon} text="Notification"/>
            <SidebarOption Icon={MailOutlineIcon} text="Masseges"/>
            <SidebarOption Icon={BookmarkBorderIcon} text="Bookmark"/>
            <SidebarOption Icon={ListAltIcon} text="List"/>
            <SidebarOption Icon={PermIdentityIcon} text="Profile"/>
            <SidebarOption Icon={MoreHorizIcon} text="More"/>
            

            
            {/* button -> twist */}

            <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>
        </div>
    )
}

export default Sidebar
