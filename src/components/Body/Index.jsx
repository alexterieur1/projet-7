import imgPrincipale from '../../assets/banniere_accueil.jpeg'
import './Body.scss'
import { Outlet, Link } from 'react-router-dom'

function Body(props) {
    console.log(props.logements)
    return (
        <main>
            <div className='corps__image'>
                <img className='image__titre' src={imgPrincipale} alt='illustration titre'/>
                <p className='image__titre--texte'>Chez vous, partout et ailleurs</p>
            </div>
            <div className='corps__annonces'>
                <Link to={`/logement/${props.id}`} className='annonce' key={props.id}>
                    <img className='annonce__image' src={props.cover} alt={props.title}/>
                    <p className='annonce__titre'>{props.title}</p>
                </Link>
            </div>
            <Outlet/>
        </main>
    )
}

export default Body