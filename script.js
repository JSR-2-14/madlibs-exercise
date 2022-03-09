const startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter', 'Reddit', 'Goofy', 'AshleyMadison.com'];
const startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest', 'Bananas', 'Cheerios', 'Goobers', 'Hyenas'];

let random1 = Math.floor((Math.random() * startupX.length));
let random2 = Math.floor((Math.random() * startupY.length));

console.log('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);

const insertMadLib = function(){
    document.getElementById("xForY").innerHTML = 'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]
}