var launchContainer = document.getElementById("shuttle-info");
var astContainer = document.getElementById("astronaut-info")
var btn = document.getElementById("btn");
var astbtn = document.getElementById("astronaut")

btn.addEventListener("click", function () {//when clicked request:
    var ourRequest = new XMLHttpRequest();// make variable for httpRequest
    ourRequest.open('GET', 'https://ll.thespacedevs.com/2.2.0/launch/?format=json', true);//use get to recieve info from the API l.ink I added. True means it is asynchronous so the page doesn't have to load again

    ourRequest.onload = function () {//when info from spacedevs is loaded then do this:
        if (ourRequest.status >= 200 && ourRequest.status < 400) {//if The information is there and is able to load page then:
            var ourData = JSON.parse(ourRequest.responseText);//parse request response text
            renderHTML(ourData);//call method to display the data
        } else {
            console.error('Failed to load data. Status: ' + ourRequest.status);//error handling
        }
    };
    ourRequest.send();//puts data in url to load page asynchronously
});

function renderHTML(data) {//data in parameter because I want something to be rerurned
    var htmlString = "";//this is going to be a <p> tag for the launch info to display and inside of a for loop to only add 3 results. 
    for (var i = 0; i < 3; i++) {
        htmlString += "<p>" + data.results[i].name + " is a " + data.results[i].status.name + " launch. It is " + data.results[i].mission.description + "</p>";//grabbing attributes from my object to display to the user
    }

    launchContainer.innerHTML = htmlString; // Use innerHTML to set the content
}

//astronaut
astbtn.addEventListener("click", function () {//when clicked request:
    var astRequest = new XMLHttpRequest();// make variable for httpRequest
    astRequest.open('GET', 'https://ll.thespacedevs.com/2.2.0/astronaut/?format=json', true);// Replace 'URL_FOR_ASTRONAUT_DATA' with the correct URL for astronaut data

    astRequest.onload = function () {//when info from spacedevs is loaded then do this:
        if (astRequest.status >= 200 && astRequest.status < 400) {//if The information is there and is able to load page then:
            var astData = JSON.parse(astRequest.responseText);//parse request response text
            renderAstHTML(astData);//call method to display the data
        } else {
            console.error('Failed to load astronaut data. Status: ' + astRequest.status);//error handling
        }
    };
    astRequest.send();//puts data in URL to load page asynchronously
});

function renderAstHTML(data) {
    var htmlString = ""; // this is going to be a <p> tag for the astronaut info to display and inside of a for loop to only add 3 results.
    for (var i = 0; i < 3; i++) {
        htmlString += "<p>" + data.results[i].name + " is an astronaut " + "</p>";//the info i want to display, i found the attributes on thespacedevs.com json viewer page
    }

    astContainer.innerHTML = htmlString; // Use innerHTML to set the content
}