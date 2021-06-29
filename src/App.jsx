import './App.css';
import Homepage from './components/homepage/homePage';
import Header from './components/Header';
import Connection from './components/Connection';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Homepage />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/fiverr" component={Homepage} />
          <Route exact path="/connection" component={Connection} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
