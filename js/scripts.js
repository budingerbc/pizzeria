function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.basePrice = 0;
  this.toppingPrice = 0;
}

Pizza.prototype.setCosts() {
  if (size === "small") {
    this.basePrice = 9.99;
    this.toppingPrice = 0.5
  } else if (size === "medium") {
    this.basePrice = 10.99;
    this.toppingPrice = 0.75
  } else {
    this.basePrice = 12.99;
    this.basePrice = 1.00;
  }
}

$(document).ready(function() {
  $("form#pizza-order").submit(function(event) {
    event.preventDefault();

    alert("is this working");
    var order = new Pizza("medium");
    order.setCosts();
    alert(order.basePrice);
  });
});
