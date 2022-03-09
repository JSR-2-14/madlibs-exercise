const startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
const startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];
let myText = "";
const saved = []

const startup = function(){
    let random1 = Math.floor((Math.random() * startupX.length));
    let random2 = Math.floor((Math.random() * startupY.length));
    myText = 'A startup that is ' + startupX[random1] + ' but for ' + startupY[random2]
    document.getElementById("xForY").innerHTML = myText
}

const favorite = function(startup){
    saved.push(startup)
    console.log(saved)
}

function printFavorites(favorite) {
    document.getElementById("favorites").innerHTML = saved
}
