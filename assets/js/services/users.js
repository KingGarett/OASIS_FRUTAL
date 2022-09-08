const createUser = (email,password) =>{
    return fetch('http://localhost:3000/cuenta',{
        method: 'POST',
        headers:{
            'Content-type': 'application/json'
        },
        body: JSON.stringify({email,password,id: uuid.v4()})
    })
}

const findUser = () =>{
    return fetch(`http://localhost:3000/cuenta/`).then(respuesta => {return respuesta.json()})
}

export const userServices = {
    createUser,
    findUser
} 