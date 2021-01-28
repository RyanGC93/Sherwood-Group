const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('bb39957845924d94b982ac37d505afc0');
// To query /v2/top-headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them
const news  = async() => {
    const newsUrl = "https://newsapi.org/v2/top-headlines?sources=bloomberg,cnbc,the-wall-street-journal,reuters&apiKey=bb39957845924d94b982ac37d505afc0"
    const res = await fetch(newsUrl)
    if (res.ok) {
        const data = await res.json()
        console.log('Success', data, res)
        return data;
    }
    else {
 	   console.log('UNSUCESSFULE')
        return Promise.reject(res.status); 
   }

}
export default news
