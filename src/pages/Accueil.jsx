import imgPrincipale from '../assets/banniere_accueil.jpeg'
import React from 'react'
import Body from '../components/Cards'
import style from './Accueil.module.scss'
import { getAllLogement } from '../api'
import { useLoaderData } from 'react-router-dom'

export async function loadData(){
    const logement = await getAllLogement()
    return {logement}
}

function Accueil() {
    const { logement } =useLoaderData()
    return (
        <React.Fragment>
            <div className={style.corps__image}>
                    <img className={style.image__titre} src={imgPrincipale} alt='illustration titre' />
                    <p className={style.image__titre__texte}>Chez vous, {`\n`}partout et ailleurs</p>
                </div>
                <div className={style.corps__annonces}>
                    {logement ? (
                        logement.map((logement,index) =>
                            <Body key={index} id={logement.id}
                                cover={logement.cover}
                                title={logement.title} />))
                        : <></>}
                </div>
        </React.Fragment>
    )
}

export default Accueil