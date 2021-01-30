import "./topMovers.css"
import { useHistory,useParams } from "react-router-dom"
import {dailyMovers} from '../../utils/newsApi.js'
import React, { useState, useEffect } from "react";



const MoversDetails=() => {

	const [isLoading, setIsLoading] = useState([])
	const [dailyMovers, setDailyMovers] = useState([])	
		

	useEffect(() => { 
		const fetchExternalApiInfo = async () => {
			const dailyMovers = await dailyMovers()
			if (dailyMovers) setIsLoading(false)
			setDailyMovers(dailyMovers)

			console.log(dailyMovers)

		}
		fetchExternalApiInfo()

	}, [] ) 
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
			
    	</div>
        
    )

}




export default StockDetails
