const inputName = document.getElementById('userName')
const inputMail = document.getElementById('userEmail')
const userPass = document.getElementById('userPassword')
const userPassRep = document.getElementById('userPasswordRep')
const userData = document.getElementById('content')
const submitBtn = document.getElementById('submitBtn')

if(!localStorage.userList){
    localStorage.userList = JSON.stringify([])
}


function onSubmit(event){
    event.preventDefault()
    if (userName.value === '' || userEmail.value === '' || userPassword.value === '' || userPasswordRep.value === '' ) {
        userData.innerText = 'Please fill all fields'
      } else {
        content.innerText = 'success'
      }
    saveDataStorage()
    const userDataStorage = JSON.parse(localStorage.getItem('userData'))
    console.log(userDataStorage)
}

function saveDataStorage(){
    let guardarLista = JSON.parse(localStorage.userList)
    guardarLista.push({
        userName: userName.value,
        userEmail: userEmail.value,
        userPass: userPass.value,
    })

    localStorage.setItem(
        'userList', 
        JSON.stringify(guardarLista)
    )
   }  

   submitBtn.addEventListener('click',onSubmit)
   

