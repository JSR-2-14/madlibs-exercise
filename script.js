const startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
const startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

let random1 = () => Math.floor((Math.random() * startupX.length));
let random2 = () => Math.floor((Math.random() * startupY.length));

console.log('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);

const createStartup = () => `A startup that is ${startupX[random1()]} but for ${startupY[random2()]}`
let startUp = ''
const favorites = []

const createButton = document.getElementById('create')
const favoriteButton = document.getElementById('save')
const printButton = document.getElementById('print')

createButton.addEventListener('click', () => {
  startUp = createStartup()
  document.getElementById('xForY').innerText = startUp
  favoriteButton.removeAttribute('disabled')
  favoriteButton.innerText = 'Favorite Startup'
})

favoriteButton.addEventListener('click', () => {
  favorites.push(startUp)
  favoriteButton.setAttribute('disabled', true)
  favoriteButton.innerText = 'Favorited'
})

printButton.addEventListener('click', () => {
  let result = ''
  favorites.forEach(favorite => result+=`${favorite}\n`)
  document.getElementById('favorites').innerText = result
})

favoriteButton.setAttribute('disabled', true)
