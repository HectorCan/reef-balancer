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
        <Route exact path="/" component={ReefOne} />
        <Route exact path="/shooter" component={Shooter} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
