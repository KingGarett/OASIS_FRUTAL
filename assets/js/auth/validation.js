const inputs = document.querySelectorAll('input')
inputs.forEach(input => {
    input.addEventListener('blur',(input)=>{
        valida(input.target)
    })
});

const valida = (input) =>{
    const tipoDeInput = input.dataset.tipo
    if (input.validity.valid){
        input.nextElementSibling.classList.remove('input-messaje-error--container')
        input.nextElementSibling.querySelector('.input-messaje-error').innerHTML = ''
        input.nextElementSibling.classList.add('hidden')
    } else{
        input.nextElementSibling.classList.add('input-messaje-error--container')
        input.nextElementSibling.classList.remove('hidden')
        input.nextElementSibling.querySelector('.input-messaje-error').innerHTML = mostrarMensajeError(tipoDeInput,input)
    }
}

const tipoDeError = [
    'valueMissing',
    'typeMismatch',
    'customError',
    'patternMismatch'
]

const mensajesDeError = {
    email: {
        valueMissing: 'Este campo no puede estar vacio',
        typeMismatch: 'Debe ser del tipo ejemplo@ejemplo.com', 
    },
    password: {
        valueMissing: 'Este campo no puede estar vacio',
        patternMismatch: 'Debe contener 1 mayuscula y entre 6-20 caracteres',
    },
    repeat_password: {
        valueMissing: 'Este campo no puede estar vacio',
        patternMismatch: 'Debe contener 1 mayuscula y entre 6-20 caracteres',
    }
}

const mostrarMensajeError = (tipoDeInput,input) =>{
    let mensaje = ''
    tipoDeError.forEach(error =>{
        if (input.validity[error]){
            console.log(error)
            console.log(input.validity[error])
            console.log(mensajesDeError[tipoDeInput][error])
            mensaje = mensajesDeError[tipoDeInput][error]
        }
    })
    return mensaje
}