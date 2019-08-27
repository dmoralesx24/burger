const express = require("express");
const routes = require("./controllers/burgersController.js");
const exphbs = require("express-handlebars");

const app = express();

let PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + "/public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.use(routes);

app.listen(PORT, function() {
    console.log("listening on port ", PORT);
});