import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function cartReducer(state = initialState.cart, action) {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      var addedItem = state.find(
        (c) => c.product.urunAdi === action.payload.product.urunAdi
      );
      if (addedItem) {
        var newState = state.map((cartItem) => {
          if (cartItem.product.urunAdi === action.payload.product.urunAdi) {
            ++addedItem.product.miktar;
            return Object.assign({}, addedItem);
          }
          return cartItem;
        });
        return newState;
      } else {
        return [...state, { ...action.payload }];
      }
    case actionTypes.REMOVE_FROM_CART:
      const newState2 = state.filter(
        (cartItem) =>
          cartItem.product.urunAdi !== action.payload.product.urunAdi
      );
      return newState2;
    case actionTypes.addQuantityToProduct:
      var addedItem = state.find(
        (c) => c.product.urunAdi === action.payload.product.urunAdi
      );

      if(addedItem.product.miktar < 9){
        addedItem.product.miktar += 1;  
    }
      
      if (addedItem) {
        var newState = state.map((cartItem) => {
          if (cartItem.product.urunAdi === action.payload.product.urunAdi) {
            return Object.assign({}, addedItem);
          }
          return cartItem;
        });
        return newState;
      } else {
        return [...state, { ...action.payload }];
      }
    case actionTypes.decreaseQuantityToProduct:
      var addedItem = state.find(
        (c) => c.product.urunAdi === action.payload.product.urunAdi
      );
     

      if(addedItem.product.miktar >= 1){
        addedItem.product.miktar -= 1;
      }

      

      if (addedItem) {
        var newState = state.map((cartItem) => {
          if (cartItem.product.urunAdi === action.payload.product.urunAdi) {
            return Object.assign({}, addedItem);
          }
          return cartItem;
        });
        return newState;
      } else {
        return [...state, { ...action.payload }];
      }

    default:
      return state;
  }
}
