import logements from './logements.json'
import Erreur from './pages/Erreur'

export const getAllLogement = async () => {
    return logements
}

export const getOneLogement = async (id) => {
    let logementData = logements.find((l)=>l.id === id)
    if(logementData){
        return logementData
    }else{
        return <Erreur/>
    }
}