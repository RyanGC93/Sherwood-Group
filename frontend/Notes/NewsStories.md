# News Sources
1. Bazinga
2. Market Watch
3. CNBC
4. Bloomberg
5. Reuters
6. Barron's
7. Wall Street Journal

# API Used

```js

// News  API
const key = "bb39957845924d94b982ac37d505afc0"// News  API
```
### Nodejs Library

https://newsapi.org/docs/client-libraries/node-js

```js
div.newsfeed
	// There is only one
	div.mainArticle
		div.Source  >>> res.source.name
		div.Content
		div.title   >>> res.title
		div.date    >>> res.publishedAt
		div.img     >>> res.UrlToImage

	// there is approx 20
	div.singleArticle
		div.Source  >>> res.source.name
		div.title   >>> res.title
		div.date    >>> res.publishedAt
		div.img     >>> res.UrlToImage
		


```



### Response

```json

{
-"source": {
"id": null,
"name": "ESPN"
},
"author": null,
"title": "Sources -- Chiefs' Le'Veon Bell, Sammy Watkins and Buccaneers' Antonio Brown, Antoine Winfield Jr. expected to play in Super Bowl - ESPN",
"description": "Le'Veon Bell and Sammy Watkins of the Chiefs and Antonio Brown and Antoine Winfield Jr. of the Buccaneers are expected to be healthy for the Super Bowl, sources told ESPN's Dianna Russini.",
"url": "https://www.espn.com/nfl/story/_/id/30782302/sources-kansas-city-chiefs-leveon-bell-sammy-watkins-tampa-bay-buccaneers-antonio-brown-antoine-winfield-jr-expected-play-super-bowl",
"urlToImage": "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2020%2F1221%2Fr792755_1296x729_16%2D9.jpg",
"publishedAt": "2021-01-26T16:01:41Z",
"content": "Several injured players for the Kansas City Chiefs and Tampa Bay Buccaneers are expected to be healthy for Super Bowl LV.\r\nChiefs running back Le'Veon Bell (knee) and wide receiver Sammy Watkins (cal… [+2185 chars]"
}





```
