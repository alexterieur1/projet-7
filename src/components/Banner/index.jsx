import logo from '../../assets/LOGO.svg'
import { Outlet, Link } from 'react-router-dom'
import style from './banner.module.scss'

function Banner() {
    return (
        <header>
            <Link to='/'><img className={style.logo} src={logo} alt='logo' /></Link>
            <nav>
                <ul>
                    <li className={style.li}>
                        <Link to='/'>Accueil</Link>
                    </li>
                    <li className={style.li}>
                        <Link to='/apropos'>A Propos</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </header>
    )
}

export default Banner