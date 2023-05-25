var quantities = document.getElementsByClassName("quantity");
var incrementButtons = document.getElementsByClassName("increment");
var decrementButtons = document.getElementsByClassName("decrement");
var deleteButtons = document.getElementsByClassName("delete");
var heartButtons = document.getElementsByClassName("heart");

var initialTotalPrice = 0;
for (var i = 0; i < quantities.length; i++) {
  var quantity = parseInt(quantities[i].textContent);
  var price = parseFloat(
    document.getElementsByClassName("price")[i].textContent.substring(1)
  );
  initialTotalPrice += quantity * price;
}
var totalPriceElement = document.getElementById("totalPrice");
totalPriceElement.textContent = "Total Price: $" + initialTotalPrice.toFixed(2);
for (var i = 0; i < incrementButtons.length; i++) {
  incrementButtons[i].addEventListener("click", incrementQuantity);
  decrementButtons[i].addEventListener("click", decrementQuantity);
  deleteButtons[i].addEventListener("click", deleteItem);
  heartButtons[i].addEventListener("click", toggleLike);
}
function incrementQuantity() {
  var quantityElement = this.parentNode.querySelector(".quantity");
  var quantity = parseInt(quantityElement.textContent);
  quantity++;
  quantityElement.textContent = quantity;
  updateTotalPrice();
}
function decrementQuantity() {
  var quantityElement = this.parentNode.querySelector(".quantity");
  var quantity = parseInt(quantityElement.textContent);
  if (quantity > 1) {
    quantity--;
    quantityElement.textContent = quantity;
    updateTotalPrice();
  }
}
function deleteItem() {
  var item = this.parentNode;
  item.parentNode.removeChild(item);
  updateTotalPrice();
}
function toggleLike() {
  this.classList.toggle("heart-liked");
}
var heart = document.querySelector(".heart");
function updateTotalPrice() {
  var quantities = document.getElementsByClassName("quantity");
  var prices = document.getElementsByClassName("price");
  var total = 0;
  for (var i = 0; i < quantities.length; i++) {
    var quantity = parseInt(quantities[i].textContent);
    var price = parseFloat(prices[i].textContent.substring(1));
    total += quantity * price;
  }
  var totalPriceElement = document.getElementById("totalPrice");
  totalPriceElement.textContent = "Total Price: $" + total.toFixed(2);
}