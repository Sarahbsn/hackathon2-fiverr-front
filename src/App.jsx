import './App.css';
import Header from './components/Header';
import Connection from './components/Connection';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home'


function App() {
  return (
    <div className="App">
      <Router >
      <Header />
      <Connection />
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
