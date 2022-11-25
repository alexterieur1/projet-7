import imgPrincipale from '../../assets/banniere_accueil.jpeg'
import './Body.scss'
import { Outlet, Link } from 'react-router-dom'
import logements from '../../logements.json'

function Body() {
    return (
        <main>
            <div className='corps__image'>
                <img className='image__titre' src={imgPrincipale} alt='illustration titre'/>
                <p className='image__titre--texte'>Chez vous, partout et ailleurs</p>
            </div>
            <div className='corps__annonces'>{
            logements.map((e) => (
                <Link to={`/logement/${e.id}`} className='annonce'>
                    <img className='annonce__image' src={e.cover} alt={e.title}/>
                    <p className='annonce__titre'>{e.title}</p>
                </Link>
            ))}
            </div>
            <Outlet/>
        </main>
    )
}

export default Body