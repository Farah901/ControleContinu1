import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Composant1 from './Components/Composant1';
import Composant2 from './Components/Composant2';
import Composant3 from './Components/Composant3';

const App = () => {
  return (
    <div>
      {/* Bootstrap-styled navigation bar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav m-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/composant1">
                  <b>Liste des Salariés</b>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/composant2">
                  <b>Gestion des Voitures</b>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/composant3">
                  <b>Recherche par Service</b>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route path="/composant1" element={<Composant1 />} />
          <Route path="/composant2" element={<Composant2 />} />
          <Route path="/composant3" element={<Composant3 />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
