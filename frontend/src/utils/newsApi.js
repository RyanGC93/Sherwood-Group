
const polygonApiKeyThree = 'TJfPVh_I0vGTiaOQHg4FF2DroXAKpm8j'
const polygonApiKeyTwo = "1Mphgudtb4SQvGUGfeGwHG5tXyHQZkuq"
const polygonApiKeyOne = "QNI33gPsUqiEedC3ZHQTgo7now21EVao"
const newsApiKey = 'bb39957845924d94b982ac37d505afc0'
const finhubApiKey = 'c05kui748v6uiu318uh0'
const yahooApiKey = 'd518fefe68mshc49f55a05174023p17ab61jsn8f5081e108e1'
const finacialModelingApiKey = '3cda349d1d529cdb956e572387e18434'




const dailyGainers  = async() => {

    const res = await fetch(`https://financialmodelingprep.com/api/v3/stock/gainers?apikey=${finacialModelingApiKey}`)
    if (res.ok) {
        const data = await res.json()
        console.log('dailyMovers', data, res)
        return data.mostGainerStock.slice(0,5)

    }
    else {
 	   console.log('UNSUCESSFULE')
        return Promise.reject(res.status);
   }
}
const dailyMostActive  = async() => {

    const res = await fetch(`https://financialmodelingprep.com/api/v3/actives?apikey=${finacialModelingApiKey}`)
    if (res.ok) {
        const data = await res.json()
        console.log('dailyMostActive', data, res)
        return data.slice(0,5)
    }
    else {
 	   console.log('UNSUCESSFULE')
        return Promise.reject(res.status);
   }
}


const dailyLosers  = async() => {

    const res = await fetch(`https://financialmodelingprep.com/api/v3/losers?apikey=${finacialModelingApiKey}`)
    if (res.ok) {
        const data = await res.json()
        console.log('dailyLosers', data, res)
        return data.slice(0,5)
    }
    else {
 	   console.log('UNSUCESSFULE')
        return Promise.reject(res.status);
   }
}

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
	const newsUrl = `https://api.polygon.io/v1/meta/symbols/${ticker}/news?perpage=10&page=1&apiKey=${polygonApiKeyOne}`
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
// const companyFinancials  = async(ticker) => {
	// const companyFinancialsUrl = `https://api.polygon.io/v2/reference/financials/${ticker}?limit=5&type=Y&apiKey=${polygonApiKeyTwo}`
    // const res = await fetch(companyFinancialsUrl)
    // if (res.ok) {
        // const data = await res.json()
        // console.log('reached api', data, res)
        // return data
    // }
    // else {
 	   // console.log('UNSUCESSFULE companyUrl')
        // return Promise.reject(res.status);
   // }
// }

const companyFinancials  = async(ticker) => {
	//      https://finnhub.io/api/v1/stock/metric?symbol=AAPL&metric=all&token=c05kui748v6uiu318uh0

	const companyFinancialsUrl = `https://finnhub.io/api/v1/stock/metric?symbol=${ticker}&metric=all&token=${finhubApiKey}`
    const res = await fetch(companyFinancialsUrl)
    if (res.ok) {
        const data = await res.json()
        return data
    }
    else {
 	   console.log('UNSUCESSFULE companyUrl')
        return Promise.reject(res.status); 
   }
}

const companyDetails  = async(ticker) => {
	// Changed to limit calls to the api
	 const companyDetailsUrl = `https://api.polygon.io/v1/meta/symbols/${ticker}/company?&apiKey=${polygonApiKeyThree}`
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


const realTimeStockQuotes  = async(ticker) => {
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
export { news, dailyGainers,dailyLosers, dailyMostActive, realTimeStockQuotes, companyFinancials, companyNews, companyDetails, stockQuotes}

