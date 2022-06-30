const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello");
})

app.use(bodyParser.urlencoded({extended: true})); //bodyParser setup

app.listen("3000", () => {
    console.log("Server live on port 3000");
})