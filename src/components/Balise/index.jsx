import fleche from '../../assets/fleche.svg'
import style from './Balise.module.scss'
import React, { useState } from 'react'

function Balise(props) {

    const [isOpen, setIsOpen] = useState(false)
/* 
    const StateTexte = () => {
        if (Texte === true) {
            isOpen(false)
        }
        else {
            isOpen(true)
        }
    } */
    console.log(isOpen)
    return (
        <div className={style.corps__balise__apropos}>
            <div onClick={()=> isOpen ? setIsOpen(false): setIsOpen(true)} className={style.corps__titre__apropos}>
                <p>{props.title}</p>
                <img /*style={isOpen ? transform : rotate(0deg) : transform : rotate(0deg)}*/ src={fleche} alt='fleche en svg' />
            </div>
            {isOpen ? (
                <div className={style.corps__texte__apropos}>
                    {props.children.map((element, index) => <p key={index}>{element}</p>
                    )}
                </div>
            )
                : <></>}

        </div>
    )
}

export default Balise