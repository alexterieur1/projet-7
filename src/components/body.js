import imgPrincipale from '../assets/IMG.png'
import '../style/body.css'

function Banner() {
    return (
        <main>
            <div className='corps__image'>
                <img className='image__titre' src={imgPrincipale} alt='illustration titre'/>
            <p className='image__titre--texte'>Chez vous, partout et ailleurs</p>
            </div>
        </main>
    )
}

export default Banner