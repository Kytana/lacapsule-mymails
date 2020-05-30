//Mettre à jour le compteur de mail
var mailBox = document.getElementsByClassName('mail-box');  
var mailCount = 0;
for(var i = 0; i < mailBox.length; i++) {
    mailCount++;
}
document.getElementById('counter').textContent = mailCount;
