// import the burger.js file
// create router for this file and then export it at the end
let express = require("express");

let router = express.Router();

// import model to use the database info.
let burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.all(function(data) {
        let hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.create([
        "name"
    ], [
        req.body.name
    ], function(result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function(req, res) {
    let condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({
        devoured: req.body.devoured
    }, condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/burgers/:id", function(req, res) {
    let condition = "id = " + req.params.id;

    burger.delete(condition, function(result) {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;