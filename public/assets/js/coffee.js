// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".change-drink").on("click", function (event) {
    var id = $(this).data("id");
    var newDrink = $(this).data("newdrink");

    var newDrinkState = {
      drink: newDrink
    };

    // Send the PUT request.
    $.ajax("/api/coffee/" + id, {
      type: "PUT",
      data: newDrinkState
    }).then(
      function () {
        console.log("changed sleep to", newDrink);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newCoffee = {
      name: $("#ca").val().trim(),
      drink: $("[name=drink]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/coffee", {
      type: "POST",
      data: newCoffee
    }).then(
      function () {
        console.log("created new order");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
