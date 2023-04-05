const userName = prompt('Inserisci il tuo nome');
const userLastName = prompt('Inserisci il tuo cognome');
const userColor = prompt('Inserisci il tuo colore preferito');

const password = userName + userLastName + userColor + '23';

document.getElementById('password').innerHTML = password;