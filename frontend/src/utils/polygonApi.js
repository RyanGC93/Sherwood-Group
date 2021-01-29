const polygonApiKey = 'QNI33gPsUqiEedC3ZHQTgo7now21EVao'
// https://api.polygon.io/v2/snapshot/locale/us/markets/stocks/gainers?&apiKey=QNI33gPsUqiEedC3ZHQTgo7now21EVao

const polygonApiFetch  = async() => {
	const polygonFetchUrl = `https://api.polygon.io/v2/snapshot/locale/us/markets/stocks/gainers?&apiKey=${polygonApiKey}`
    const res = await fetch(polygonFetchUrl)
    if (res.ok) {
        const data = await res.json()
        console.log('Success', data, res)
        return data
    }
    else {
 	   console.log('movers apiNotworking')
        return Promise.reject(res.status); 
   }

}
export default polygonApiFetch
