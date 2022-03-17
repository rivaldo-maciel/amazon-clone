import {SAVE_CATEGORIES} from '../actions';
const INITAL_STATE = [];

const saveCategories = (state=INITAL_STATE, action) => {
  switch(action.type) {
    case SAVE_CATEGORIES:
      return action.payload;
    default:
      return state;
  }
}

export default saveCategories;