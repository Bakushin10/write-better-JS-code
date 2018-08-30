const cart = [
  {
    name: 'The Foundation Triology',
    price: 19.99,
    discount: false,
  },
  {
    name: 'Godel, Escher, Bach',
    price: 15.99,
    discount: false,
  },
  {
    name: 'Red Mars',
    price: 5.99,
    discount: true,
  },
];

const reward = {
  name: 'Guide to Science Fiction',
  discount: true,
  price: 0,
};

// it will change original value cart.
// you DO not want to change the state of the original value
// not a pure function
function addFreeGift(cart){
  if(cart.length > 2){
    cart.push(reward)
  }
  return cart
}

// it will not change the state of the value cart.
// but it still accomplish the same thing in a better way
// pure function
function addFreeGift(cart){
  if(cart.length > 2){
    return [...cart, reward]
  }
  return cart
}

function summarizeCart(cart){
  const discountable = cart.filter(item => item.discount);
  if(discountable.length > 1){
    return{
      error : "Can only have one discount"
    }
  }
  const cartWithReward = addFreeGift(cart);
  return{
    discount: discountable.length,
    items: cartWithReward.length,
    cart: cartWithReward
  }
}
