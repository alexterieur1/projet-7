import '../style/bodyErreur.css'
import { Outlet, Link } from 'react-router-dom'

function Banner() {
    return (
        <main>
            <div className='corps__erreur'>
                <p className='corps__erreur--404'>404</p>
                <p className='corps__erreur--texte'>Oups! La page que vous demandez n'existe pas.</p>
                <p className='corps__erreur--liens'><Link to='/'>Retourner sur la page d’accueil</Link></p>
            </div>
            <Outlet />
        </main>
    )
}

export default Banner