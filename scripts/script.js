const newUser = document.querySelector('#newUser')
const userName = document.getElementById('userName')
const userEmail = document.getElementById('userEmail')
const userPass = document.getElementById('userPassword')
const userPassRep = document.getElementById('userPasswordRep')

// Botón:
const submitBtn = document.getElementById('submitBtn')
submitBtn.addEventListener('click', saveDataStorage)

// Seccion de alertas:
const validationAlerts = document.getElementById('alerts')

// Expresión regular para email:
const validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

// Expresión regular para contraseña de Mínimo 8 caracteres, al menos una letra y un número:
const validPassword = /^(?=.*[a-z])(?=.*\d)[a-z\d\w\W]{8,}$/;


// Guardar datos usuarios:

if(!localStorage.userList){
    localStorage.userList = JSON.stringify([])
}
    
function saveDataStorage(event){
    event.preventDefault()

    let guardarLista = JSON.parse((localStorage.userList) || [])    

    // Validaciones de datos:
    if (userName.value === '' || userEmail.value === '' || userPass.value === '' || userPassRep.value === '' ) {
      return alert("Rellena todos los campos", "danger");
      
     }	
 
   if( !validEmail.test(userEmail.value) ){
     return alert('El email introducido no es válido', "danger");
     } 
     
    if (!validPassword.test(userPass.value)) {
      return alert("La contraseña no cumple los requerimientos", "danger");
    }
  
    if (userPass.value !== userPassRep.value) {
      userPass.value = "";
      userPassRep.value = "";
      return alert("Las contraseñas no coinciden", "danger");
    }
    userValidation(guardarLista)
  } 
function userValidation(guardarLista) {
  guardarLista.push({
    userName: userName.value,
    userEmail: userEmail.value,
    userPass: userPass.value,
})
  localStorage.setItem(
    'userList', 
    JSON.stringify(guardarLista)
)
  alert("Usuario Creado correctamente", "success");
  setTimeout(() => {
    window.location = './pages/usuarios.html'
  }, 3000);
}
 function alert(alertMsg, type){
   let alerts = document.createElement("div");

   validationAlerts.innerHTML = [`<div class='alert alert-${type}' role='alert'>`,
   alertMsg,
   "</div>"].join("");
    
//El método Element.append() inserta un conjunto de objetos Node u objetos de tipo cadena después del último hijo de Element
validationAlerts.append(alerts);
 
   setTimeout(() => {
    validationAlerts.innerHTML = "";
   }, 3000);
 
}







   
   

