// Glavna aplikacija se pokreće sa ovog fajla.

import React from 'react';
import PlayerList from './components/PlayerList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<PlayerList />} />
            </Routes>
        </Router>
    );
}

export default App;