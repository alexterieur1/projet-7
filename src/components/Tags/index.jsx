import serveur from '../../logements.json'
import './Tags.scss'

function tag() {
    let array = []
    let idPage = document.URL.split('/')[4]
    serveur.map((e)=> array.push(e.id))
    let nbr = array.indexOf(idPage)
    let caracteristiqueLogement = serveur[nbr]
    return (
        <div className='tag'>
            {caracteristiqueLogement.tags.map((e) => <p className='tag__element'>{e}</p>)}
        </div>
    )
}

export default tag