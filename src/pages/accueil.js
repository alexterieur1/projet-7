import React from 'react'
import Banner from '../components/banner/banner'
import Body from '../components/body/body'
import Footer from '../components/footer/footer'

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