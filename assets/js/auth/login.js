import { userServices } from "../services/users.js"


//DESPLEGAR MENU LOGIN
const spanLogin = () =>{
    const login = document.querySelector('.login-btn')
    login.addEventListener('click',(event) =>{
        event.preventDefault()
        const loginSpan = document.querySelector('[data-login-container]')
        loginSpan.classList.toggle('none')
    })
}
spanLogin()


// CREAR CUENTA
const registro = document.querySelector('.cuenta_registro')
registro.addEventListener('click',() =>{
    window.location.href = './screens/create-account.html'
})

// INICIAR SESION
const obtenerUsuario = () =>{
    const inputEmail = document.querySelector('.login_verific_email').value
    const inputPassword = document.querySelector('.login_verific_password').value
    let persona = {}
    
    const select = userServices.findUser().then(users=>{
        users.forEach(user=>{
            if (user.email == inputEmail){
                console.log(user)
                return user
                
            }   
            })        
        })
        .then(userSelect => persona = userSelect)
    console.log(persona)
}

const check = document.querySelector('.login_verific_btn')
check.addEventListener('click',()=>{

    obtenerUsuario()    
    console.log(userServices.findUser())
    })

