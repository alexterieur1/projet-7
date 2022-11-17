import logo from '../../assets/LOGO.svg'
import { Outlet, Link } from 'react-router-dom'
import './banner.css'

function Banner() {
    return (
        <header>
            <Link to='/'><img src={logo} alt='logo' /></Link>
            <nav>
                <ul>
                    <li className='li'>
                        <Link to='/'>Accueil</Link>
                    </li>
                    <li className='li'>
                        <Link to='/apropos'>A propos</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </header>
    )
}

export default Banner