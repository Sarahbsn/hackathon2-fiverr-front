import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home'


function App() {
  return (
    <div className="App">
      <Router >
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
