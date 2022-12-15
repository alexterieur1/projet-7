import style from './erreur.module.scss'
import { Outlet, Link } from 'react-router-dom'

function Erreur() {
    return (
        <main>
            <div className={style.corps__erreur}>
                <div className={style.corps__erreur__global}>
                <p className={style.corps__erreur__404}>404</p>
                <p className={style.corps__erreur__texte}>Oups! La page que vous demandez n'existe pas.</p>
                </div>
                <Link to='/' className={style.corps__erreur__liens}>Retourner sur la page d’accueil</Link>
            </div>
            <Outlet />
        </main>
    )
}

export default Erreur