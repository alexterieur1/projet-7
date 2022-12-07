import fleche from '../../assets/fleche.svg'
import './Body.scss'
import React, { useState } from 'react'

function Balise(props) {

    const [Fleche, setFleche] = useState(180)
    const [Texte, setTexte] = useState('none')

    const DisplayTexte = () => {
        if (Texte === 'block') {
            setFleche(Fleche + 180)
            console.log(Texte)
            setTexte('none')
        }
        else {
            setTexte('block')
            setFleche(Fleche - 180)
        }
    }
    return (
        <div>
            <div onClick={() => DisplayTexte()} className='corps__titre--apropos'>
                <p>{props.titre}</p>
                <img style={{ rotate: Fleche + 'deg' }} src={fleche} alt='fleche en svg' />
            </div>
            <div style={{ display: Texte }}>
                <div className='corps__texte--apropos'>
                    {props.texte.map((element) => <p>{element}</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Balise