import style from './Erreur.module.scss'
import { Outlet, Link } from 'react-router-dom'

function Erreur() {
    return (
        <>
            <div className={style.corps__erreur}>
                <div className={style.corps__erreur__global}>
                <p className={style.corps__erreur__404}>404</p>
                <p className={style.corps__erreur__texte}>Oups! La page que {`\n`}vous demandez n'existe pas.</p>
                </div>
                <Link to='/' className={style.corps__erreur__liens}>Retourner sur la page d’accueil</Link>
            </div>
            <Outlet />
        </>
    )
}

export default Erreur