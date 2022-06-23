const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const { stringify } = require("querystring");
const app = express();

app.use(bodyParser.urlencoded({extended: true})) //bodyParser setup

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.post("/", (req, res) => {
    const query = req.body.cityName;
    const apiKey = "d6630598383ba88c522f4d001bf75a51";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey;
    https.get(url, (apiResponse) => {
        apiResponse.on("data", (data) => {
            weatherData = JSON.parse(data); // turns hexadecimal stuff to json
            const temp = Math.round(Number(weatherData.main.temp) - 273.15);
            const city = weatherData.name;
            const iconCode = weatherData.weather[0].icon;
            const iconUrl = "http://openweathermap.org/img/wn/" + iconCode +"@2x.png";
            res.setHeader("Content-Type", "text/html");
            res.write("The temperature in " + city + " is " + temp);
            res.write("<img src=" + iconUrl + ">");
            res.send();
        })
    })
})

app.listen("3000", () => {
    console.log("server live on port 3000");
});
