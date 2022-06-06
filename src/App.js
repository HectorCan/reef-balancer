import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import './index.css';
import ReefOne from './pages/reef-1';
import Shooter from './minigames/shooter';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/reef-balancer" element={<ReefOne />} />
        <Route path="/reef-balancer/shooter" element={<Shooter />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
