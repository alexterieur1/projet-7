import banniere from '../assets/banniere_apropos.jpeg'
import React from 'react'
import Balise from '../components/Balise'

function accueil() {
    return (
        <React.Fragment>
                <div className='corps__image'>
                    <img className='image__titre' src={banniere} alt='illustration titre'/>
                </div>
                <Balise>
                {'Fiabilité'}
                {["Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."]}
                </Balise>
                <Balise>
                {'Respect'}
                {["La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."]}
                </Balise>
                <Balise>
                {'Service'}
                {["Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."]}
                </Balise>
                <Balise>
                {'Sécurité'}
                {["La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."]}
                </Balise>
        </React.Fragment>
    )
}

export default accueil