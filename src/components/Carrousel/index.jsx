import { useState } from 'react'
import style from './carrousel.module.scss'
import fleche from '../../assets/fleche.svg'

function Carrousel(props) {
    let picturesProps = props.pictures.split(",")
    let NbrPhoto = props.pictures.split(',').length
    const [count, setCount] = useState(0)
    const boucle = (direction, count) => {
        if(direction === 'gauche' && count >0){
            return setCount(count - 1)
        }
        if(direction === 'gauche' && count <=0){
            return setCount(count + NbrPhoto)
        }
        if(direction === 'droite' && count <NbrPhoto){
            return setCount(count + 1)
        }
        if(direction === 'droite' && count >=NbrPhoto){
            return setCount(count - NbrPhoto)
        }
    }
    return (
        <div className={style.carrousel}>
            <img onClick={() => boucle('gauche', count)} className='carrousel__fleche carrousel_fleche__gauche' src={fleche} alt='carrousel'/>
            <img className={style.carrousel__image} src={picturesProps[count]} alt='carrousel'/>
            <img onClick={() => boucle('droite',count)} className='carrousel__fleche carrousel__fleche__droite' src={fleche} alt='carrousel'/>
        </div>
    )
}

export default Carrousel