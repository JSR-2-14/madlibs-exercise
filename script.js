const startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter', "Meta"];
const startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];
const favorites = []
let madLib;
let madLibNode;

function clickCreate () {
    document.getElementById('xForY').innerText = ""
    let random1 = Math.floor((Math.random() * startupX.length));
    let random2 = Math.floor((Math.random() * startupY.length));
    madLib = 'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2];
    madLibNode = document.createTextNode(madLib);

    document.getElementById('xForY').appendChild(madLibNode)
}

function clickFav () {
    favorites.push(madLib)
}

function clickPrint () {
    document.getElementById('favorites').innerText = favorites.toString();
    favorites.forEach(fav => {
        let h2Node = document.getElementById("favorites")
        let textNode = document.createTextNode(fav) 
        h2Node.appendChild(textNode)
    })
   
}