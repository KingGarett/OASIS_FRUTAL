import { userServices } from "../services/users.js";

const btn = document.querySelector('[data-create-btn]')
btn.addEventListener('click',(event)=>{
    event.preventDefault()
    const email = document.querySelector('.email-create').value
    const pass = document.querySelector('.password-create').value
    const repeatPass = document.querySelector('.repeat-password-create').value
    
    if (checkPassword(pass,repeatPass) && email != '' && pass != '' && repeatPass != ''){
        userServices.createUser(email,pass).then(respuesta =>{
            window.location.href = './succes.html'
        }).catch(error =>alert(error))
    }

})

const checkPassword = (pass,repeatPass) =>{
    let check = false
    if (pass == repeatPass){
        check = true
    } else{
        alert('las contraseñas no coinciden')
    }
    return check
}