import "./stockDetailPage.css"
import { useHistory,useParams } from "react-router-dom"
import {companyFinancials, realTimeStockQuotes, companyNews, companyDetails, stockQuotes} from '../../utils/newsApi.js'
import React, { useState, useEffect } from "react";



const StockDetails=() => {
	const [stockNews, setStockNews] = useState([]);
	const [stockFinancials, setStockFinancials] = useState({});
	const [stockDetails, setStockDetails] = useState([]);
	const [realTimeStockQuote, setRealTimeStockQuote] = useState([])
	const [isLoading, setIsLoading] = useState([])
	const [stockQuotes, setStockQuotes] = useState([])	
	const { stockTicker } = useParams()
		

	useEffect(() => { 
		const fetchExternalApiInfo = async () => {
			const stockFinancials = await companyFinancials(stockTicker)
			const stockDetails = await companyDetails(stockTicker)
			const stockQuotes = await companyDetails(stockTicker)			
			const stockNews = await companyNews(stockTicker)
			const realTimeStockQuote = await realTimeStockQuotes(stockTicker)
			if (realTimeStockQuote && stockNews && stockDetails && stockFinancials && stockQuotes) setIsLoading(false)
			setRealTimeStockQuote(realTimeStockQuote)
			setStockNews(stockNews)
			setStockQuotes(stockQuotes)
			setStockFinancials(stockFinancials)
			setStockDetails(stockDetails)
			console.log(realTimeStockQuote)
			console.log("stockDetails", stockDetails.ceo)
			console.log("stockNews", stockNews)
			console.log("stockFinancials", stockFinancials, "dsdsadsadasd", stockFinancials.metric["52WeekHigh"])
		
		}
		fetchExternalApiInfo(stockTicker)

	}, [stockTicker] ) 
	const loading = () => {
		if (isLoading) {
			return (
				<>
					<h1>Articles are being rendered</h1>
				</>
			)
		}
	}

	const articleRedirect = (url) => {
	///	window.location.replace(`${url}`)
	}

   
    return (
		<div>

			{loading}
			<div className="about-container">
				<div className="company-header">About</div>
					<div className="image-container" onClick={articleRedirect(stockDetails.url)}>
						<img src={stockDetails.logo} />
						<div classname="company-description">{stockDetails.description}</div>
					</div>
				<div className="company-stats">
					<div>
						<h4>CEO</h4>
						<p>{stockDetails.ceo}</p>
					</div>
					<div>
						<h4>Employees</h4>
						<p>{stockDetails.employees}</p>
					</div>
					<div>
						<h4>Headquarters</h4>
						<p>{stockDetails.hq_state} {stockDetails.hq_country}</p>
					</div>
					<div>
						<h4>Sector</h4>
						<p>{stockDetails.sector}</p>
					</div>					
				</div>
				<div className="company-stats">
					<div>
						<h4>Market Cap</h4>
						<p>{stockDetails.marketcap}</p>
					</div>
					<div>
						<h4>Price-Earnings Ratio</h4>
						<p>{stockFinancials.metric && stockFinancials.metric.peNormalizedAnnual}</p>
					</div>
					<div>
						<h4>Dividend Yield</h4>
						{/* <p>{stockFinancials.metric.dividendYieldIndicatedAnnual}</p> */}
					</div>
					<div>
						<h4>Average Volume</h4>
						<p>{stockDetails.sector}</p>
					</div>					
				</div>
				<div className="company-stats-extra">
					<div>
						<h4>52 Week High</h4>
						<p>{stockFinancials.metric && stockFinancials.metric["52WeekHigh"]}</p>
					</div>
					<div>
						<h4>52 Week Low</h4>
						{/* <p>{stockFinancials.metric["52WeekLow"]}</p> */}
					</div>
					<div>
						<h4>Dividend Yield</h4>
						{/* <p>{stockFinancials.metric.dividendYieldIndicatedAnnual}</p> */}
					</div>
					<div>
						<h4>Average Volume</h4>
						<p>{stockDetails.sector}</p>
					</div>					
				</div>				

			</div>
	
			<div>
					{stockNews.map(article => { 
						return (
							<div className="article-holder" onClick={articleRedirect(article.url)}>
								<div>

								</div>
								<p className="article__title">{article.title}</p>
								<div>
									<h4 className="article__source">{article.source}</h4>

									<p className='article__date'>{article.publishedAt}</p>
								</div>
								<img src={article.image}/>
								<div>
									<p className="article__content">
										{article.summary}
									</p>
									<p className="article__content">
										{article.timestamp}
									</p>									
								</div>
								<div className='articleImg__container'>
									
								</div>
							</div>
						)
					})}
			</div>	
			<div className="similar-stocks">
				<p>{stockDetails.similar}</p>
			</div>
			

    	</div>
        
    )

}




export default StockDetails
