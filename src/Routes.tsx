import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Search from './Routes/Search';
import ComingSoon from './Routes/ComingSoon';
import NowPlaying from './Routes/NowPlaying';
import Popular from './Routes/Popular';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Popular />, // popular movies
      },
      {
        path: 'movies/:movieId',
        element: <Popular />,
      },
      {
        path: 'coming-soon', // coming soon
        element: <ComingSoon />,
      },
      {
        path: 'movies/:movieId',
        element: <ComingSoon />,
      },
      {
        path: 'search',
        element: <Search />,
      },
      {
        path: 'now-playing', // now playing
        element: <NowPlaying />,
      },
      {
        path: 'movies/:movieId',
        element: <NowPlaying />,
      },
    ],
  },
]);

export default router;
