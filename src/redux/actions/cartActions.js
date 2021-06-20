import * as actionTypes from "./actionTypes";

export function addToCart(cardItem) {

    
  return { type: actionTypes.ADD_TO_CART, payload: cardItem };
}

export function removeFromCart(product) {
    return { type: actionTypes.REMOVE_FROM_CART, payload: product };
  }
  

  
export function addQuantityToProduct(product) {
  return { type: actionTypes.addQuantityToProduct, payload: product };
}


export function decreaseQuantityToProduct(product) {
  return { type: actionTypes.decreaseQuantityToProduct, payload: product };
}

