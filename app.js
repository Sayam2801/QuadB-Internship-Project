//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');
const ejs = require('ejs');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine','ejs');

app.get("/", function(req,res) {
  const url = "https://api.wazirx.com/api/v2/tickers/btcinr";
  if(response.statusCode === "200")
  {
    https.request(url, function(response) {
      response.on("data", function(data) {
        const apiData = JSON.parse(data);
        res.render("list", {
          name1: "BTC/INR",
          last2: apiData.last,
          buy1: apiData.buy,
          buy2: apiData.sell,
          volume: apiData.vol,
          base_unit: "btc"
        });
      });
    });
  }
});


app.listen(3000, function() {
  console.log("Server is running on port 3000.");
});
