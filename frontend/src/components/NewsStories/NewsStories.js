// import key from "../apiInfo.js"





const getNewsStory = async() => {
    const newsUrl = "https://finnhub.io/api/v1/news?category=general"
    const res = await fetch(newsUrl)
    if (res.ok) {
        const data = res.json()
        return data;
    }
    else {
        return Promise.reject(res.status); 
   }

}

function NewsStories() {
	



    
   
   
    return (
        
    )

}
