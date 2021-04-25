//obtener inputs

const inputs = document.querySelectorAll("form .campo input")

//console.log(inputs)

//Listener a los inputs
inputs.forEach(input => {
    input.addEventListener("blur", validarInput);   
})

inputs.forEach(input => {
    input.addEventListener("input", validarInput)
})

function validarInput(e){
    console.log(e.target)
    const estado = ['valido', 'no-valido']
    let clase;
    if(e.target.value.length === 0){
        clase = estado[1];
    }else{
        clase= estado[0];
    }
    e.target.classList.remove(...estado)
    e.target.nextElementSibling.classList.remove(...estado)
    e.target.classList.add(clase)
    e.target.nextElementSibling.classList.add(clase)

    if(clase === 'no-valido'){
        if(e.target.parentElement.nextElementSibling.classList[0] !== 'alerta'){
            const errorDiv = document.createElement('div');
            errorDiv.appendChild(document.createTextNode('Este campo es obligatorio'))
            errorDiv.classList.add('alerta')
            //Insertar el error
            //console.log(e.target)
            e.target.parentElement.parentElement.insertBefore(errorDiv, e.target.parentElement.nextElementSibling)
        
        }
    }else{
        if(e.target.parentElement.nextElementSibling.classList[0] === 'alerta'){
            e.target.parentElement.nextElementSibling.remove()
        }
    }
    //console.log(clase)
}

//Mostrar y ocultar password
const mostrarPassword = document.querySelector('.campo p');
console.log(mostrarPassword)
mostrarPassword.addEventListener('click', e => {
    const passwordInput = document.querySelector('#password');

    //e.target.classList.add('mostrar')
    if(e.target.classList.contains('mostrar')){
        //mostrar Texto
        e.target.classList.remove('mostrar');
        e.target.textContent = 'Ocultar'

        //Cambiamos a password
        passwordInput.type = 'text'
    }else{
        //mostrar password
        e.target.classList.add('mostrar')
        //Cambiar el texto      
        e.target.textContent = 'Mostrar'

        //Cambiamos a password
        passwordInput.type = 'password'
    }
})

