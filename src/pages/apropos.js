import React from 'react'
import Banner from '../components/banner/banner'
import Footer from '../components/footer/footer'
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