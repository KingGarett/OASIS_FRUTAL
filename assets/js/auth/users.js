const createUser = async (email,password) =>{
    return await fetch('http://localhost:3000/cuenta',{
        method: 'POST',
        headers:{
            'Content-type': 'application/json'
        },
        body: JSON.stringify({email,password,id: uuid.v4()})
    })
}

const findUser = async () =>{
    try{
        const respuesta = await fetch('./database/cuentas.json')
        const find = await respuesta.json()
        return find.cuenta
    }catch {error => console.log(error)}
}

export const userServices = {
    createUser,
    findUser
} 