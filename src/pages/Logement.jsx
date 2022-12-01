import etoile from '../assets/etoile.svg'
import React from 'react'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Carrousel from '../components/Carrousel'
import Tags from '../components/Tags'
import Balise from '../components/Balise_Apropos'
import '../index.css'
import { getOneLogement } from '../api'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Accueil() {
    const [logement, setLogement] = useState(null)

    let { id } = useParams()
    useEffect( () => {
        const search = async () => {
            let infoLogement = await getOneLogement({id}.id)
            setLogement(infoLogement)
        }
        search()
    }, [id])
    return (
        <React.Fragment>
            <Banner />
            <main>
                { logement ? (
                    <>
                    <Carrousel pictures={`${logement.pictures}`}/>
                        <div>
                            <div className='logement__informations'>
                                <div>
                                    <p className='logement__titre'>{logement.title}</p>
                                    <p className='logement__lieux'>{logement.location}</p>
                                </div>
                                <div className='logement__profil'>
                                    <p className='logement__hebergeur__nom'>{logement.host.name}</p>
                                    <img className='logement__photo' src={`${logement.host.picture}`} alt='profil' />
                                </div>
                            </div>
                            <div className='logement__notes'>
                                <Tags />
                                <div>
                                    <img src={etoile} alt={`note: ${logement.rating} etoiles`} />
                                    <img src={etoile} alt={`note: ${logement.rating} etoiles`} />
                                    <img src={etoile} alt={`note: ${logement.rating} etoiles`} />
                                    <img src={etoile} alt={`note: ${logement.rating} etoiles`} />
                                    <img src={etoile} alt={`note: ${logement.rating} etoiles`} />
                                </div>
                            </div>
                        </div>
                        <Balise titre='description' texte={`${logement.description}`}/>
                        <Balise titre='equipement'texte={`${logement.equipments}`}/>
                    </>
                ): <></>}
            </main>
            <Footer />
        </React.Fragment >
    )
}

export default Accueil