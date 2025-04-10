//gombok kiválasztása
const prevBTN = document.querySelector('button.btn:nth-child(1)');
const numBTN = document.querySelector('button.btn:nth-child(2)');
const nextBTN = document.querySelector('button.btn:nth-child(3)');
//ez csak az első találatot adja vissza mindig.
//Alt+Shift+down= sorok másolása
let counter = 1;

prevBTN.classList.add('btn-info');

//Több elem lekérése egyszerre

const buttons = document.querySelectorAll('.btn-group button.btn');
['btn-info','btn-primary','btn-info'].forEach((className, index) => {
    buttons[index].classList.add(className);
});

// Eseménykezelők beállítása a gombokra
//text.content nem írja át az egészet, csak a szöveget pl., ez is megoldás
buttons[0].addEventListener('click', (e) => {
    console.log(e);
    e.stopPropagation();
    if(counter < 2)
    {
        return;
    }
    
    counter--;
    buttons[1].innerHTML = counter;
});
buttons[2].addEventListener('click', (e) => {
    counter++;
    buttons[1].innerHTML = counter;
});