import fleche from '../../assets/fleche.svg'
import './Body.scss'
import React, {useState} from 'react'

function Balise(props) {

    const [Fleche, setFleche] = useState(180)
    const [Texte, setTexte] = useState('none')

    const DisplayTexte = () =>{
        if (Texte === 'block'){
            setFleche(Fleche + 180)
            console.log(Texte)
            setTexte('none')
        }
        else{
            setTexte('block')
            setFleche(Fleche - 180)
        }
    }

    return (
            <>
            <div onClick={() => DisplayTexte()} className='corps__titre--apropos'>
                <p>{props.titre}</p>
                <img style={{rotate:Fleche + 'deg'}} src={fleche} alt='fleche en svg'/>
            </div>
            <div style={{display:Texte}}>
                <p className='corps__texte--apropos'>{props.texte}</p>
            </div>
            </>
    )
}

export default Balise