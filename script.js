const startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
const startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];
const favoriteLibs = [];
const xForY = document.getElementById("xForY")

document.getElementById("create").onclick = () => {createNew()
   }
function createNew() {
  let random1 = Math.floor((Math.random() * startupX.length));
  let random2 = Math.floor((Math.random() * startupY.length));
  const newStartup = 'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]; 
  xForY.innerHTML = newStartup
  }

document.getElementById("save").onclick = () => { saveLib()
  }

function saveLib() {
  favoriteLibs.push(xForY.innerText)
  }

document.getElementById("print").onclick = () => { printLib()
 }

function printLib() {
   for (let i = 0; i < favoriteLibs.length; i++){
     const paragraph = document.createElement('p') 
     paragraph.innerText = favoriteLibs[i]
     document.querySelector('body').append(paragraph)
   }
}

