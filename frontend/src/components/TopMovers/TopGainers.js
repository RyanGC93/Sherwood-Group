import React, { useEffect, useState } from "react";
import CircularProgress from '@material-ui/core/CircularProgress';

const TopMovers = props => {
    const [stories, setStories] = useState([]);
    const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    
    const fetchCompanyInfo = async () =>{
      const API_Key = process.env.REACT_APP_FMP_API_KEY;
      let API_CALL = `https://financialmodelingprep.com/api/v3/gainers?apikey=${API_Key}`;
      fetch(API_CALL)
      .then(
          function(response){
              return response.json()
          }
      )
      .then(
          function(data){
            setIsLoading(false)
            setStories(data)

          }
      )
    }
    fetchCompanyInfo();  
    //setinterval would go here return the clear interval
    //return ()=> clearInterval
  }, []);
      const loading = () => {
        if (isLoading) {
        return (
        <>
        
        <main className="centered middled">
          <b>Fetching market data...</b>
          <CircularProgress />
          </main>
        </>
        )
      }
    }

      return (
        <div>
        <h2 style={{color: 'green'}}>Top Gainers</h2>
        {loading}
        {stories.slice(0, 5).map(story => {
            return (
              <div className='moversContainer' key={story.ticker}>
                  <div className='newsTitle'>
                  {story.ticker}
                  <div>
                  {story.companyName}
                  </div>
                   
                  </div>
                  <div className='newsSummary'>
                  
                  {story.price} +{story.changes}  <span style={{color: 'green'}} >{story.changesPercentage}</span>

                  </div>
                   
               </div>
            )
          })}
        </div>
      )
}

export default TopMovers;
