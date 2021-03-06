/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

# MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.

# MILESTONE 1:
Stampare su console le informazioni di nome, ruolo e la stringa della foto

# MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe

# BONUS 1:
Trasformare la stringa foto in una immagine effettiva (le trovate in allegato)

# BONUS 2:
Organizzare i singoli membri in card/schede e ispirarci alle grafiche in allegato

Consigli del giorno:
Ragioniamo come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico!
Buon lavoro! 
*/
// # DATI
//Wayne Barnett |	Founder & CEO        |	wayne-barnett-founder-ceo.jpg
//Angela Caroll |	Chief Editor         |	angela-caroll-chief-editor.jpg
//Walter Gordon |	Office Manager       |	walter-gordon-office-manager.jpg
//Angela Lopez  |	Social Media Manager |	angela-lopez-social-media-manager.jpg
//Scott Estrada |	Developer            |	scott-estrada-developer.jpg
//Barbara Ramos |	Graphic Designer     |	barbara-ramos-graphic-designer.jpg 


// Creo l'array
const team = [
    {
        name: 'Wayne Barnett',
        job: 'Founder & CEO',
        pic: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        job: 'Chief Editor',
        pic: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        job: 'Office Manager',
        pic: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        job: 'Social Media Manager',
        pic: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        job: 'Developer',
        pic: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        job: 'Graphic Designer',
        pic: 'barbara-ramos-graphic-designer.jpg'
    }
]

// Stampo le informazioni

const display = document.getElementById('result')
let listElement = '';
let listName = '';
let listJob = '';
let listPic = '';


for(let i = 0; i < team.length; i++){
    const employee = team[i];

    //creo la card
    let card = document.createElement('div')
    card.className = '_card';    

    //costruisco la mia lista
    listPic = `<ul><img src="./img/${employee['pic']}" alt="">`
    listName = `<li>name: ${employee['name']}</li>`
    listJob = `<li>job: ${employee['job']}</li></ul>`

    // Stampo in pagina
    listElement = listPic += listName += listJob
    card.innerHTML = listElement;
    display.append(card)
}

