import { Avatar, Button } from '@material-ui/core'
import { ChatBubbleOutline, FavoriteBorder } from '@material-ui/icons'
import RepeatIcon from '@material-ui/icons/Repeat';
import PublishIcon from '@material-ui/icons/Publish';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser'
import React from 'react'
import './Posts.css'


function Posts({
    displayName,
    username,
    verified,
    text,
    image,
    avatar
}) {

    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src={avatar} />
            
            </div>
            <div className="body">
                <div className="post__header">
                    <div className="post__header__text">
                      <h3>{displayName}{""} <span className="post__headerSpecial">
                         {verified &&<VerifiedUserIcon className="post__badge"/>} @{username} 
                          </span></h3> 
                    </div>
                    <div className="postHeader__description">
                        <p>{text}</p>
                    </div>
                    
                </div>
                <img src={image} alt="" />
                <div className="post__footer">
                    <Button><ChatBubbleOutline fontSize="smmall"/></Button>
                    <Button><RepeatIcon fontSize="small"/></Button>
                    <Button><FavoriteBorder fontSize="small"/></Button>
                    <Button><PublishIcon fontSize="small"/></Button>
                </div>
            </div>
        </div>
    )
}

export default Posts
