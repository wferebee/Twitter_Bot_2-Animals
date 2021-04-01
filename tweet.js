const Twitter = require("twitter")
const dotenv = require("dotenv")
const fs = require("fs")

dotenv.config()

const client = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
})


const myArray = []

const catPicFunction = () => {


const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://mlemapi.p.rapidapi.com/randommlem?orientation=landscape",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": process.env.X_Key,
		"x-rapidapi-host": process.env.X_Host
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
})


        // After the data from the AJAX request comes back
        .then(function(response) {
          

   
          if(myArray.includes(response.id)){
            catPicFunction();
          } else {
            myArray.push(response.id);
          
          // Saving the image_original_url property
          var imageUrl = response.url;

          // Creating and storing an image tag
          var catImage = $("<img>");

          // Setting the catImage src attribute to imageUrl
          catImage.attr("src", imageUrl);
          catImage.attr("alt", "cat image");
          catImage.attr("height", "335");
          catImage.attr("width", "600");
          // Prepending the catImage to the images div
          $("#images").prepend(catImage);
          }
        });
      
    };


    $("#cat-button").on("click", catPicFunction);





const imageData = fs.readFileSync("./media/george.jpg") //replace with the path to your image

client.post("media/upload", {media: imageData}, function(error, media, response) {
  if (error) {
    console.log(error)
  } else {
    const status = {
      status: "I tweeted from Node.js!",
      media_ids: media.media_id_string
    }

    client.post("statuses/update", status, function(error, tweet, response) {
      if (error) {
        console.log(error)
      } else {
        console.log("Successfully tweeted an image!")
      }
    })
  }
})