function createRestaurant(name){
  var pizzaRestaurant = {
    name: name,
    menus: {
      breakfast:[ ],
      lunch: [ ],
      dinner: [ ],
    }
  }
return pizzaRestaurant;
};

function addMenuItem(restaurant, menuItem){
  var isUnique = true;
  var restKey = Object.keys(restaurant.menus)
  for (var j = 0; j < restKey.length; j++) {
    var menu = restaurant.menus[restKey[j]];
    for (var i = 0; i< menu.length; i++) {
      if(menuItem === menu[i]){
        isUnique = false;
      }
    }
  }

if(isUnique){
  if(menuItem.type === "breakfast"){
  restaurant.menus.breakfast.push(menuItem);
} else if(menuItem.type === "lunch"){
    return restaurant.menus.lunch.push(menuItem);
  } else if(menuItem.type === "dinner") {
        restaurant.menus.dinner.push(menuItem);
  }
}
return restaurant;
};

function removeMenuItem(restaurant, menuItem, menuType){
restaurant.menus.dinner.pop(menuItem);
return `No one is eating our ${menuItem} - it has been removed from the ${menuType} menu!`;
//return `Sorry, we don't sell ${menuItem}, try adding a new recipe!`;
};

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
