const startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
const startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];
const xForY = document.getElementById(`xForY`)
const favoriteStartup = []
//console.log('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);


//Code that I added


document.getElementById(`create`).onclick = function() {
    let random1 = Math.floor((Math.random() * startupX.length));
    let random2 = Math.floor((Math.random() * startupY.length));
    let madlib = 'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2];
    xForY.innerText = madlib;
}

document.getElementById(`save`).onclick = function() {
    favoriteStartup.push(xForY.innerText);
}

document.getElementById(`print`).onclick = function() {
    for (let i = 0; i < favoriteStartup.length; i++) {
        const element = favoriteStartup[i];
        const paragraph = document.createElement(`p`)
        paragraph.innerText = element
        document.querySelector(`body`).append(paragraph)
    }
}
