import '../style/footer.css'
import logo from '../assets/LOGO-footer.svg'
import { Outlet, Link } from 'react-router-dom'

function Banner() {
    return (
        <footer>
            <Link to='/'><img src={logo} alt='logo' /></Link>
                <p className='footer__texte'>© 2020 Kasa. All rights reserved</p>
            <Outlet />
        </footer>
    )
}

export default Banner