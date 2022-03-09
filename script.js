const startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
const startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];
const xForY = document.querySelector('#xForY');
const favoriteList = document.querySelector('#favoriteList');
const madLib = [];


// console.log('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);

document.querySelector('#create').addEventListener('click', function(){
    let random1 = Math.floor((Math.random() * startupX.length));
    let random2 = Math.floor((Math.random() * startupY.length));
    xForY.innerText = 'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]
})

document.querySelector('#save').addEventListener('click', function saveMadLib(){
madLib.push(xForY.innerText)
console.log(madLib)
})

document.querySelector('#print').addEventListener('click', function saveMadLib(){
    for (let i = 0; i < madLib.length; i++) {
    const li = document.createElement('li');
    li.innerText = madLib[i];
    favoriteList.appendChild(li);
    console.log(madLib[i])
    }
})
