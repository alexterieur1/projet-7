import React from 'react'
import Banner from '../components/Banner'
import Body from '../components/Body'
import Footer from '../components/Footer'
import { getAllLogement } from '../api'
import { useState } from 'react'
import { useEffect } from 'react'

function Accueil() {
    const [logement, setLogement] = useState(null)

    useEffect( () => {
        const search = async () => {
            let infoLogement = await getAllLogement()
            setLogement(infoLogement)
        }
        search()
    }, [])
    console.log(logement)
    return (
        <React.Fragment>
            <Banner />
            {logement.map((logement) => <Body id={`${logement.id}`} cover={`${logement.cover}`} title={`${logement.title}`}/>)}
            <Footer />
        </React.Fragment>
    )
}

export default Accueil