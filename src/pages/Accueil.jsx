import imgPrincipale from '../assets/banniere_accueil.jpeg'
import React from 'react'
import Banner from '../components/Banner'
import Body from '../components/Body'
import Footer from '../components/Footer'
import { getAllLogement } from '../api'
import { useState } from 'react'
import { useEffect } from 'react'

function Accueil() {
    const [logement, setLogement] = useState(null)

    useEffect(() => {
        const search = async () => {
            let infoLogement = await getAllLogement()
            setLogement(infoLogement)
        }
        search()
    }, [])
    return (
        <React.Fragment>
            <Banner />
            <main>
                <div className='corps__image'>
                    <img className='image__titre' src={imgPrincipale} alt='illustration titre' />
                    <p className='image__titre--texte'>Chez vous, partout et ailleurs</p>
                </div>
                <div className='corps__annonces'>
                    {logement ? (
                        logement.map((logement) =>
                            <Body id={logement.id}
                                cover={logement.cover}
                                title={logement.title} />))
                        : <></>}
                </div>
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default Accueil