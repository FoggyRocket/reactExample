import { _axios } from "./api";

export const searchCharacter = data =>{
                // search/name
    console.log('la data que envio ',data)
    return _axios.get(`/${data.search}`)
            .then(response=>response.data)
            .catch(err=>{
                throw err
            })
}