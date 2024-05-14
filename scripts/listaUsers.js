const userCards = document.getElementById('userCards')

if (!localStorage.usersList) {
    localStorage.setItem("userList", JSON.stringify([]));
  }
// El método forEach() ejecuta la función indicada una vez por cada elemento del array.
  let userList = JSON.parse(localStorage.userList);
  userList.forEach((user) => {
    newCard(user);
  });

function newCard(){
    let createCard = document.createElement("div");
    createCard.innerHTML = [
        '<class class="card" style="width: 18rem;">',
            `<div class="card-header">${"Usuario"}</div>`,
            `<ul class="list-group list-group-flush">`,
                `<li class="list-group-item">${userList.userName}</li>`,
                `<li class="list-group-item">${userList.userEmail}</li>`,
            '</ul>',
        '</class>',
    ].join("");
    
//El método Element.append() inserta un conjunto de objetos Node u objetos de tipo cadena después del último hijo de Element
    userCards.append(userCards);
}




