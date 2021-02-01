// import key from "../apiInfo.js"


// import key from "../apiInfo.js"
import React, { useState, useEffect } from "react";
import {news} from '../../utils/newsApi.js'
import "./newsStories.css"



function NewsStories() {
	const [articles, setArticles] = useState([]);
	const [isLoading, setIsLoading] = useState([])
		


	useEffect(() => { 
		const fetchTopStories = async () => {
			const { articles } = await news()
			if (articles) setIsLoading(false)
			setArticles(articles)
			console.log("topStories", articles)
		}
		fetchTopStories()
		console.log(articles)
	}, [articles]) 
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
							<div className="article-holder news-container" onClick={articleRedirect(article.url)}>
								<div>

								</div>
								<div className="article__title">{article.title}</div>
								<div className="article__row">
								</div>
								<div className="article_holder">
									<div className="article__row">
										<div className="article__source">{article.source.name}</div>

										<div className='article__date'>{article.publishedAt}</div>

									</div>
									<img src={article.urlToImage}/>
									<p className="article__content">
										{article.description}
									</p>									
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
