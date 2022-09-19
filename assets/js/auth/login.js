import { userServices } from "./users.js"
//DESPLEGAR MENU LOGIN
const spanLogin = () =>{
    const span = document.querySelector('[data-login]')
    span.addEventListener('click',(event) =>{
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
const verificarUsuario = async () =>{
    const inputEmail = document.querySelector('.login_verific_email').value
    const inputPassword = document.querySelector('.login_verific_password').value
    
    let valido = false
    const usuarios =await userServices.findUser()
    usuarios.forEach(usuario => {
        if (usuario.email == inputEmail){
            if (usuario.password ==inputPassword){
                const loginSpan = document.querySelector('[data-login]')
                loginSpan.textContent = inputEmail
                valido = true
                if (usuario.id == 'root'){
                    loginSpan.textContent = 'root'
                }
            } 
            else {
                alert('La contraseña o el usuario son invalidos')
            }
        }else {
            alert('La contraseña o el usuario son invalidos')
        }
    });  
    return valido
}

const loginBtn = document.querySelector('.login_verific_btn')
loginBtn.addEventListener('click',async()=>{
    const verificar =await verificarUsuario()
    console.log(verificar)
    if (verificar){
        const loginSpan = document.querySelector('[data-login-container]')
        loginSpan.classList.toggle('none')
        const span = document.querySelector('[data-login]')
        span.classList.add('login--succes')
    }
    })

