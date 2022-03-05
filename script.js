const startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
const startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];
const favStartUpX = [];
const favStartUpY = [];
let random1;
let random2;

function newRandomNum(length) {
return Math.floor((Math.random() * length));
}

function outputMadlib(random1,random2) {    
    document.getElementById('xForY').innerHTML = 'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2];
}

function createMadlib() {
    random1 = newRandomNum(startupX.length);
    random2 = newRandomNum(startupY.length);
    outputMadlib(random1, random2);
}

function favoriteStartup() {
    favStartUpX.push(startupX[random1]);
    favStartUpY.push(startupY[random2]);
}

function printFavs() {
    let printFavsResult = "";
    for (let i = 0; i < favStartUpX.length; i++) {
        printFavsResult += i +') A startup that is ' + favStartUpX[i] + ', but for ' + favStartUpY[i] + '<br/>';
    }
    document.getElementById('favorites').innerHTML = printFavsResult;
}
