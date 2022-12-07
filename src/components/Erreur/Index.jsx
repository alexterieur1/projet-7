import './Body_erreur.scss'
import { Outlet, Link } from 'react-router-dom'

function bodyErreur() {
    return (
        <main>
            <div className='corps__erreur'>
                <div className='corps__erreur--global'>
                <p className='corps__erreur--404'>404</p>
                <p className='corps__erreur--texte'>Oups! La page que vous demandez n'existe pas.</p>
                </div>
                <Link to='/' className='corps__erreur--liens'>Retourner sur la page d’accueil</Link>
            </div>
            <Outlet />
        </main>
    )
}

export default bodyErreur