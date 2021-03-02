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
    .then(({ btcinr, xrpinr, ethinr, trxinr, eosinr, zilinr, batinr, usdtinr, wrxinr, maticinr }) => {
      res.render("index", {
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
        base_unit2: "xrp",
        last3: ethinr.last,
        buy3: ethinr.buy,
        sell3: ethinr.sell,
        volume3: ethinr.volume,
        base_unit3: "eth",
        last4: trxinr.last,
        buy4: trxinr.buy,
        sell4: trxinr.sell,
        volume4: trxinr.volume,
        base_unit4: "trx",
        last5: eosinr.last,
        buy5: eosinr.buy,
        sell5: eosinr.sell,
        volume5: eosinr.volume,
        base_unit5: "eos",
        last6: zilinr.last,
        buy6: zilinr.buy,
        sell6: zilinr.sell,
        volume6: zilinr.volume,
        base_unit6: "zil",
        last7: batinr.last,
        buy7: batinr.buy,
        sell7: batinr.sell,
        volume7: batinr.volume,
        base_unit7: "bat",
        last8: usdtinr.last,
        buy8: usdtinr.buy,
        sell8: usdtinr.sell,
        volume8: usdtinr.volume,
        base_unit8: "usdt",
        last9: wrxinr.last,
        buy9: wrxinr.buy,
        sell9: wrxinr.sell,
        volume9: wrxinr.volume,
        base_unit9: "wrx",
        last10: maticinr.last,
        buy10: maticinr.buy,
        sell10: maticinr.sell,
        volume10: maticinr.volume,
        base_unit10: "matic"
      });
    });
});

app.listen(process.env.PORT || 3000, function () {
  console.log("Server is running on port 3000.");
});
