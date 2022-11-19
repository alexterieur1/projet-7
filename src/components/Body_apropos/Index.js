import banniere from '../../assets/banniere_apropos.jpeg'
import './body.css'

function Banner() {
    return (
        <main>
            <div className='corps__image'>
                <img className='image__titre' src={banniere} alt='illustration titre'/>
            </div>
            <div>
                <p>Fiabilité</p>
            </div>
            <div>
                <p>Respect</p>
            </div>
            <div>
                <p>Service</p>
            </div>
            <div>
                <p>Responsabilité</p>
            </div>
        </main>
    )
}

export default Banner