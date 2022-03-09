const startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
const startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

    let random1 = Math.floor((Math.random() * startupX.length));
    let random2 = Math.floor((Math.random() * startupY.length));


    console.log('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2])

    const insertMadLib = function(){

        document.getElementById("xForY").innerHTML = 'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]
    }



// const xForY = document.getElementById("xForY")

// const creatorButton = document.getElementById('create');

// creatorButton.addEventListener("click", function() {
// })

   /////////////////// 
    // document.getElementById("create").onclick = () => {createNew()
    // }

    // function addtext(what){
    //     if (document.createTextNode){
    //     var mytext=document.createTextNode(what)
    //     document.getElementById("mydiv").appendChild(mytext)
    //     }
        // }
