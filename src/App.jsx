import Homepage from './components/homepage/homePage';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import FiverrAddEvents from './components/FiverrAddEvents/FiverrAddEvents';
import FiverrProfile from './components/FiverrProfile/FiverrProfile';
import Connection from './components/Connection';
import FiverrPersonalSpace from './components/FiverrPersonalSpace/FiverrPersonalSpace';
import { CreateMyEvent } from './components/FiverrCreateMyEvents/CreateMyEvent';
import ChatApp from './ChatApp';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/fiverr" component={Homepage} />
          <Route exact path="/Connection" component={Connection} />
          <Route exact path="/Events" component={FiverrAddEvents} />
          <Route exact path="/Friends" component={FiverrProfile} />
          <Route exact path="/Resources" component={FiverrPersonalSpace} />
          <Route exact path="/Blog" component={CreateMyEvent} />
          <Route exact path="/conversation" component={ChatApp} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
