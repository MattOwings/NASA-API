
// NASA API Fetch

sendApiRequest(); 
// Sends an API Fetch Request to the NASA API to retrieve the JSON information


// Async
async function sendApiRequest() {
    // The API Key to connect to the NASA API
    let API_KEY = 'Nh481hIFPZt4al6vH1LjNLAvURCKdeOJxMFnapJE';

    let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`); // &date=YYYY-MM-DD for specific, default is 'today' though
    
    //console.log(response) // Should give a 200 OK

    let data = await response.json(); // Waits for the API to send JSON Data to display

    // console.log(data); // The JSON Data

    useApiData(data); // Sends the data into a function to be displayed
}

// Uses the JSON Data and pushes it into the HTML to be displayed
const useApiData = (data) => {

    // Title of the Picture of the Day Fetched from the API
    document.querySelector("#nasa-title").innerHTML = data.title;

    // Text Explaination Fetched from the API
    document.querySelector("#explaination").innerHTML = data.explanation;
    
    // The Image Fetched from the API
    document.querySelector("#url").innerHTML = `<img src=${data.hdurl} alt="NASA Astronomy Picture of the Day"></img>`

    // The Date Fetched from the API
    document.querySelector("#date").innerHTML = data.date;
}
