import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Connection from './components/Connection';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import FiverrAddEvents from './components/FiverrAddEvents/FiverrAddEvents';
import FiverrProfile from './components/FiverrProfile/FiverrProfile';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Events" component={FiverrAddEvents} />
          <Route exact path='/connection' component={Connection} />
          <Route exact path="/Friends" component={FiverrProfile} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
