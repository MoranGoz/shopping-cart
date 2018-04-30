var cart = [];
let Total=0;
var ShoppingCart = function () {
 $cart = $('.cart-list');

  // an array with all of our cart items
  

  var updateCart = function () {
    // TODO: Write this function. In this function we render the page.
    // Meaning we make sure that all our cart items are displayed in the browser.
    // Remember to empty the "cart div" before you re-add all the item elements.
    $cart.empty();
    var wrap ={
      cart :cart,
      Total:Total,
    }
    var source = $('#cart-list-template').html();
    var template = Handlebars.compile(source);
    var newHTML = template(wrap);
    $cart.append(newHTML);
  }


  var addItem = function (item) {
    // TODO: Write this function. Remember this function has nothing to do with display. 
    // It simply is for adding an item to the cart array, no HTML involved - honest ;-)
    cart.push(item);
    Total=0;
    for (let i=0 ; i<cart.length ;i++){
      Total +=cart[i].itemPrice;
    }
   

  }

  var clearCart = function () {
    // TODO: Write a function that clears the cart ;-)
    cart=[];
    Total=0;
    updateCart(); 
  }
  
  
  return {
    updateCart: updateCart,
    addItem: addItem,
    clearCart: clearCart
  }
};

var app = ShoppingCart();

// update the cart as soon as the page loads!
app.updateCart();


//--------EVENTS---------

$('.view-cart').on('click', function () {
  // TODO: hide/show the shopping cart!
  $('.shopping-cart').toggleClass('show');
});

$('.add-to-cart').on('click', function () {
  // TODO: get the "item" object from the page
  var itemName = $(this).closest('.item').data().name;
  var itemPrice = $(this).closest('.item').data().price;
  var item = {
    itemName :itemName ,
    itemPrice: itemPrice
  }
  app.addItem(item);
  app.updateCart();
});

$('.clear-cart').on('click', function () {
  app.clearCart();
});