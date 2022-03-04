const startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
const startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

let random1 = () => Math.floor((Math.random() * startupX.length));
let random2 = () => Math.floor((Math.random() * startupY.length));

console.log('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);

let startUp = ''
const favorites = []

const createButton = document.getElementById('create')
const favoriteButton = document.getElementById('save')
const printButton = document.getElementById('print')
const favoritesList = document.getElementById('favorites')

const updateFavorites = () => {
  let result = ''
  favorites.forEach(favorite => result+=`${favorite}\n`)
  favoritesList.innerText = result
}

createButton.addEventListener('click', () => {
  startUp = `A startup that is ${startupX[random1()]} but for ${startupY[random2()]}`
  document.getElementById('xForY').innerText = startUp
  favoriteButton.removeAttribute('disabled')
  favoriteButton.innerText = 'Favorite Startup'
})

favoriteButton.addEventListener('click', () => {
  favorites.push(startUp)
  favoriteButton.setAttribute('disabled', true)
  favoriteButton.innerText = 'Favorited'
  updateFavorites()
})

printButton.addEventListener('click', () => {
  if (favoritesList.style.display == 'none') {
    favoritesList.style.display = 'block'
    printButton.innerText = 'Hide Favorites'
  } else {
    favoritesList.style.display = 'none'
    printButton.innerText = 'Show Favorites'
  }
})

favoriteButton.setAttribute('disabled', true)
favoritesList.style.display = 'none'
