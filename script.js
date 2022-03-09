const startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
const startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];
let favoritesList = [];
let newFave = '';

function createStartUp(){

    let random1 = Math.floor((Math.random() * startupX.length));
    let random2 = Math.floor((Math.random() * startupY.length));

    let newStartUpSentence = `A start up for ${startupX[random1]} , but for ${startupY[random2]}`;
    
    document.getElementById('xForY').innerHTML=newStartUpSentence;
        newFave= newStartUpSentence;
        return newFave;
}


function createFavorites(){

    favoritesList.push(newFave);
    console.log(`The favorite madLibs are: ${newFave}`);

}

function printMadLib(){

    let details = "";
    
    for(let i=0; i<favoritesList.length;i++){
        
       details += "The index is ("+ i + "):"+ favoritesList[i] + '<br />';
    }
    document.getElementById('favorites').innerHTML=details;
  

}