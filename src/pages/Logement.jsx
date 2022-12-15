import React from 'react'
import Carrousel from '../components/Carrousel'
import Tags from '../components/Tags'
import Rating from '../components/Rating'
import Balise from '../components/Balise'
import '../index.scss'
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
                { logement ? (
                    <>
                    <Carrousel pictures={`${logement.pictures}`}/>
                        <div className='logement__informations'>
                            <div className='logement__informations--gauche'>
                                <div>
                                    <p className='logement__titre'>{logement.title}</p>
                                    <p className='logement__lieux'>{logement.location}</p>
                                </div><div className='tag'>
                                <Tags tag={logement.tags}/>
                                </div>
                            </div>
                            <div className='logement__informations--droite'>
                            <div className='logement__profil'>
                                    <p className='logement__hebergeur--nom'>
                                        <p>{logement.host.name.split(' ')[0]}</p>
                                        <p>{logement.host.name.split(' ')[1]}</p>
                                    </p>
                                    <img className='logement__photo' src={logement.host.picture} alt='profil' />
                                </div>
                                <Rating rating={logement.rating}/>
                            </div>
                        </div>
                        <div className='balises'>
                        <Balise>{'description'}{[logement.description]}</Balise>
                        <Balise>{'equipement'}{logement.equipments}</Balise>
                        </div>
                    </>
                ): <></>}
        </React.Fragment >
    )
}

export default Accueil