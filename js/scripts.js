function Order(pizza) {

}

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.basePrice = 0;
  this.toppingPrice = 0;
}

Pizza.prototype.setCosts = function() {
  if (this.size === "small") {
    this.basePrice = 9.99;
    this.toppingPrice = 0.50;
  } else if (this.size === "medium") {
    this.basePrice = 10.99;
    this.toppingPrice = 0.75;
  } else {
    this.basePrice = 12.99;
    this.toppingPrice = 1.00;
  }
};

Pizza.prototype.getSubtotal = function() {
  return this.basePrice + this.toppingPrice * this.toppings.length;
};

$(document).ready(function() {
  $("form#pizza-order").submit(function(event) {
    event.preventDefault();

    var pizzaSize = $("input:radio[name=pizza-size]:checked").val();
    var pizzaToppings = [];
    $("input:checkbox[name=toppings]:checked").each(function() {
      pizzaToppings.push($(this).val());
    });

    if (pizzaSize !== undefined) {
      var order = new Pizza(pizzaSize, pizzaToppings);
      order.setCosts();
      alert(order.getSubtotal());

    } else {
      alert("Please select a size for your pizza.");
    }


  });
});
