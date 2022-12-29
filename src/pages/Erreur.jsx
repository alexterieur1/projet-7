import React from 'react'
import { useRouteError } from 'react-router-dom'
import BodyErreur from '../components/Erreur'


function Erreur() {
    const error = useRouteError()
    console.log(error)
    return (
        <React.Fragment>
            <BodyErreur />
        </React.Fragment>
    )
}

export default Erreur