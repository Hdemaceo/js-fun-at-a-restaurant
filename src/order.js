
function takeOrder(order1, deliveryOrders) {
  for (var i = deliveryOrders.length; i<3; i++)
  return deliveryOrders.push(order1);
};


function refundOrder(order1, deliveryOrders) {
  deliveryOrders.shift(order1);
  return deliveryOrders;
}

function listItems([order1, order2, order3], deliveryOrders) {
  var items = `${order1.item}, ${order2.item}, ${order3.item}`;
  return items;
}

function searchOrder(deliveryOrders, items){

}


module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
