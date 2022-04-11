import { version } from 'react-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { Route, BrowserRouter } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Container from '@mui/material/Container';

const App = () => {
  var docWidth = document.documentElement.offsetHeight;
  [].forEach.call(document.querySelectorAll('*'), function (el) {
    if (el.offsetHeight > docWidth) {
      console.log('||');
      console.log(el);
      console.log('||');
    }
  });
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />

        <div className="app-wrapper-content">
          <div className="app-skroll-part">
            <Route component={Profile} path="/profile" />
            <Route component={Dialogs} path="/messages" />
            <Route component={News} path="/news" />
            <Route component={Music} path="/music" />
            <Route component={Settings} path="/settings" />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
