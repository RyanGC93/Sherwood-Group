import LineGraph from '../LineGraph/LineGraph';
// import {LineGraph} from '../LineGraph/LineGraph'

function Newsfeed(){



    return (
        <div className="newsfeed">
            <div className="newsfeed__contianer">,
                <div clasName="assest_charts">
                    <div className="userAssets_overview">
                        <h1>Total Portfolio Value</h1>
                        <p>Stock Gaines/losses</p>
                    </div>
                    <LineGraph />
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
                <div className="newsStock">
                    <h1>News</h1>
                    
                </div>
                <div className="topMovers">
                    <h1>Top Movers</h1>
                    
                </div>
            </div>
        </div>
    )
	
}

export default Newsfeed
