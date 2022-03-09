    const startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter', 'Tumblr'];
    const startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest', 'Basecamp'];

    let random1 = Math.floor((Math.random() * startupX.length));
    let random2 = Math.floor((Math.random() * startupY.length));

    console.log('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);

const createStartup = function(){
    let startupText = ('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);
    document.getElementById('xForY').innerHTML = startupText;
}

function saveFavoriteStartup() {
    let favoriteStartup = document.getElementById('xForY').innerHTML;
    const startupArray = [];
    startupArray.push(favoriteStartup);

    console.log(favoriteStartup);
}
saveFavoriteStartup();
function printFavorites() {
    let favoritesSaved = startupArray;
    document.getElementById('favorites').innerHTML = favoritesSaved;
}
