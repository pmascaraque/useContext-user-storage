import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Index } from './pages/Index';
import { About } from './pages/About';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
      </div>
    </Router>
  );
}

export default App;
