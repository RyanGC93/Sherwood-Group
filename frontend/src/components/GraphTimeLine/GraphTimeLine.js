import React from 'react';
import "./GraphTimeLine.css"

const GraphTimeLine = () => {

	const handleClick = (e) => {
		console.log(e)
	}


    return (
        <div className="timeline__holder">
            <div className="timelineOptions__holder">
                <div className="timeline__option active"  onClick={handleClick}>D</div>
                <div className="timeline__option"  onClick={handleClick}>W</div>
                <div className="timeline__option"  onClick={handleClick}>M</div>
                <div className="timeline__option"  onClick={handleClick}>Y</div>
                <div className="timeline__option"  onClick={handleClick}>ALL</div>                                                                                
            </div>
        </div>
    )
}

export default GraphTimeLine
