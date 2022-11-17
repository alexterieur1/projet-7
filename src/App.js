import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './pages/accueil'
import APropos from './pages/apropos'
import Erreur from './pages/erreur'
import Logements from './pages/logement'
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