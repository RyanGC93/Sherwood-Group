import React, { useState, useEffect } from "react";
import {news} from '../../utils/newsApi.js'
import "./newsStories.css"



function NewsStories() {
	const [articles, setArticles] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false)
		


	useEffect(() => { 
		(async function() {
			const { newsArticles } = await news()
			if (newsArticles) {
				setIsLoaded(true);
				setArticles(newsArticles);
			}
		})()
	}, []) 


	const articleRedirect = (url) => {

		// window.location.replace(`${url}`)
	}
    
   
   
    return (
		<div>
			{/* {!isLoaded} */}
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
									<img className='article-img' alt='' src={article.urlToImage}/>
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
