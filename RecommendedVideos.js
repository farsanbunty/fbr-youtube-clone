import React from 'react'
import './Recommendedvideos.css';
import VideoCard from './VideoCard';

function RecommendedVideos() {
    return (
        <div className="recommendedVideos">
            <h2>RecommendedVideos</h2>
            <div className= "recommendedVideos__videos">
            <VideoCard
                title="Shadow of Tomb Raider Walk through part 1" 
                views="3 views"
                timestamp="4 months ago"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwni67EbUbz-h3hJD8XvAQfbKDisckQhUuxOfhbbi=s88-c-k-c0x00ffffff-no-rj"
                channel="Farsan Rao"
                image="https://i.ytimg.com/vi/EaSvIOiKnJw/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLC7fDI-UA_3q90Tnvk7_ALl0_X2HA"

            />
            <VideoCard
                title="Overwatch Reinhardt"
                views="100 views"
                timestamp="2 months ago"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwniNw0sUBJG-YF7ekUWiedFaqD8W4yHaz8Flv-_nKg=s68-c-k-c0x00ffffff-no-rj"
                channel="Elli Loki"
                image="https://i.ytimg.com/vi/eY8lAFDHlJA/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDvkX2DlYgTqfaM1UVYXUKiETu-xg"
            />
            <VideoCard 
                title="5 kills in 1 minute Call of duty"
                views="130 views"
                timestamp="7 months ago"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwniVsZ6KOHlUPao8eeCC2Uzllvo4FFhYQgffw76J=s68-c-k-c0x00ffffff-no-rj"
                channel="Sunny Yolo"
                image="https://i.ytimg.com/vi/uMQUPQ1AUDs/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBIGs0ULi0J3DduRx0JEIDaqT9wrQ"
            />
            <VideoCard
                title="Iphone 13 here we go"
                views="1K views"
                timestamp="1 months ago"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwnj7olZX94kuYyZMaNgFoodifIaHPgZUPUkPBzgdVA=s68-c-k-c0x00ffffff-no-rj"
                channel="Farsan Rao"

                image="https://i.ytimg.com/vi/ikzXR2iV7Zs/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDzpJvi_FqCSDmF0jf9lUMqlVDHRQ"
            />
            <VideoCard
                title="Avengers End Game"
                views="2K views"
                timestamp="4 months ago"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwniXJCoUiLV9GSkfYvIQaV5-no2Gi9tE8Bi-qA15=s68-c-k-c0x00ffffff-no-rj"
                channel="Clever Programmer"
                image="https://i.ytimg.com/vi/XpeOIww_l4A/hqdefault.jpg?sqp=-oaymwEjCOADEI4CSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBxtlzseUmrHn7WLneHfc8rABPKQg"
            />
            <VideoCard
                title="Overwatch Reinhardt"
                views="100 views"
                timestamp="2 months ago"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwniNw0sUBJG-YF7ekUWiedFaqD8W4yHaz8Flv-_nKg=s68-c-k-c0x00ffffff-no-rj"
                channel="Elli Loki"
                image="https://i.ytimg.com/vi/eY8lAFDHlJA/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDvkX2DlYgTqfaM1UVYXUKiETu-xg"
            />  
            <VideoCard
                title="Shadow of Tomb Raider Walk through part 1" 
                views="3 views"
                timestamp="4 months ago"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwni67EbUbz-h3hJD8XvAQfbKDisckQhUuxOfhbbi=s88-c-k-c0x00ffffff-no-rj"
                channel="Farsan Rao"
                image="https://i.ytimg.com/vi/EaSvIOiKnJw/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLC7fDI-UA_3q90Tnvk7_ALl0_X2HA"

            />

            <VideoCard 
                title="5 kills in 1 minute Call of duty"
                views="130 views"
                timestamp="7 months ago"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwniVsZ6KOHlUPao8eeCC2Uzllvo4FFhYQgffw76J=s68-c-k-c0x00ffffff-no-rj"
                channel="Sunny Yolo"
                image="https://i.ytimg.com/vi/uMQUPQ1AUDs/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBIGs0ULi0J3DduRx0JEIDaqT9wrQ"
            />  
             </div>
        </div>
    )
}

export default RecommendedVideos
