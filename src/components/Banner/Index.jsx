import logo from '../../assets/LOGO.svg'
import { Outlet, Link } from 'react-router-dom'
import './Banner.scss'

function Banner() {
    return (
        <header>
            <Link to='/'><img className='logo' src={logo} alt='logo' /></Link>
            <nav>
                <ul>
                    <li className='li'>
                        <Link to='/'>Accueil</Link>
                    </li>
                    <li className='li'>
                        <Link to='/apropos'>A Propos</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </header>
    )
}

export default Banner