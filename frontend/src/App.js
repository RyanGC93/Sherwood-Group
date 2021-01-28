import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import GraphTimeLine from './components/GraphTimeLineOptions';
// import  from './components/Newsfeed/Newsfeed'
import Navigation from './components/Navigation';
import NewsFeed from './components/Newsfeed/Newsfeed'
import {Switch, Route,Redirect} from 'react-router-dom'
import { restoreUser, loadAuthToken } from './store/session';
import { ProtectedRoute, PrivateRoute } from "./utils/route_protect_util";
import SignupFormPage from "./components/SignupFormPage";

function App({needsAuth,loadAuthToken}) {
  const dispatch = useDispatch();
  useEffect(() => {
  	dispatch(restoreUser()).then(() => setIsLoaded(true));
  	loadAuthToken()
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
          path="/stocks:stockId"
          needsAuth={needsAuth}
          component={NewsFeed}
        />        
        <PrivateRoute
          path="/news:stockId"
          needsAuth={needsAuth}
          component={NewsFeed}
        />             
		<Route exact path="/signup">
          <SignupFormPage />
        </Route>
		 
      </Switch>	
    </>
  );
}

const AppWrapper = () => {
  const needsAuth = useSelector((state) => !state.session.user);
  const dispatch = useDispatch();
  return <App needsAuth={needsAuth} loadAuthToken={() => dispatch(loadAuthToken())} />;
};



export default AppWrapper;
