/*Un alert() espone 5 numeri generati casualmente.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.*/

//Creo una funzione che mi crea 5 numeri random 

const arrayNumber = randomNumber();

function randomNumber() {
    const numberGenerate = [];

    for (let i = 0; i < 5; i++) {
        const num = Math.floor(Math.random() * 50 + 1);
        numberGenerate.push(num);
    }

    return numberGenerate;

}

//Mostro i numeri all'utente

alert(arrayNumber);

//