import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import FiverrAddEvents from './components/FiverrAddEvents/FiverrAddEvents';

function App() {
  return (
    <div className="App">
      <Router >
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/Friends' component={FiverrAddEvents} />
      </Switch>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
