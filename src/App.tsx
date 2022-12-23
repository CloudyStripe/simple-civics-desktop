import './App.css';
import { Home } from './components/Home';
import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { Link } from '../node_modules/react-router-dom/dist/index';

const App: React.FC = () => {
  return (

    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App;
