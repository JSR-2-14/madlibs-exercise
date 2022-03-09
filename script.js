const startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
const startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

const random1 = function() {
    return Math.floor((Math.random() * startupX.length));
};

const random2 = function() {
     return Math.floor((Math.random() * startupY.length));
};

const nodeXForY = document.getElementById("xForY");
const nodeFavourites = document.getElementById("favorites");
const bttnCreateFav = document.getElementById("create");
const bttnSaveFav = document.getElementById("save");
const bttnPrintFavs = document.getElementById("print");

let currentPhrase;
const favourites = [];

const randomPhrase = function () {
    let phrase = 'A startup that is ' + startupX[random1()] + ', but for ' + startupY[random2()];
    return phrase;
};

bttnCreateFav.addEventListener("click", function() {
    currentPhrase = randomPhrase();
    nodeXForY.innerText = currentPhrase;
});

bttnSaveFav.addEventListener("click", function() {
    if (currentPhrase) {
        if (favourites.indexOf(currentPhrase) === -1) {
            favourites.push(currentPhrase);
            console.log("Phrase saved. Total saved phrases: " + favourites.length);
        } 
        else {
            console.log("Phrase already saved");
        }
    } 
    else {
        console.log("Save Favourite clicked without a phrase being present")
    }
});

bttnPrintFavs.addEventListener("click", function() {
     nodeFavourites.innerHTML = null;
     favourites.forEach(fav => {
         let paragraphNode = document.createElement("p");
         paragraphNode.innerText = fav;
         nodeFavourites.appendChild(paragraphNode);
     });
});