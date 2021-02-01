import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import * as watchlistActions from "../../store/watchlist";
import Accordion from '../Accordion/Accordion'

const WatchList = () => {
    const dispatch = useDispatch();
    const stocks =  useSelector((state) => (state.watchlist.watchedStocks))
    const [isLoaded, setIsLoaded] = useState(false)
    const [watchlist, setWatchlist]= useState([])
    const user = useSelector((state) => state.session.user);
    console.log(stocks)

    useEffect(() => {
        dispatch(watchlistActions.getAllwatchlists())
    }, [dispatch])
    useEffect(() => {
        if( user && stocks) setIsLoaded(true)





    }, [user,stocks])
    if(!isLoaded) return null

    console.log(stocks)



    if(isLoaded) return (

        <div>
            {stocks[0]}
            <div>sda sds dasdsadsa dsadas dsadas

                 {stocks.map(watchlist => {
                    <h1>hello</h1>


                })}
            </div>
        </div>
    )

}



export default WatchList
