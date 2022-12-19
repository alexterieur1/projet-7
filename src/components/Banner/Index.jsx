import logo from '../../assets/LOGO.svg'
import { Outlet, Link, NavLink } from 'react-router-dom'
import style from './Banner.module.scss'

function Banner() {
    return (
        <header>
            <Link to='/'><img className={style.logo} src={logo} alt='logo' /></Link>
            <nav>
                <ul>
                    <li className={style.li}>
                        <NavLink to='/' className={({isActive}) => isActive ? style.active : undefined}>Accueil</NavLink>
                    </li>
                    <li className={style.li}>
                        <NavLink to='/apropos' className={({isActive}) => isActive ? style.active : undefined}>A Propos</NavLink>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </header>
    )
}

export default Banner