const startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
const startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

const createButton = document.getElementById('create');
const saveButton = document.getElementById('save');
const printButton = document.getElementById('print');
const displayText = document.getElementById('xForY');
const favorites = [];
const displayFavorites = document.getElementById('favorites');

const createPhrase = () => {
    let random1 = Math.floor((Math.random() * startupX.length));
    let random2 = Math.floor((Math.random() * startupY.length));
    displayText.innerHTML = `A startup that is like ${startupX[random1]}, but for ${startupY[random2]}`;
};

const saveFavorite = () => {
    favorites.push(`${displayText.innerText}`);
    console.log(favorites); 
}

const printFavorites = () => {
    displayFavorites.append(favorites);
}

createButton.onclick = () => {
    createPhrase();
    return;
}

saveButton.onclick = () => {
    saveFavorite();
    return;
}

printButton.onclick = () => {
    printFavorites();
    return;
}

