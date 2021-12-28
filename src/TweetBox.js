import React,{useState} from 'react'
import './TweetBox.css'
import {Avatar,Button} from '@material-ui/core'
import db from './firebase'

function TweetBox() {
    const[tweetMessage,setTweetMesssage]=useState("");
    const[image,setImage]=useState("");

    const sendTweet= e =>{
      e.preventDefault();
      db.collection('posts').add({
          displayName:"wafa khadeeja",
          username:"wafakhadeeja",
          verified:true,
          image:image,
          text:tweetMessage,
          avatar:"data:image/jpeg;base64,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"
      })
      setTweetMesssage("");
      setImage("");
    }
    
    
    return (
        <div className="tweetbox">
            <form>
                <div className="tweetBox__input">
                  <Avatar src='data:image/jpeg;base64,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'></Avatar>
                   <input
                   onChange={e=>setTweetMesssage(e.target.value)}
                   value={tweetMessage}
                    placeholder="What's happening?" type="text" />
                   
                </div>
                <input 
                onChange={e=>setImage(e.target.value)}
                value={image}
                 className="tweetbox__input-image" type="text" placeholder="optional:Enter image URL" />  
                <Button onClick={sendTweet} type="submit" className="tweetbox__button">Tweet</Button>

            </form>
        </div>
    )
}

export default TweetBox