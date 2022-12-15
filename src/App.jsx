import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './pages/Accueil'
import APropos from './pages/Apropos'
import Erreur from './pages/Erreur'
import Logements from './pages/Logement'
import Banner from './components/Banner'
import Footer from './components/Footer'
import './index.scss'

function App() {
    return (
    <>
    <Router>
    <Banner/>
    <main>
        <Routes>
            <Route path='/' element={<Accueil />}></Route>
            <Route path='/apropos' element={<APropos />}></Route>
            <Route path='/logement/:id' element={<Logements />}></Route>
            <Route path='/*' element={<Erreur />}></Route>
        </Routes>
    </main>
    <Footer/>
    </Router>
    </>
    )
}

export default App