function nameMenuItem(menuItemName) {
  return menuItemName = `Delicious ${menuItemName}`;
};

function createMenuItem() {
  var menuItem = {
    name: nameMenuItem("French Toast"),
    price: 10.99,
    type: "breakfast",
  };
  return menuItem;
};

function addIngredients(ingredient, ingredients) {
      return ingredients.push(ingredient);

    /*  var isUnique = true;
        for (var i = 0; i < ingredients.length; i++) {
          if(ingredient == ingredients[i]){
            return ingredients.push(ingredient);
          } else {
            isUnique = false;
          }
        } */
      }

function formatPrice(initialPrice){
formattedPrice = `$${initialPrice}`;
return formattedPrice;

// formatPrice(menuItem){ var price = "$" + menuItem.price; return price; }
};


function decreasePrice(price){
  var price = 6.00;
  var discount = price * .1;
  var decreasedPrice = price - discount;
  return decreasedPrice;
};

function createRecipe(){
  var recipe = {
    title: nameMenuItem("Eggs & Bacon"),
    ingredients: ["eggs", "bacon"],
    type: "breakfast"
  };
return recipe;
};

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
};
