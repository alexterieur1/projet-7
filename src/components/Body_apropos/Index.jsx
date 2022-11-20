import banniere from '../../assets/banniere_apropos.jpeg'
import fleche from '../../assets/fleche.svg'
import './Body.scss'
import React, {useState} from 'react'

function Banner() {

    const [Fleche, setFleche] = useState(180)
    const [Texte, setTexte] = useState('none')

    const DisplayTexte = () =>{
        if (Texte === 'block'){
            setFleche(Fleche + 180)
            console.log(Texte)
            setTexte('none')
        }
        else{
            setTexte('block')
            setFleche(Fleche - 180)
        }
    }

    return (
        <main>
            <div className='corps__image'>
                <img className='image__titre' src={banniere} alt='illustration titre'/>
            </div>
            <div onClick={() => DisplayTexte()} className='corps__titre--apropos'>
                <p>Fiabilité</p>
                <img style={{rotate:Fleche + 'deg'}} src={fleche} alt='fleche en svg'/>
            </div>
                <div style={{display:Texte}}>
                    <p className='corps__texte--apropos'>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
                </div>
                <div onClick={() => DisplayTexte()} className='corps__titre--apropos'>
                <p>Respect</p>
                <img style={{rotate:Fleche + 'deg'}} src={fleche} alt='fleche en svg'/>
            </div>
                <div style={{display:Texte}}>
                    <p className='corps__texte--apropos'>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                </div>
                <div onClick={() => DisplayTexte()} className='corps__titre--apropos'>
                <p>Service</p>
                <img style={{rotate:Fleche + 'deg'}} src={fleche} alt='fleche en svg'/>
            </div>
                <div style={{display:Texte}}>
                    <p className='corps__texte--apropos'>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
                </div>
                <div onClick={() => DisplayTexte()} className='corps__titre--apropos'>
                <p>Responsabilité</p>
                <img style={{rotate:Fleche + 'deg'}} src={fleche} alt='fleche en svg'/>
            </div>
                <div style={{display:Texte}}>
                    <p className='corps__texte--apropos'>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
                </div>
        </main>
    )
}

export default Banner