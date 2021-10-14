/* Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, 
stampa un messaggio appropriato sull’esito del controllo. */

//seleziono elementi dalla DOM
const emailInputElement = document.getElementById('email');
const sendButtonElement = document.getElementById('send');
const cancelButtonElement = document.getElementById('cancel');
const message = document.getElementById('message');

//creo una lista di chi può accedere
const permissionList = ['chiara', 'email', 'myEmail'];

//al click controllo email
sendButtonElement.addEventListener('click', function () {

    const email = emailInputElement.value;

    //scorro l'array
    for (let index = 0; index < permissionList.length; index++) {

        //controllo che sia nella lista di chi può accedere
        if (email == permissionList[index]) {
            message.innerHTML = "Puoi accedere";
            return;
        } else {
            message.innerHTML = "Non puoi accedere";
            return;
        }

    }

});

//al click cancello tutto
cancelButtonElement.addEventListener('click', function () {
    emailInputElement.value = '';

    message.innerHTML = '';

});