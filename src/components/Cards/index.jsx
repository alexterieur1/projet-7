import style from './Cards.module.scss'
import { Link } from 'react-router-dom'

function Cards(props) {
    return (
        <>
                <Link to={`/logement/${props.id}`} className={style.annonce} key={props.id}>
                    <img className={style.annonce__image} src={props.cover} alt={props.title} />
                    <p className={style.annonce__titre}>{props.title}</p>
                </Link>
        </>
    )
}

export default Cards