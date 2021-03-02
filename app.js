//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');
const ejs = require('ejs');
const app = express();
const axios = require('axios').default;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine','ejs');

app.get("/", function(req,res) {
  const url1 = "https://api.wazirx.com/api/v2/tickers/btcinr";
  if(response.statusCode === "200")
  {
    https.request(url, function(response) {
      response.on("data", function(data) {
        const apiData = JSON.parse(data);
        res.render("list", {
          name1: "BTC/INR",
          last1: apiData.last,
          buy1: apiData.buy,
          sell1: apiData.sell,
          volume1: apiData.vol,
          base_unit1: "btc"
        });
      });
    });
  }
  const url2 = "https://api.wazirx.com/api/v2/tickers/xrpinr";
  if(response.statusCode === "200")
  {
    https.request(url, function(response) {
      response.on("data", function(data) {
        const apiData = JSON.parse(data);
        res.render("list", {
          name2: "BTC/INR",
          last2: apiData.last,
          buy2: apiData.buy,
          sell2: apiData.sell,
          volume2: apiData.vol,
          base_unit2: "btc"
        });
      });
    });
  }
});
app.listen(3000, function() {
  console.log("Server is running on port 3000.");
});
