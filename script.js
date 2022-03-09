const startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
const startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

// let random1 = Math.floor((Math.random() * startupX.length));
// let random2 = Math.floor((Math.random() * startupY.length));
//console.log('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);

let createButton = document.getElementById('create');
let header = document.getElementById('xForY');

createButton.addEventListener('click', () => {
        let random1 = Math.floor((Math.random() * startupX.length));
        let random2 = Math.floor((Math.random() * startupY.length));
        //console.log('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);
        header.innerHTML = `A startup that is ${startupX[random1]}, but for ${startupY[random2]}`;
    }
)