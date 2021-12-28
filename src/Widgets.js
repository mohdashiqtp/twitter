import React from 'react'
import './Widgets.css'
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search"

export default function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchicon"/>
                <input type="text"  placeholder="search twitter"/>
            </div>
            <div className="widgets__container">
                <h2>What's happening</h2>
                <TwitterTweetEmbed className="widgets__card" tweetId={"858551177860055040"} />
                <TwitterTimelineEmbed sourceType="profile" screenName="dulQuer" option={{height:400}} />
                <TwitterShareButton url={"http://facebook.com/cleverprogammer"} options={{text:"#react js is awesome" , via:"cleverqazi"}} />
            </div>
        </div>
    )
}
