import { Outlet } from 'react-router-dom';
// import './App.css';
import { GlobalStyle } from '../globalStyle';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Outlet />
      {/* <ReactQueryDevtools initialIsOpen={true} /> */}
    </>
  );
}

export default App;
