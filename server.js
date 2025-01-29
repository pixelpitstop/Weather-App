const express = require("express");
const axios = require("axios");
const app = express();

// view engine= EJS
app.set("view engine", "ejs");

// public folder=static files
app.use(express.static("public"));


app.get("/", (req, res) => {
  res.render("index", { weather: null, error: null });
});

// /weather route
app.get("/weather", async (req, res) => {
  //city value getting 
  const city = req.query.city;
  const apiKey = "";

//This is the API and it's manipulative function, but API was expensive so couldn't get the key :(
  const APIUrl = '';
  let weather;
  let error = null;
  try {
    const response = await axios.get(APIUrl);
    weather = response.data;
  } catch (error) {
    weather = null;
    error = "Error, Please try again";
  }
  
  res.render("index", { weather, error });
});

// Start the server and listen on port 3000 
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
