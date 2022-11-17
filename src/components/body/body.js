import imgPrincipale from '../../assets/banniere_accueil.jpeg'
import './body.css'
import logements from '../../logements.json'

function Banner() {
    return (
        <main>
            <div className='corps__image'>
                <img className='image__titre' src={imgPrincipale} alt='illustration titre'/>
                <p className='image__titre--texte'>Chez vous, partout et ailleurs</p>
            </div>
            <div className='corps__annonces'>
            {logements.map((logement) => (
                <a href={`./logement/:{logement.id}`} className='annonce'>
                    <img className='annonce__image' src={logement.cover} alt={logement.title}/>
                    {/* <p className='annonce__titre'>{logement.title}</p> */}
                </a>
            ))}
            </div>
        </main>
    )
}

export default Banner