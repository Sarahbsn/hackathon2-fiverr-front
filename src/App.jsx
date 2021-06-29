import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import FiverrAddEvents from './components/FiverrAddEvents/FiverrAddEvents';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Events" component={FiverrAddEvents} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
