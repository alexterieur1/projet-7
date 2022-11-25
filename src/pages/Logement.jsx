import etoile from '../assets/etoile.svg'
import React from 'react'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Carrousel from '../components/Carrousel'
import serveur from '../logements.json'
import Tags from '../components/Tags'
import Balise from '../components/Balise_Apropos'
import '../index.css'

function accueil() {
    let array = []
    let idPage = document.URL.split('/')[4]
    serveur.map((e)=> array.push(e.id))
    let nbr = array.indexOf(idPage)
    let caracteristiqueLogement = serveur[nbr]
    return (
        <React.Fragment>
            <Banner />
            <main>
                <Carrousel />
                <div>
                    <div className='logement__informations'>
                        <div>
                            <p className='logement__titre'>{caracteristiqueLogement.title}</p>
                            <p className='logement__lieux'>{caracteristiqueLogement.location}</p>
                        </div>
                        <div className='logement__profil'>
                            <p className='logement__hebergeur__nom'>{caracteristiqueLogement.host.name}</p>
                            <img className='logement__photo' src={`${caracteristiqueLogement.host.picture}`} alt='profil' />
                        </div>
                    </div>
                    <div className='logement__notes'>
                        <Tags />
                        <div>
                            <img src={etoile} alt={`note: ${caracteristiqueLogement.rating} etoiles`} />
                            <img src={etoile} alt={`note: ${caracteristiqueLogement.rating} etoiles`} />
                            <img src={etoile} alt={`note: ${caracteristiqueLogement.rating} etoiles`} />
                            <img src={etoile} alt={`note: ${caracteristiqueLogement.rating} etoiles`} />
                            <img src={etoile} alt={`note: ${caracteristiqueLogement.rating} etoiles`} />
                        </div>
                    </div>
                </div>
                <Balise titre='description' texte={`${caracteristiqueLogement.description}`}/>
                <Balise titre='equipement'texte={`${caracteristiqueLogement.equipments}`}/>
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default accueil