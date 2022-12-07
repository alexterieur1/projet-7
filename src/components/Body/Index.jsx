import './Body.scss'
import { Outlet, Link } from 'react-router-dom'

function Body(props) {
    console.log(props)
    return (
        <>
                <Link to={`/logement/${props.id}`} className='annonce' key={props.id}>
                    <img className='annonce__image' src={props.cover} alt={props.title} />
                    <p className='annonce__titre'>{props.title}</p>
                </Link>
            <Outlet />
        </>
    )
}

export default Body