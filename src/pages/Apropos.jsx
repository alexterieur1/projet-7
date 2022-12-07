import banniere from '../assets/banniere_apropos.jpeg'
import React from 'react'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Balise from '../components/Balise_Apropos'

function accueil() {
    return (
        <React.Fragment>
            <Banner />
            <main>
                <div className='corps__image'>
                    <img className='image__titre' src={banniere} alt='illustration titre'/>
                </div>
                <Balise
                titre='Fiabilité'
                texte={["Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."]}/>
                <Balise
                titre='Respect'
                texte={["La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."]}/>
                <Balise
                titre='Service'
                texte={["Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."]}/>
                <Balise
                titre='Sécurité'
                texte={["La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."]}/>
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default accueil