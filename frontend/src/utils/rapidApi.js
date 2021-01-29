// These were made with rapid API

const yahooApiKey = 'd518fefe68mshc49f55a05174023p17ab61jsn8f5081e108e1'

const yahooApiKey = 'd518fefe68mshc49f55a05174023p17ab61jsn8f5081e108e1'



const dailyMovers = async () => await (await fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-movers?region=US&lang=en-US&start=0&count=6", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": `${yahooApiKey}`,
		"x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
	}
})).json()


export default dailyMovers

const dailyMovers = async () => await (await fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-movers?region=US&lang=en-US&start=0&count=6", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": `${yahooApiKey}`,
		"x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
	}
})).json()


export default dailyMovers
