import React from 'react'
import './VideoRow.css' 

function VideoRow(
    {
        timestamp,
        subs,
        views,
        channel,
        description,
        title,
        image
    }
) {
    return (
        <div className="videoRow">
        <img src={image} alt="" /> 
        <div className="videoRow__text"> 
        <h3>{title}</h3>
       
        <p className="videoRow__headline">  {channel} . <span className="subsNumber" />{subs}  Subscribers {views}  . {timestamp}  </p>
        <p className="videoRow__description"> {description}</p>
        </div>
        
            
        </div>
    )
}

export default VideoRow
