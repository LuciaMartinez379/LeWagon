const form = document.querySelector('#info')
const nombre = document.querySelector('#nombre')
const nombreHelp = document.querySelector('#nombreHelp')
const numero = document.querySelector('#numero')
const numeroHelp = document.querySelector('#numeroHelp')
const email = document.querySelector('#email')
const emailHelp = document.querySelector('#emailHelp')
const mensaje = document.querySelector('#mensaje')
const mensajeHelp = document.querySelector('#mensajeHelp')

form.addEventListener('submit', (event) => {
     event.preventDefault()
     if (nombre.value === '' || numero.value === '' || email.value === '' || mensaje.value === '') {
          if(nombre.value === '') {
               nombreHelp.innerText = 'Por favor, ingrese su nombre.'
          }
          if(numero.value === '') {
               numeroHelp.innerText = 'Por favor, ingrese su número.'
          }
          if(email.value === '') {
               emailHelp.innerText = 'Por favor, ingrese su dirección de Email.'
          }
          if(mensaje.value === '') {
               mensajeHelp.innerText = 'Por favor, ingrese su mensaje.'
          }
     } else {
          form.submit();
          alert('Mensaje enviado con éxito.')
     }
});