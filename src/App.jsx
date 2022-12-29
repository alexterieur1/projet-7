import React from 'react'
import { Outlet } from 'react-router-dom'
import Banner from './components/Banner'
import Footer from './components/Footer'
import './index.scss'

function App() {
    return (
        <>
            <Banner />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default App