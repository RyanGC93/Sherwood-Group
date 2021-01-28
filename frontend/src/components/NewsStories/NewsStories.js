// import key from "../apiInfo.js"
import React, { useState, useEffect } from "react";
import news from '../../utils/newsApi.js'
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


    
   
   
    return (
		<div>
			{loading}
			{articles === [] ? "No articles could be fetched" :
				<div>
					{articles.map(article => { 
						return (
							<div className="article-holder">
								<h3 classname="article__source">{article.source.name}</h3>
								<h2 className="article__title">{article.title}</h2>
								<div>{article.url}</div>
								<img src={article.urlToImage}/>
									<a href={article.url}>link</a>
								<div>
									<p className="article__content">
										{article.content}
									</p>
									<p className="article__content">
										{article.description}
									</p>									
								</div>
								<p className='article__date'>{article.publishedAt}</p>
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
