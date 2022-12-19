import { useState } from 'react'
import style from './Carrousel.module.scss'
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
            return setCount(count + NbrPhoto-1)
        }
        if(direction === 'droite' && count < NbrPhoto-1){
            return setCount(count + 1)
        }
        if(direction === 'droite' && count >= NbrPhoto-1){
            return setCount(count - NbrPhoto+1)
        }
    }
    return (
        <div className={style.carrousel}>
            <img onClick={() => boucle('gauche', count)} className={`${style.carrousel__fleche} ${style.carrousel__fleche__gauche}`} src={fleche} alt='carrousel'/>
            <img className={style.carrousel__image} src={picturesProps[count]} alt='carrousel'/>
            <img onClick={() => boucle('droite',count)} className={`${style.carrousel__fleche} ${style.carrousel__fleche__droite}`} src={fleche} alt='carrousel'/>
            <p className={style.carrousel__positionPhoto}>{`${count+1} / ${NbrPhoto}`}</p>
        </div>
    )
}

export default Carrousel