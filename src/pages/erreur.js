import React from 'react'
import Banner from '../components/Banner/Index'
import Body from '../components/Erreur/Index'
import Footer from '../components/Footer/Index'

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