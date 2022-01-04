import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import './index.css';
import ReefOne from './pages/reef-1';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ReefOne />} />
        <Route path="shooter" element={<div>Hola mundo</div>} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
