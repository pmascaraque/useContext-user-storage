import React, { useState, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Index } from './pages';
import { About } from './pages/about';
import { UserContext } from './UserContext';

const App: React.FC = () => {
  const [user, setUser] = useState(null);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

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

        <UserContext.Provider value={{ value }}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default App;
