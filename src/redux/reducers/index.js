import { combineReducers } from 'redux';
import saveCategories from './saveCategories.reducer';

const rootReducer = combineReducers({saveCategories});

export default rootReducer;