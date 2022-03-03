const startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
const startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

const createButton = document.getElementById('create');
const displayText = document.getElementById('xForY');

const createPhrase = () => {
    let random1 = Math.floor((Math.random() * startupX.length));
    let random2 = Math.floor((Math.random() * startupY.length));
    displayText.innerHTML = `A startup that is like ${startupX[random1]}, but for ${startupY[random2]}`;
};

createButton.onclick = () => {
    createPhrase();
    return;
}

