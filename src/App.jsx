import './App.css';
import Homepage from './components/homepage/homePage';
import Header from './components/Header';
import Footer from './components/Footer';
import Connection from './components/Connection';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import MapPage from './components/MapPage/MapPage';
import FiverrAddEvents from './components/FiverrAddEvents/FiverrShowEvent';
import FiverrProfile from './components/FiverrProfile/FiverrProfile';
import FiverrPersonalSpace from './components/FiverrPersonalSpace/FiverrPersonalSpace';
import { CreateMyEvent } from './components/FiverrCreateMyEvents/CreateMyEvent';


function App() {
  return (
    <div className="App">
      <Router >
        {/*         <Connection /> */}
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/fiverr" component={Homepage} />
          <Route exact path="/events/:id" render={(props) => <FiverrAddEvents {...props} />} />
          <Route exact path="/Connection" component={Connection} />
          <Route exact path="/showprofile/:id" render={(props) => <FiverrProfile {...props} />} />
          <Route exact path='/mappage' component={MapPage} />
          <Route exact path="/Resources" component={FiverrPersonalSpace} />
          <Route exact path="/Blog" component={CreateMyEvent} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
