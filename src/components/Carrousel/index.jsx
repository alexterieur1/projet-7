import { useState } from 'react'
import './Carrousel.scss'
import fleche from '../../assets/fleche.svg'

function Carrousel(props) {
    let picturesProps = props.pictures.split(",")
    const [count, setCount] = useState(0)
    console.log(count)
    const boucle = (direction, count) => {
        if(direction === 'gauche' && count >0){
            return setCount(count - 1)
        }
        if(direction === 'gauche' && count <=0){
            return setCount(count + 4)
        }
        if(direction === 'droite' && count <4){
            return setCount(count + 1)
        }
        if(direction === 'droite' && count >=4){
            return setCount(count - 4)
        }
    }
    return (
        <div className='carrousel'>
            <img onClick={() => boucle('gauche', count)} className='carrousel__fleche carrousel__fleche--gauche' src={fleche} alt='carrousel'/>
            <img className='carrousel__image' src={picturesProps[count]} alt='carrousel'/>
            <img onClick={() => boucle('droite',count)} className='carrousel__fleche carrousel__fleche--droite' src={fleche} alt='carrousel'/>
        </div>
    )
}

export default Carrousel