//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const ejs = require("ejs");
const app = express();
const axios = require("axios").default;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  axios
    .get("https://api.wazirx.com/api/v2/tickers")
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .then(({ btcinr, xrpinr }) => {
      res.render("index", {
        name1: "name1",
        last1: btcinr.last,
        buy1: btcinr.buy,
        sell1: btcinr.sell,
        volume1: btcinr.volume,
        base_unit1: "btc",
        name2: "name2",
        last2: xrpinr.last,
        buy2: xrpinr.buy,
        sell2: xrpinr.sell,
        volume2: xrpinr.volume,
        base_unit2: "xrp"
      });
    });
});

app.listen(3000, function () {
  console.log("Server is running on port 3000.");
});
