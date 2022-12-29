import React from 'react'
import Carrousel from '../components/Carrousel'
import Tags from '../components/Tags'
import Rating from '../components/Rating'
import Balise from '../components/Balise'
import style from './Logement.module.scss'
import { getOneLogement } from '../api'
import { useLoaderData } from 'react-router-dom'

export async function loadData(props){
    const logement = await getOneLogement(props.params.id)
    return {logement}
}

function Logement() {
    const {logement} = useLoaderData()
    
    return (
        <React.Fragment>
            {logement ? (
                <>
                    <Carrousel pictures={`${logement.pictures}`} />
                    <div className={style.logement__informations}>
                        <div className={`${style.logement__informations__gauche} ${style.logement__informations}`}>
                            <div>
                                <p className={style.logement__titre}>{logement.title}</p>
                                <p className={style.logement__lieux}>{logement.location}</p>
                            </div>
                            <div className={style.logement__tag}>
                                <Tags tag={logement.tags} />
                            </div>
                        </div>
                        <div className={`${style.logement__informations__droite} ${style.logement__informations}`}>
                            <div className={style.logement__profil}>
                                <span className={`${style.logement__hebergeur__nom} ${style.logement__hebergeur}`}>
                                    <p>{logement.host.name.split(' ')[0]}</p>
                                    <p>{logement.host.name.split(' ')[1]}</p>
                                </span>
                                <img className={`${style.logement__hebergeur__photo} ${style.logement__hebergeur}`} src={logement.host.picture} alt='profil' />
                            </div>
                            <Rating rating={logement.rating} />
                        </div>
                    </div>
                    <div className={style.balises}>
                        <Balise title='description'><p>{logement.description}</p></Balise>
                        <Balise title='equipement'>{logement.equipments.map((element, index)=> <p key={index}>{element}</p>)}</Balise>
                    </div>
                </>
            ) : <></>}
        </React.Fragment >
    )
}

export default Logement