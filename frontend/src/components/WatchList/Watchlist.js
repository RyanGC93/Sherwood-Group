import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import * as watchlistActions from "../../store/watchlist";
import Accordion from '../Accordion/Accordion'

const CurrentWatchList = () => {
    const dispatch = useDispatch();
    const stocks =  useSelector((state) => Object.values(state.watchlist))
    const [isLoaded, setIsLoaded] = useState(false)
    const [watchlist, setWatchlist]= useState([])
    const user = useSelector((state) => state.session.user);
    console.log(stocks)

    useEffect(() => {
        dispatch(watchlistActions.getAllwatchlists())
    }, [dispatch])
    useEffect(() => {
        if( user && stocks) setIsLoaded(true)
        let you = Object.values(stocks)
        console.log(you)
        setWatchlist(you)
        console.log(watchlist)
    }, [user,stocks])

    if(!isLoaded) return null;;

    console.log(stocks)
    // let {good} = stocks.map(element => console.log(element, "sadsads"))


    return (

        <div>
            {/* {stocks.watchlist_name} */}
            <div>dsfdsfdfds

                {stocks.map(watchlist => {
                    <h1>hello</h1>


                })}
            </div>
        </div>
    )

}


const WatchList = () =>  {
    // const {watchedStocks} = useSelector(state => state.watchlist )
    // const dispatch = useDispatch();
    // console.log('sdsadddddddddddddddddddddddddddddddd', watchedStocks)
    // const stocks = useSelector((state) => Object.values(state.watchedStock));
    // console.log('stocks', stocks)
    const [watchlist, setwatchlist] = useState('')
    const [isLoading, setIsLoading] = useState([])
    // useEffect(() => {
    //     dispatch(watchlistActions.getAllwatchlists())



    // }, [dispatch])




    // let watchedList = Array.from(watchedStocks)
    // if (i) {
    //     return (
    //         <>
    //             <h1>Articles are being rendered</h1>
    //         </>
    //     )
    // }
    // console.log(watchedStocks)


    const handleSubmit = e => {
        // e.preventDefault()
        // dispatch(watchlistActions.postwatchlist(watchlist))
        // setwatchlist('')
    }

    // [] Create a form
    // [] Dispatch a thunk
    // [] Thunk does the fetch POST request
    // [] Backend creates the watchlist
    // [] Thunk dispatches a addwatchlist action
    // [] watchlist reducer updates the store

    return (
        <div>
                <CurrentWatchList />

        </div>
    )
}


// return (
//     <div>
//         {loading}
//         {articles === [] ? "No articles could be fetched" :
//             <div>
//                 {articles.map(article => {
//                     return (
//                         <div className="article-holder news-container" onClick={articleRedirect(article.url)}>
//                             <div>

//                             </div>
//                             <div className="article__title">{article.title}</div>
//                             <div className="article__row">
//                             </div>
//                             <div className="article_holder">
//                                 <div className="article__row">
//                                     <div className="article__source">{article.source.name}</div>

//                                     <div className='article__date'>{article.publishedAt}</div>

//                                 </div>
//                                 <img src={article.urlToImage}/>
//                                 <p className="article__content">
//                                     {article.description}
//                                 </p>
//                             </div>
//                         </div>
//                     )
//                 })}
//             </div>
//         }

//     </div>

// )

export default WatchList
