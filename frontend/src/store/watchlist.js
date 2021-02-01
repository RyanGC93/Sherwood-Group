import {fetch} from './csrf';

// const ADD_WATCHLIST = 'watchlist/addWatchedStocks'
const SET_WATCHLIST = 'watchlist/setWatchedStocks'

const setWatchedStocks = (watchedStocks) => ({
    type: SET_WATCHLIST,
    payload: watchedStocks
})

// const addWatchedStocks = (watchedStock) => ({
//     type: ADD_WATCHLIST,
//     payload: watchedStock
// })

export const getAllwatchlists = () => async (dispatch) => {
    const res = await fetch('api/watchlist')
    const watchedlists = res.data
    return watchedlists
    // let normalizedList = {}
    // for(let i =0; i < watchedlists.length; i++){
        // const list = watchedlists[i]
        // normalizedList[list.id] = list
    // }
    // // const json = res.data
    // console.log('normalized', normalizedList)
    // dispatch(setWatchedStocks(watchedlists))

}

const initialState = {};

function watchlistReducer(state = initialState, action){
    let newState;
    switch(action.type){
        case SET_WATCHLIST:
            newState = Object.assign({}, state, {}, action.payload)
            return newState
        default:
            return state
    }
}

export default watchlistReducer
