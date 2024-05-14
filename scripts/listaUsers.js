const userCards = document.getElementById('userCards')

recuperarUsuarios();

function recuperarUsuarios(){
if (!localStorage.userList) {
    localStorage.setItem("userList", JSON.stringify([]));
  }
// El método forEach() ejecuta la función indicada una vez por cada elemento del array.
  let userList = JSON.parse(localStorage.userList);
  userList.forEach((user, index) => {
    console.log(index)
    index + 1;
    newCard(user.userName, user.userEmail, index);
  });
}
function newCard(name, email, index){
    let createCard = document.createElement("div");
    createCard.innerHTML = [
      `<class class="card" style="width: 18rem;">
            <div class="card-header">Usuario ${index}</div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${name}</li>
                <li class="list-group-item">${email}</li>
            </ul>
       </class>`
    ].join("");

//El método Element.append() inserta un conjunto de objetos Node u objetos de tipo cadena después del último hijo de Element
    userCards.append(createCard);
}




