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

    //scorro l'array
    for (let index = 0; index < permissionList.length; index++) {

        //controllo che sia nella lista di chi può accedere
        if (emailInputElement.value == permissionList[index]) {
            message.innerHTML = "Puoi accedere";
            break;
        } else {
            message.innerHTML = "Non puoi accedere";
        }

    }

});

//al click cancello tutto
cancelButtonElement.addEventListener('click', function () {
    emailInputElement.value = '';

    message.innerHTML = '';

});


/* Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto */

//seleziono elementi dalla DOM
const playlButtonElement = document.getElementById('play');
const userNumberRandomElement = document.getElementById('user-number');
const pcNumberRandomElement = document.getElementById('pc-number');

playlButtonElement.addEventListener('click', function () {

    //genero numero random per pc e giocatore
    let pcNumber = Math.floor((Math.random() * 6) + 1);
    let userNumber = Math.floor((Math.random() * 6) + 1);

    //stampo in pagina i numeri generati
    document.getElementById('pc-number').innerHTML = pcNumber;
    document.getElementById('user-number').innerHTML = userNumber;

    let message;

    //confronto chi fa il punteggio più alto
    if (pcNumber > userNumber) {
        message = `Vince il computer!`;
    } else if (pcNumber < userNumber) {
        message = `Vince il giocatore!`;
    } else {
        message = `Pareggio`;
    }

    //stampo in pagina il vincitore
    document.getElementById('winner').innerHTML = message;
});