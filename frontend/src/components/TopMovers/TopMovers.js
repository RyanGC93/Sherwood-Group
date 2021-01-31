import "./topMovers.css"
import { useHistory,useParams } from "react-router-dom"
import {dailyGainers,dailyLosers,dailyMostActive} from '../../utils/newsApi.js'
import React, { useState, useEffect } from "react";



const MoverDetails = () => {
	const history = useHistory()
	const [isLoading, setIsLoading] = useState([])
	const [dailyGainerList, setDailyGainersList] = useState([])	
	const [dailyLosersList, setDailyLosersList] = useState([])			
	const [dailyActiveList, setDailyActiveList] = useState([])	
	useEffect(() => { 
		const fetchExternalApiInfo = async () => {
			const dailyGainerList = await dailyGainers()
			const dailyLosersList = await dailyLosers()
			const dailyActiveList = await dailyMostActive()
			if (dailyGainerList && dailyLosersList && dailyActiveList) setIsLoading(false)
			setDailyLosersList(dailyLosersList)
			setDailyGainersList(dailyGainerList)
			setDailyActiveList(dailyActiveList)
			console.log("dailyGainersList",dailyGainerList)
			console.log("dailyActiveList",dailyActiveList)
			console.log("dailyLosersList", dailyLosersList)
		}
		fetchExternalApiInfo()

	}, [] ) 
	const loading = () => {
		if (isLoading) {
			return (
				<>
					<div>Articles are being rendered</div>
				</>
			)
		}
	}

	const stockRedirect = (stockGainer) => {
		// const ticker = stockGainer.ticker
		// history.push(`/stock/${ticker}`)
	}
    
   
   
    return (
		<div>
			{loading}
			<div className="top-gainers">
				<h1>Daily Top Gainers</h1>
					{dailyGainerList.map(stockGainer => { 
						return (
							<div className="stock-gainer" onClick={stockRedirect(stockGainer)}>
								<div className="company-name">
									{stockGainer.companyName}
								</div>
								<div className="stock-ticker">Ticker: {stockGainer.ticker}</div>
								<div className="stats-container">
									<div className="stock-price">Stock Price: {stockGainer.price}</div>
									<div className="stock-change">Stock Changes:{stockGainer.changes}</div>
									<div className="stock-change-percentage">{stockGainer.changesPercentage}</div>
								</div>
							</div>
						)
					})}
			</div>
			<div className="top-losers">
				<h1>Daily Top Loser</h1>
					{dailyLosersList.map(stockLoser => { 
						return (
							<div className="stock-Loser" onClick={stockRedirect(stockLoser)}>
								<div className="company-name">
									{stockLoser.companyName}</div>
								<div className="stock-ticker">Ticker: {stockLoser.ticker}</div>
								<div className="stats-container">
									<div className="stock-price">Stock Price: {stockLoser.price}</div>
									<div className="stock-change">Stock Changes:{stockLoser.changes}</div>
									<div className="stock-change-percentage">{stockLoser.changesPercentage}</div>
								</div>
							</div>
						)
					})}
			</div>	
			<div className="top-movers">
				<h1>Daily Top Movers</h1>
					{dailyActiveList.map(stockActive => { 
						return (
							<div className="stock-Active" onClick={stockRedirect(stockActive)}>
								<div className="company-name">
									{stockActive.companyName}
								<div className="stock-ticker">Ticker: {stockActive.ticker}</div>	
								</div>
								<div className="stats-container">
									<div className="stock-price">Stock Price: {stockActive.price}</div>
									<div className="stock-change">Stock Changes:{stockActive.changes}</div>
									<div className="stock-change-percentage">{stockActive.changesPercentage}</div>
								</div>
							</div>
						)
					})}
				</div>				
    	</div>     
    )
}



export default MoverDetails
