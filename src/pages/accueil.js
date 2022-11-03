import React from 'react'
import Banner from '../components/banner'
import Body from '../components/body'
import Footer from '../components/footer'

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