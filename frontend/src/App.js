import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
//import GraphTimeLine from './components/GraphTimeLineOptions';
// import  from './components/Newsfeed/Newsfeed'
import Navigation from './components/Navigation';
import NewsFeed from './components/Newsfeed/Newsfeed'
import { restoreUser } from './store/session';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      <NewsFeed />
    </>
  );
}

export default App;
