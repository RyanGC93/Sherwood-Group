import "./stockDetailPage.css"
import { useHistory,useParams } from "react-router-dom"
import {companyFinancials, companyNews, companyDetails, stockQuotes} from '../../utils/newsApi.js'
import React, { useState, useEffect } from "react";




function StockDetails() {
	const [stockNews, setStockNews] = useState([]);
	const [stockFinancials, setStockFinancials] = useState([]);
	const [stockDetails, setStockDetails] = useState([]);
	const [isLoading, setIsLoading] = useState([])
	const [stockQuotes, setStockQuotes] = useState([])	
	const { stockTicker } = useParams()
		

	useEffect(() => { 
		const fetchExternalApiInfo = async () => {
			const stockFinancials = await companyFinancials(stockTicker)
			const stockDetails = await companyDetails(stockTicker)
			const stockQuotes = await companyDetails(stockTicker)			
			const stockNews = await companyNews(stockTicker)
			if (stockNews && stockDetails && stockFinancials && stockQuotes) setIsLoading(false)
			setStockNews(stockNews)
			setStockQuotes(stockQuotes)
			setStockFinancials(stockFinancials)
			setStockDetails(stockDetails)
			console.log("stockDetails", stockDetails)
			console.log("stockNews", stockNews)
			console.log("stockFinancials", stockFinancials)
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
			

    	</div>
        
    )

}

export default StockDetails
