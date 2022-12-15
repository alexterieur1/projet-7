import fleche from '../../assets/fleche.svg'
import style from './balise.module.scss'
import React, { useState } from 'react'

function Balise(props) {

    const [Fleche, setFleche] = useState(180)
    const [Texte, setTexte] = useState(false)

    const StateTexte = () => {
        if (Texte === true) {
            setFleche(Fleche + 180)
            setTexte(false)
        }
        else {
            setTexte(true)
            setFleche(Fleche - 180)
        }
    }
    console.log(props.children[1])
    return (
        <>
            <div onClick={() => StateTexte()} className={style.corps__titre__apropos}>
                <p>{props.children[0]}</p>
                <img style={{ rotate: Fleche + 'deg' }} src={fleche} alt='fleche en svg' />
            </div>
            {Texte ? (
                    <div className={style.corps__texte__apropos}>
                        {props.children[1].map((element, index) => <p key={index}>{element}</p>
                        )}
                    </div>
                    )
                 : <></>}
        </>
    )
}

export default Balise