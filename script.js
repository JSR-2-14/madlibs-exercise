const startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
const startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

let random1 = Math.floor((Math.random() * startupX.length));
let random2 = Math.floor((Math.random() * startupY.length));

//console.log('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);


function create() {
    console.log('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);
    return
}

const createBtn = document.getElementById("create");
//const createBtn = document.querySelector("create");
//const display = document.getElementById("xForY");

createBtn.addEventListener("click", function () {
    document.getElementById('xForY')
    .innerHTML='A startup that is ' + startupX[random1] + ', but for ' + startupY[random2];
})



//const favorites = new Array();









