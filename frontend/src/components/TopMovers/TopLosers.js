import "./topMovers.css"
import React, {useEffect, useState} from 'react'
import dailyMovers from '../../utils/yahooApi.js'
const TopMover = () => {
	const[movers, setMovers] = useState([])
	const[isLoading, setIsLoading] = useState(true)

	useEffect(() => {

	const dailyMovers = {finance} = dailyMovers()
	if(dailyMovers) setIsLoading(false)
	setMovers()
	console.log(dailyMovers)
		
	})
	const loading = () => {
		if(isLoading){
			return (
				<>
				 <h3>Movers Are loading</h3>
				</>
			)
		}
	}
	const redirect = (id) =>{
		const history = history()
		history.push(`/stock/:${id}`)
	}
	return (
		<div>
			{loading}
			{movers === [] ? "No movers available": 				<div>
					{movers.map(topMover => { 
						return (
							<div className="topMover-holder" onClick={topMoverRedirect(topMover.url)}>
								<div>

								</div>
								<p className="topMover__title">{topMover.title}</p>
								<div>
									<h4 className="topMover__source">{topMover.source.name}</h4>

									<p className='topMover__date'>{topMover.publishedAt}</p>
								</div>
								<img src={topMover.urlToImage}/>
								<div>
									<p className="topMover__content">
										{topMover.content}
									</p>
									<p className="topMover__content">
										{topMover.description}
									</p>									
								</div>
								<div className='topMoverImg__container'>
									
								</div>
							</div>
						)
					})}
				</div>	
			}

    	</div>




		
	)

	
}
