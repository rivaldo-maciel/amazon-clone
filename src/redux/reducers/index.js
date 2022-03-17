import { combineReducers } from 'redux';
import saveCategories from './saveCategories.reducer';
import products from './products.reducer';

const rootReducer = combineReducers({saveCategories, products});

export default rootReducer;