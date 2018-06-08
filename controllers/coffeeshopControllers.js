var express = require("express");

var router = express.Router();

// Import the model (coff.js) to use its database functions.
var coffees = require("../models/coffeeshop.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  coffees.all(function(data) {
    var hbsObject = {
      coffee_order: data
    };
    console.log(JSON.stringify(hbsObject));
    res.render("index", data);
  });
});

router.post("/api/coffee", function(req, res) {
  coffees.create(["name", "drink"], [req.body.name, req.body.drink], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/coffee/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  coffees.update(
    {
      drink: req.body.drink
    },
    condition,
    function(result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();

    }
  );
});

// Export routes for server.js to use.
module.exports = router;
