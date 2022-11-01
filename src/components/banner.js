import logo from '../assets/LOGO.svg'
import acceuil from '../assets/LOGO.svg'
import aPropos from '../assets/LOGO.svg'

function Banner() {
    return (
        <div>
            <img src={logo} alt='logo'/>
            <nav>
                <a href={acceuil}>Accueil</a>
                <a href={aPropos}>A Propos</a>
            </nav>
        </div>
    )
}

export default Banner