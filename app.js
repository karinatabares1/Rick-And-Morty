// import { animalsList } from "./List.js"; 
const url = 'https://rickandmortyapi.com/api/character';

function makeCharacter(card) {
    const container = document.createElement('div');
    container.id = 'container';
    container.classList.add('card');

    const imgCard = document.createElement('img');
    imgCard.src = card.image;
    imgCard.alt = card.name;

    const containerTitle = document.createElement('div');
    containerTitle.id = 'container-titles';

    const nameCard = document.createElement('h2');
    nameCard.textContent = card.name;

    const statusCard = document.createElement('h3');
    statusCard.textContent = "Status: " + card.status;

    const specieCard = document.createElement('h4');
    specieCard.textContent = "Specie: " + card.species;

    container.appendChild(imgCard);
    container.appendChild(containerTitle);
    containerTitle.appendChild(nameCard);
    containerTitle.appendChild(statusCard);
    containerTitle.appendChild(specieCard);

    document.querySelector('main').appendChild(container);
}

async function getCharacter() {
    try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const data = await response.json();
        
        runsData(data); 

    } catch (error) {
        console.error('Error al obtener los personajes:', error);
    }
}
getCharacter();

function runsData(data) {
    data.results.forEach(character => {
        makeCharacter(character);
    });
}

function searchCharacters() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        const name = card.querySelector('h2').textContent.toLowerCase();
        card.style.display = name.includes(searchTerm) ? '' : 'none';
    });
}

document.getElementById('search').addEventListener('input', searchCharacters);



