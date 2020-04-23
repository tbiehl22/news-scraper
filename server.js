var express = require('express');
var bodyParser = require('body-parser'); 
var exphbs = require('express-handlebars');
// let logger = require("morgan");
var db = require("./models"); 
// let cheerio = require('cheerio'; 
// let mongoose = require('mongoose';
// let db from "./models"; 

var PORT = process.env.PORT || 3000; 
var app = express(); 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./controllers/webScrapperController.js")(app);

app.listen(PORT, ()=>{
    console.log(`App listening on PORT ${PORT}`);
})