
var cart = []; // this is an empty array

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}
    
function addToCart(item) {
  var itemName = item;
  //var itemPrice = Math.ceil(Math.random() * 100)
  var getCart = new Object(); // this is an object for each item
  getCart[itemName] = Math.ceil(Math.random() * 100); // itemName = key or property and itemPrice = value
  cart.push(getCart); // adding objects to array
  console.log(`${itemName} has been added to your cart.`);
  return cart; //  [{ "bananas": 17 }, { "pancake batter": 5 }, { "eggs": 49 }]
}

function viewCart() {
  var cartList = new Array();
  for(var i=0; i < cart.length-1;i++) {
      cartList.push(`${Object.keys(cart[i])} at $${Object.values(cart[i])}`);
    }
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else if (cart.length === 1) {
    console.log(`In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])}.`);
  } else if (cart.length === 2) {
    console.log(`In your cart, you have ${cartList.join(" ")} and ${Object.keys(cart[cart.length-1])} at $${Object.values(cart[cart.length-1])}.`);
  } else { 
    console.log(`In your cart, you have ${cartList.join(", ")}, and ${Object.keys(cart[cart.length-1])} at $${Object.values(cart[cart.length-1])}.`);
  }
}

function total() {
  var totalValue = 0;
  for (var i = 0; i < cart.length; i++) {
         totalValue = totalValue + parseInt(Object.values(cart[i]))
    }
  return totalValue
}