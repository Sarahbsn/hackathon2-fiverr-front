import './App.css';
import Header from './components/Header';
import Connection from './components/Connection';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import MapPage from './components/MapPage/MapPage';

function App() {
  return (
    <div className="App">
      <Router >
        <Header />
        {/*         <Connection /> */}
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/mappage' component={MapPage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
