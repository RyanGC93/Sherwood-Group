const polygonApiKey = "QNI33gPsUqiEedC3ZHQTgo7now21EVao"
const newsApiKey = 'bb39957845924d94b982ac37d505afc0'
const finhubApiKey = 'c05kui748v6uiu318uh0'


const news  = async() => {
	const newsUrl = `https://newsapi.org/v2/everything?sources=barrons,market-watch,bazinga,bloomberg,cnbc,the-wall-street-journal,reuters&apiKey=${newsApiKey}`
    const res = await fetch(newsUrl)
    if (res.ok) {
        const data = await res.json()
        console.log('Success', data, res)
        return data
    }
    else {
 	   console.log('UNSUCESSFULE')
        return Promise.reject(res.status); 
   }
}


const companyNews  = async(ticker) => {
	const newsUrl = `https://api.polygon.io/v1/meta/symbols/${ticker}/news?perpage=10&page=1&apiKey=${polygonApiKey}`
    const res = await fetch(newsUrl)
    if (res.ok) {
        const data = await res.json()
        console.log('reached api', data, res)
        return data
    }
    else {
 	   console.log('UNSUCESSFULE companyUrl')
        return Promise.reject(res.status); 
   }
}
const companyFinancials  = async(ticker) => {
	const companyFinancialsUrl = `https://api.polygon.io/v2/reference/financials/${ticker}?limit=5&apiKey=${polygonApiKey}`
    const res = await fetch(companyFinancialsUrl)
    if (res.ok) {
        const data = await res.json()
        console.log('reached api', data, res)
        return data
    }
    else {
 	   console.log('UNSUCESSFULE companyUrl')
        return Promise.reject(res.status); 
   }
}



const companyDetails  = async(ticker) => {
	const companyDetailsUrl = `https://api.polygon.io/v1/meta/symbols/${ticker}/company?&apiKey=${polygonApiKey}`
    const res = await fetch(companyDetailsUrl)
    if (res.ok) {
        const data = await res.json()
        console.log('reached api', data, res)
        return data
    }
    else {
 	   console.log('UNSUCESSFULE companyUrl')
        return Promise.reject(res.status); 
   }
}

const stockQuotes  = async(ticker) => {
	const stockQuotesUrl = `https://finnhub.io/api/v1/quote?symbol=${ticker}&token=${finhubApiKey}`
    const res = await fetch(stockQuotesUrl)
    if (res.ok) {
        const data = await res.json()
        console.log('reached api', data, res)
        return data
    }
    else {
 	   console.log('UNSUCESSFULE companyUrl')
        return Promise.reject(res.status); 
   }
}




//===========General News -Return Result by general query
// const companyNews  = async(ticker) => {
// 	const newsUrl = `https://newsapi.org/v2/everything?q=${ticker}&sortBy=popularity&apiKey=${newsApiKey}`
//     const res = await fetch(newsUrl)
//     if (res.ok) {
//         const data = await res.json()
//         console.log('reached api', data, res)
//         return data
//     }
//     else {
//  	   console.log('UNSUCESSFULE companyUrl')
//         return Promise.reject(res.status); 
//    }
// }
export { news, companyFinancials, companyNews, companyDetails, stockQuotes}

