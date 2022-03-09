const startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
const startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

// the elements I will need to deal with
const createButton = document.getElementById('create');
const saveButton = document.getElementById('save');
const printButton = document.getElementById('print');
const displayText = document.getElementById('xForY');
const favoritesArray = [];
const displayFavorites = document.getElementById('favorites');

// the three functions - create the phrase, save a favorite, and print the favorites
const createPhrase = () => {
    let random1 = Math.floor((Math.random() * startupX.length));
    let random2 = Math.floor((Math.random() * startupY.length));
    displayText.innerHTML = `A startup that is like ${startupX[random1]}, but for ${startupY[random2]}`;
};

const saveFavorite = () => {
    favoritesArray.push(displayText.innerText);
    
    console.log(favoritesArray); 
}

const printFavorites = () => {
    displayFavorites.append(favoritesArray);
}

// when to call those functions
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

