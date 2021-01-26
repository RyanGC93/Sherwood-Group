import React from 'react';
import "./GraphTimeLine.css"

function GraphTimeLine() {
    return (
        <div className="timeline__holder">
            <div className="timelineOptions__holder">
                <div className="graphtimeline__option active">D</div>
                <div className="timeline__option">W</div>
                <div className="timeline__option">M</div>
                <div className="timeline__option">Y</div>
                <div className="timeline__option">ALL</div>                                                                                
            </div>
        </div>
    )
}

export default GraphTimeLine
