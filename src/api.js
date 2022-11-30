import logements from './logements.json'

export const getAllLogement = async () => {
    return logements
}

export const getOneLogement = async (id) => {
    return logements.find((l)=>l.id === id)
}