import etoile from '../assets/etoile.svg'
import React from 'react'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Carrousel from '../components/Carrousel'
import logement from '../logements.json'
import '../index.css'

function accueil() {
    return (
        <React.Fragment>
            <Banner />
            <main>
                <Carrousel />
                <div>
                    <p className='Logement__titre'>{logement[0].title}</p>
                    <p className='Logement__lieux'>{logement[0].location}</p>
                    <p className='Logement__hebergeur__nom'>{logement[0].host.name}</p>
                    <img src={`${logement[0].host.picture}`} alt='photo de profil'/>
                    <div>
                        <img src={etoile} alt={`note: ${logement[0].rating} etoiles`}/>
                        <img src={etoile} alt={`note: ${logement[0].rating} etoiles`}/>
                        <img src={etoile} alt={`note: ${logement[0].rating} etoiles`}/>
                        <img src={etoile} alt={`note: ${logement[0].rating} etoiles`}/>
                        <img src={etoile} alt={`note: ${logement[0].rating} etoiles`}/>
                    </div>
                </div>
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default accueil