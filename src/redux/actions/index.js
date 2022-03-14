import axios from 'axios';

const saveCategoriesAction = (categories) => {
  return {
    type: 'SAVE_CATEGORIES',
    payload: categories
  };
};

export const getCategories = () => async (dispatch) => {
  const categories = await axios.get('https://api.mercadolibre.com/sites/MLB/categories');
  console.log('passei uma vez')
  return dispatch(saveCategoriesAction(categories.data));
};
