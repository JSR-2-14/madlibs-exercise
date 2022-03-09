const startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
const startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

const xForY = document.getElementById("xForY")

const createButton = document.getElementById("create");

createButton.addEventListener("click", function() {

  let random1 = Math.floor((Math.random() * startupX.length));
  let random2 = Math.floor((Math.random() * startupY.length));

  xForY.innerText = 'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2];

})

const favoritesArray = []

const saveButton = document.getElementById("save");

saveButton.addEventListener("click", function() {
    favoritesArray.push(xForY.innerText)
})

const favorites = document.getElementById("favorites")

const printButton = document.getElementById("print");

printButton.addEventListener("click", function() {
    for (let i = 0; i < favoritesArray.length; i++) {
        const paragraph = document.createElement('p')
        paragraph.innerText = favoritesArray[i]
        document.querySelector('body').append(paragraph)
    }
})