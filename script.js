
// NASA API Fetch

sendApiRequest(); 
// Sends an API Fetch Request to the NASA API to retrieve the JSON information

// Async
async function sendApiRequest() {
    // The API Key to connect to the NASA API
    let API_KEY = 'Nh481hIFPZt4al6vH1LjNLAvURCKdeOJxMFnapJE';

    let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`); // &date=YYYY-MM-DD for specific, default is 'today' though
    
    //console.log(response) // Should give a 200 OK

    // Await request
    let data = await response.json(); // Waits for the API to send JSON Data to display

    console.log(data); // The JSON Data

    useApiData(data); // Sends the data into a function to be displayed
}

// Uses the JSON Data and pushes it into the HTML to be displayed
const useApiData = (data) => {

    // Title of the Picture of the Day Fetched from the API
    document.querySelector("#nasa-title").innerHTML = `Today's title: "${data.title}"`;

    // Text Explaination Fetched from the API
    document.querySelector("#explaination").innerHTML = data.explanation;
    
    // console.log(data.media_type) // file type

    // The Image Fetched from the API
    if (data.media_type != "video") {

        let remImg = document.getElementById("vid-url");
        remImg.remove(); // Removes the video div because the source is an image

        document.querySelector("#url").innerHTML = `<img src=${data.hdurl} alt="NASA Astronomy Picture of the Day"></img>`
    } else {

        let remImg = document.getElementById("url");
        remImg.remove(); // Removes the image div because the source is a video

        document.querySelector("#vid-url").innerHTML = `<iframe id="vid" src=${data.url} alt="NASA Video"></iframe>`
    }

    // Transfer the JSON data into numbered month
    let year = data.date.substring(0,4);
    let monthNumber = data.date.substring(5,7);
    let day = data.date.substring(8,10);

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    let num = Number(monthNumber); // Converts JSON string into a type int
    let month = months[num-1];

    // console.log(month)

    // The Date Fetched from the API
    document.querySelector("#date").innerHTML = `${month} ${day}, ${year}`;
}
