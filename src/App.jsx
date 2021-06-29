import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Connection from './components/Connection'
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
          <Route exact path="/Connection" component={Connection} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
