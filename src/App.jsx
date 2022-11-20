import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './pages/Accueil'
import APropos from './pages/Apropos'
import Erreur from './pages/Erreur'
import Logements from './pages/Logement'
import './index.css'

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Accueil />}></Route>
                <Route path='/apropos' element={<APropos />}></Route>
                <Route path='/logement/:id' element={<Logements />}></Route>
                <Route path='/*' element={<Erreur />}></Route>
            </Routes>
        </Router>
    )
}

export default App