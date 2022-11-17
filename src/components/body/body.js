import imgPrincipale from '../../assets/banniere_accueil.jpeg'
import './body.css'
import logements from '../../logements.json'

function Banner(props) {
    return (
        <main>
            <div className='corps__image'>
                <img className='image__titre' src={imgPrincipale} alt='illustration titre'/>
                <p className='image__titre--texte'>Chez vous, partout et ailleurs</p>
            </div>
            <div className='corps__annonces'>
            {logements.map((logement) => (
                <p>{logement.title}</p>
            ))}
            </div>
        </main>
    )
}

export default Banner