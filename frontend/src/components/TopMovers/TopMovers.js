import "./topMovers.css"
import { useHistory,useParams } from "react-router-dom"
import {dailyGainers,dailyLosers,dailyMostActive} from '../../utils/newsApi.js'
import React, { useState, useEffect } from "react";



const MoverDetails = () => {

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
			
    	</div>
        
    )

}




export default MoverDetails
