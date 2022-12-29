import logements from './logements.json'

export const getAllLogement = async () => {
    return logements
}

export const getOneLogement = async (id) => {
    let logementData = logements.find((l)=>l.id === id)
    if(logementData){
        return logementData
    }else{
        throw new Error("logement introuvable")
    }
}