/*import { combineReducers } from 'redux';
import books from './books';
import cart from './cart'
import filter from './filter'


export default combineReducers({
  books,
  cart,
  filter,
});*/

const initialState = {
  goods: [],
  loading: true,
  error: null,
  cartItems: [
      ],
  orderTotal: 0
  };

const  updateCartItems = (cartItems, item, idx) => {
if(item.count === 0){
  return [
    ... cartItems.slice(0, idx ),
    ... cartItems.slice( idx + 1 )
  ];
  }
console.log(cartItems);
if(idx === -1) {
  return [
    ...cartItems,
    item
  ];
}
  return [
    ... cartItems.slice(0, idx ),
    item,
    ... cartItems.slice( idx + 1 )
  ];
};

const  updateCartItem = (good, item = {}, quant) => {
    const {
      id = good.id,
      name = good.name,
      count = 0,
      total = 0 } = item;
    return {
      id,
      name,
      count: count + quant,
      total: total + quant*good.price
    };
  };

const  updateOrder = (state, goodId, quant) => {
  const { goods, cartItems, orderTotal } = state;
  const good = goods.find(({id}) => id === goodId);
  const itemIndex = cartItems.findIndex(({id}) => id === goodId);
  const item = cartItems[itemIndex];
  const newItem = updateCartItem(good, item, quant);
  const newItems=updateCartItems(cartItems, newItem, itemIndex);
  console.log(newItems);
    return {
      ...state,
      cartItems: newItems ,
      orderTotal: newItems.reduce(
      (orderTotal,newItems) => orderTotal + newItems.total,
    0,
  ),
    }
  };

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'FETCH_GOODS_REQUESTED':
      return {
        ...state,
        goods: [],
        loading: true,
        error: null
      };

    case 'FETCH_GOODS_SUCCESS':
      return {
        ...state,
        goods: action.payload,
        loading: false,
        error: null
      };

      case 'FETCH_GOODS_FAILURE':
        return {
          ...state,
          goods: [],
          loading: false,
          error: action.payload
        };

      case 'GOODS_ADDED_TO_CART':
        return updateOrder(state, action.payload, 1);

      case 'GOODS_REMOVED_FROM_CART':
        return updateOrder(state, action.payload, -1);

      case 'ALL_GOODS_REMOVED_FROM_CART':
        const item = state.cartItems.find(({id}) => id === action.payload);
        return updateOrder(state, action.payload, -item.count);

      default:
      return state;
  }
};

export default reducer;
