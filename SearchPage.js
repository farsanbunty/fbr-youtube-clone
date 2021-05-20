import React from 'react'
import './SearchPage.css';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";

function SearchPage() {
    return (
        <div className="searchPage">
        <div className="searchPage__filter">
            <TuneOutlinedIcon/>
            <h2>FILTER</h2>
         </div>
<hr/>
        <ChannelRow
        image="https://yt3.ggpht.com/ytc/AAUvwni67EbUbz-h3hJD8XvAQfbKDisckQhUuxOfhbbi=s88-c-k-c0x00ffffff-no-rj"
        channel="Farsan Rao"
        verified
        subs="16"
        noOfVideos={100}
        description="You can find awesome stuff. Bcoz I love to make my life awesome by keep on trying till i reach the last mile. "
        />

        <hr/>
        <VideoRow 
                title="5 kills in 1 minute Call of duty"
                description="You wont believe what i just did"
                views="130 views"
                subs="23K"
                timestamp="7 months ago"
                
                channel="Sunny Yolo"
                image="https://i.ytimg.com/vi/uMQUPQ1AUDs/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBIGs0ULi0J3DduRx0JEIDaqT9wrQ"


        />

<VideoRow
                title="Iphone 13 here we go"
                views="1K views"
                timestamp="1 months ago"
                subs="24K"
                channel="Farsan Rao"
                description="Here we Go"
                image="https://i.ytimg.com/vi/ikzXR2iV7Zs/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDzpJvi_FqCSDmF0jf9lUMqlVDHRQ"
            />
        </div>

        
    )
}

export default SearchPage
