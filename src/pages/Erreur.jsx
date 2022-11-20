import React from 'react'
import Banner from '../components/Banner'
import Body from '../components/Erreur'
import Footer from '../components/Footer'

function accueil() {
    return (
        <React.Fragment>
            <Banner />
            <Body />
            <Footer />
        </React.Fragment>
    )
}

export default accueil