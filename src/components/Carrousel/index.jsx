import './Carrousel.scss'
import logements from '../../logements.json'

function Carrousel() {
    console.log(logements[0].pictures[0])
    return (
        <div className='Carrousel__parent'>
            <img className='Carrousel' src={logements[0].pictures[0]} alt='carrousel'/>
        </div>
    )
}

export default Carrousel