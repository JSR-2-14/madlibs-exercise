const startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
const startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

let random1 = Math.floor((Math.random() * startupX.length));
let random2 = Math.floor((Math.random() * startupY.length));

const startup = 'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]




const create = function(){
    document.getElementById("xForY").innerHTML = startup

}

