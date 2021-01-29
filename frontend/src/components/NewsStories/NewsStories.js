// import key from "../apiInfo.js"
import { useHistory } from "react-router-dom"


// import key from "../apiInfo.js"
import React, { useState, useEffect } from "react";
import {news} from '../../utils/newsApi.js'
import "./newsStories.css"



function NewsStories() {
	const [articles, setArticles] = useState([]);
	const [isLoading, setIsLoading] = useState([])
		
	const history = useHistory()

	useEffect(() => { 
		const fetchTopStories = async () => {
			const { articles } = await news()
			if (articles) setIsLoading(false)
			setArticles(articles)
			console.log("topStories", articles)
		}
		fetchTopStories()
		console.log(articles)
	}, []) 
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

		// window.location.replace(`${url}`)
	}
    
   
   
    return (
		<div>
			{loading}
			{articles === [] ? "No articles could be fetched" :
				<div>
					{articles.map(article => { 
						return (
							<div className="article-holder" onClick={articleRedirect(article.url)}>
								<div>

								</div>
								<p className="article__title">{article.title}</p>
								<div>
									<h4 className="article__source">{article.source.name}</h4>

									<p className='article__date'>{article.publishedAt}</p>
								</div>
								<img src={article.urlToImage}/>
								<div>
									<p className="article__content">
										{article.content}
									</p>
									<p className="article__content">
										{article.description}
									</p>									
								</div>
								<div className='articleImg__container'>
									
								</div>
							</div>
						)
					})}
				</div>	
			}

    	</div>
        
    )

}

export default NewsStories
