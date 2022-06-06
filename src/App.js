import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import './index.css';
import ReefOne from './pages/reef-1';
import Shooter from './minigames/shooter';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/reef-balancer" component={ReefOne} />
        <Route exact path="/reef-balancer/shooter" component={Shooter} />
        <Redirect to="/reef-balancer" />
      </Switch>
    </Router>
  );
}

export default App;
