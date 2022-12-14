import style from './Footer.module.scss'
import logo from '../../assets/LOGO-footer.svg'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer>
            <Link to='/'><img src={logo} alt='logo' /></Link>
                <p className={style.footer__texte}>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer