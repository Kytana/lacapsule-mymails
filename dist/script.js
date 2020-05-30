//Mettre à jour le compteur de mail
var mailBox = document.getElementsByClassName('mail-box');  
var mailCount = 0;
for(var i = 0; i < mailBox.length; i++) {
    mailCount++;
}
document.getElementById('counter').textContent = mailCount;


//Supprimer un message
var deleteButton = document.getElementsByClassName('btn-delete');
for(var i=0; i < deleteButton.length; i++) {
        deleteButton[i].addEventListener('click', function() {
            this.parentNode.remove();
        }



        
    );
}


//Supprimer un message

var newMail = {
    avatar: "img/avatar-2.jpg",
    name: "Tahina Aid",
}

var inputValue = document.getElementById("mail-input").value;

var addMail = document.getElementById('add');
addMail.addEventListener('click', function() {

    // Créer une div "mail-box"
        var newMailBox = document.createElement("div");  
        newMailBox.setAttribute("class", "mail-box");  
    
    // Créer une div "mail-image"
        var newImage = document.createElement("div");  
        newImage.setAttribute("class", "mail-image");  
        newMailBox.appendChild(newImage); 

    //Créer l'avatar
        var newAvatar = document.createElement("img");  
        newAvatar.innerHTML = '<img src="'+ newMail.avatar + '">';
        newImage.appendChild(newAvatar); 

    //Créer une div "mail-content"
        var newContent = document.createElement("div");  
        newContent.setAttribute("class", "mail-content");  
        newMailBox.appendChild(newContent); 

    //Créer le nom
        var newTitle = document.createElement("h6");
        var authorName = document.createTextNode(newMail.name);  
        newTitle.appendChild(authorName); 
        newContent.appendChild(newTitle); 
    
    //Créer le message
        var newMessage = document.createElement("p");
        var authorMessage = document.createTextNode(inputValue);  
        newMessage.appendChild(authorMessage); 
        newContent.appendChild(newMessage); 

    //Créer le bouton de suppression
        var deleteBtn = document.createElement("a");
        deleteBtn.setAttribute("href", "#");  
        deleteBtn.setAttribute("class", "btn btn-delete");  
        deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
        newMailBox.appendChild(deleteBtn); 

    //Placer le mail en première position
        var mailList = document.getElementById('mail-list');    // Get the <ul> element to insert a new node
        mailList.insertBefore(newMailBox, mailList.childNodes[0]);         
    }
);