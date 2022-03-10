// const startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
// const startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

// let random1 = Math.floor((Math.random() * startupX.length));
// let random2 = Math.floor((Math.random() * startupY.length));

// console.log('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);

/*our job is to add code to the JavaScript file that makes the "Create new startup" button work. Basically, when
the user clicks that buttons, your JavaScript should generate a new madlib saying, which should appear inside the XforY h1. */


// function createNewStartupBtn() {
//     let startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
//     let startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

//     let random1 = Math.floor((Math.random() * startupX.length));
//     let random2 = Math.floor((Math.random() * startupY.length));

//     document.getElementById('xForY').innerHTML = ('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);


//   }
//     document.getElementById('create').onclick = createNewStartupBtn;



function createStartupBtn() {
    let startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
    let startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];
    let savedFavArr = [];
    let random1 = Math.floor((Math.random() * startupX.length));
    let random2 = Math.floor((Math.random() * startupY.length));

    document.getElementById('xForY').innerHTML = ('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);


}
document.getElementById('create').onclick = createStartupBtn;


/*  Add functionality to make the "Favorite Startup" button work--when the "Favorite Startup" button is clicked,
it should save that madlib saying to an array.*/


/* Add functionality to make the "Print favorites" button work--when the "Print favorites" button is clicked, it should
display all of the favorited startups in the array underneath the h2 with an ID of favorites. */
