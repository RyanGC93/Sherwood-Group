
import LineGraph from '../LineGraph/LineGraph';
import TopMovers from '../TopMovers/TopMovers'
import GraphTimeLine from '../GraphTimeLine/GraphTimeLine'
// import {LineGraph} from '../LineGraph/LineGraph'
// import {key} from "../apiInfo.js"
import NewsStories from '../NewsStories/NewsStories'
import "./newsfeed.css"
import React, { useState, useEffect } from "react";

function Newsfeed() {
    const [isLoading, setIsLoading] = useState([])

    return (
        <div className="newsfeed">
            <div className="newsfeed__contianer">
                <div className="assest_charts">
                    <div className="userAssets_overview">
                        <h1>Total Portfolio Value</h1>
                        <p>Stock Gaines/losses</p>
                    </div>
                    <LineGraph />
                    <GraphTimeLine />
                </div>
                <div> 
                    <h1>BuyingPower</h1>
                    <p>User BuyingPower $$$</p>
                </div>
                <div className="popularLists">
                    <h1>Popular List</h1>
                    <div className="list--icon__holder">

                    </div>
                </div>
                <div className="topMovers">
                    {/* <TopMovers /> */}
                    
                </div>                
                <div className="newsStories">
                    <h1>News</h1>
                    <NewsStories/>
                    
                </div>

            </div>
        </div>
    )
	
}

export default Newsfeed
