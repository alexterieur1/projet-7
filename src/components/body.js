import imageTitreAccueil from '../assets/IMG.png'
import '../style/body.css'

function Banner() {
    return (
        <div>
            <img  className='image__titre' src={imageTitreAccueil} alt='image principale'/>
            <p className='image__titre--texte'>Chez vous, partout et ailleurs</p>
        </div>
    )
}

export default Banner