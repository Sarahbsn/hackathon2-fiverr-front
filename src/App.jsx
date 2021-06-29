import './App.css';
import Homepage from './components/homepage/homePage';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import MapPage from './components/MapPage/MapPage';
import FiverrAddEvents from './components/FiverrAddEvents/FiverrAddEvents';
import FiverrProfile from './components/FiverrProfile/FiverrProfile';

function App() {
  return (
    <div className="App">
      <Router >
        {/*         <Connection /> */}
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/fiverr" component={Homepage} />
          <Route exact path="/Events" component={FiverrAddEvents} />
          <Route exact path="/Friends" component={FiverrProfile} />
          <Route exact path='/mappage' component={MapPage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
