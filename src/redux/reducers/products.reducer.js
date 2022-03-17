import {GET_PRODUCTS} from '../actions';

const INITAL_STATE = [];

const products = (state=INITAL_STATE, action) => {
  switch(action.type) {
    case GET_PRODUCTS:
      return action.payload;
    default: 
      return state;
  }
}

export default products;