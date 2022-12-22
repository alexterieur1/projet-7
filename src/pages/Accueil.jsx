import imgPrincipale from '../assets/banniere_accueil.jpeg'
import React from 'react'
import Body from '../components/Cards'
import style from './Accueil.module.scss'
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