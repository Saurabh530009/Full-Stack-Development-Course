const express = require("express");
const https = require("https"); // native module and it is alresy installed in node
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
//   console.log(req.body.cityName);
  // console.log("Post Received");

  const query = req.body.cityName;
  const apiKey = "cc22ecd5ef8278bf64b94df5af6362fd";
  const unit = "metric";
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    query +
    "&appid=" +
    apiKey +
    "&units=" +
    unit;
  https.get(url, function (response) {
    console.log(response.statusCode);

    response.on("data", function (data) {
      // console.log(data);
      const weatherData = JSON.parse(data); // Convert string into javascript object
      // console.log(weatherData);
      /*
            const object = {
              name: "Saurabh",
              favouriteFood: "Samosa",
            };
            console.log(JSON.stringify(object));
            // Convert javascript object into string
            */
      //  console.log(weatherData.main.temp);
      //  console.log(weatherData.weather[0].description);

      var temp = weatherData.main.temp;
      var weatherDescription = weatherData.weather[0].description;
      var icon = weatherData.weather[0].icon;
      var iconURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
      res.write("<p>The weather is currently " + weatherDescription + ".</p>");
      res.write(
        "<h1>The temperature in "+ query+" is " + temp + " degree Celcius.</h1>"
      );

      res.write("<img src=" + iconURL + ">");
      res.send();
    });
  });

//   res.send("Server is up and running");
  // at a time only one res.send() can be called.
});
app.listen(3000, function () {
  console.log("Server is running on port 3000.");
});
