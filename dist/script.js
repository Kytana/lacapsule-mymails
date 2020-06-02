//****** Mettre à jour le compteur de mail
var mailBox = document.getElementsByClassName('mail-box');  
document.getElementById('counter').textContent = mailBox.length;


//********* Supprimer un message
for(var i=0; i < mailBox.length; i++) {
    document.getElementsByClassName('btn-delete')[i].addEventListener('click', function() {
            this.parentNode.remove();
            document.getElementById('counter').textContent = mailBox.length;
        }       
    );
}


//******** Base de donnée utilisateur
var newMail = {
    avatar: "img/tahina-aid.jpg",
    name: "Tahina Aid",
}




//******** Publier un nouveau message
document.getElementById('add').addEventListener('click', function() {

    // Créer une div "mail-box"
        var newMailBox = document.createElement("div");  
        newMailBox.setAttribute("class", "mail-box");  
    
    // Créer une div "mail-image"
        var newImage = document.createElement("div");  
        newImage.setAttribute("class", "mail-image");  
        newMailBox.appendChild(newImage); 

    //Créer l'avatar
        var newAvatar = document.createElement("img"); 
        newAvatar.setAttribute("src", newMail.avatar);  
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
        var inputValue = document.getElementById("mail-input").value;
        var authorMessage = document.createTextNode(inputValue);  
        newMessage.appendChild(authorMessage); 
        newContent.appendChild(newMessage); 

    //Créer le bouton de suppression
        var deleteBtn = document.createElement("a");
        deleteBtn.setAttribute("href", "#");  
        deleteBtn.setAttribute("class", "btn btn-delete");  
        deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
        newMailBox.appendChild(deleteBtn); 

        var mailList = document.getElementById('mail-list');    // Get the <ul> element to insert a new node
        mailList.insertBefore(newMailBox, mailList.childNodes[0]);  
    
    //Mise à jour compteur
        document.getElementById('counter').textContent = mailBox.length;

    //********* Supprimer un message
        for(var i=0; i < mailBox.length; i++) {
            document.getElementsByClassName('btn-delete')[i].addEventListener('click', function() {
                    this.parentNode.remove();
                    document.getElementById('counter').textContent = mailBox.length;
                }       
            );
        }
    }

    
);

