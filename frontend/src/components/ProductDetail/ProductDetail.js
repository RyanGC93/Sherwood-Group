import "./stockDetailPage.css"
import { useHistory, useParams } from "react-router-dom"
import {companyFinancials, realTimeStockQuotes, companyNews, companyDetails, stockQuotes} from '../../utils/newsApi.js'
import React, { useState, useEffect } from "react";



const ProductDetail= () => {
    const history = useHistory();
    const { stockTicker } = useParams();
    
    return (
        <>
            <div class="tradingview-widget-container"> <div id="tradingview_41615"></div> <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/symbols/NASDAQ-GME/" rel="noopener" target="_blank"><span class="blue-text">{stockTicker} Chart</span></a> by TradingView</div> <script type="text/javascript" src="https://s3.tradingview.com/tv.js"></script> <script type="text/javascript"> new TradingView.widget( {"width": 980, "height": 610, "symbol": "GME", "interval": "D", "timezone": "Etc/UTC", "theme": "light", "style": "1", "locale": "en", "toolbar_bg": "#f1f3f6", "enable_publishing": false, "allow_symbol_change": true, "container_id": "tradingview_41615" } ); </script> </div> 
        </>    
    )
    
}


export default ProductDetail
