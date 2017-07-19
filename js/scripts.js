// For multiple pizza orders, didn't have time to implement
function Order(pizza) {

}

// Pizza object constructor
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.basePrice = 0;
  this.toppingPrice = 0;
}

// Sets fields for the pizza for pricing
Pizza.prototype.setCosts = function() {
  if (this.size === "Small") {
    this.basePrice = 9.99;
    this.toppingPrice = 0.50;
  } else if (this.size === "Medium") {
    this.basePrice = 10.99;
    this.toppingPrice = 0.75;
  } else {
    this.basePrice = 12.99;
    this.toppingPrice = 1.00;
  }
}

// Returns the subtotal of the pizza
Pizza.prototype.getSubtotal = function() {
  return this.basePrice + this.toppingPrice * this.toppings.length;
};

$(document).ready(function() {

  $("#clear").click(function() {
    location.reload();
  });

  $("form#pizza-order").submit(function(event) {
    event.preventDefault();

    // Finds the size of the pizza by user input from radio buttons
    var pizzaSize = $("input:radio[name=pizza-size]:checked").val();
    var pizzaToppings = [];
    // Creates an array with each topping from checkboxes
    $("input:checkbox[name=toppings]:checked").each(function() {
      pizzaToppings.push($(this).val());
    });

    // Ensures a pizza size is selected
    if (pizzaSize !== undefined) {
      // Creates the new pizza
      var order = new Pizza(pizzaSize, pizzaToppings);
      // Setting up the costs based on size
      order.setCosts();

      // DOM manipulation - inserting pricing into HTML
      $(".count-display").append("1");
      $(".order-display").append("<strong>" + order.size + " pizza</strong>");
      $(".price-display").append(order.basePrice);

      // Loops through the toppings in the array and lists them
      order.toppings.forEach(function(topping) {
        $(".count-display").append("<br>");
        $("#toppingsList").append("<li>" + topping + "</li>");
        $("#toppingsPrice").append(parseFloat(order.toppingPrice).toFixed(2) + "<br>");
      });

      // Settings up a subtotal area
      $("#toppingsPrice").append("=========<br>");
      $("#toppingsPrice").append(parseFloat(order.getSubtotal().toFixed(2)));

      // In case a pizza size is not selected
    } else {
      alert("Please select a size for your pizza.");
    }
  });
});
