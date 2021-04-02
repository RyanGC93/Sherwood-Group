import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import GraphTimeLine from './components/GraphTimeLineOptions';
// import  from './components/Newsfeed/Newsfeed'
import Navigation from './components/Navigation';
import NewsFeed from './components/Newsfeed/Newsfeed'
import PageNotFound from './components/PageNotFound/PageNotFound'
import StockDetailPage from './components/StockDetailPage/StockDetailPage'
import {Switch, Route,Redirect} from 'react-router-dom'
import { restoreUser, loadAuthToken } from './store/session';
import { ProtectedRoute, PrivateRoute } from "./utils/route_protect_util";
import LoginSignupPage from "./components/LoginSignupPage";
// import Spinner from './assests/Spinner.js'
//import ProductDetail from "./components/ProductDetail/ProductDetail"

function App({needsAuth,loadAuthToken}) {
  const dispatch = useDispatch();
  useEffect(() => {
  	dispatch(restoreUser()).then(() => setIsLoaded(true));

  }, [dispatch])
  const [isLoaded, setIsLoaded] = useState(false);


  return (
    <>
      
        <Navigation isLoaded={isLoaded} />

      <Switch>
        <PrivateRoute

          exact path="/"
          needsAuth={needsAuth}
          component={NewsFeed}
        />
        <PrivateRoute
          exact path="/stocks/:stockTicker"
          needsAuth={needsAuth}
          component={StockDetailPage}
        />

        <PrivateRoute
          path="/news/:stockId"
          needsAuth={needsAuth}
          component={NewsFeed}
        />
		    <Route exact path="/signup">
          <LoginSignupPage />
        </Route>
        <Route path="*" component={PageNotFound} />
        <Redirect to="/"/>

      </Switch>
    </>
  );
}

const AppWrapper = () => {
  const needsAuth = useSelector((state) => !state.session.user);
  const dispatch = useDispatch();
  return <App needsAuth={needsAuth}  />;
};



export default AppWrapper;
