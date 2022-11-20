import React from 'react'
import Banner from '../components/Banner/Index'
import Footer from '../components/Footer/Index'
import Body from '../components/Body_apropos/Index'

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