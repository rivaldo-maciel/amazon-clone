import axios from 'axios';
export const SAVE_CATEGORIES = 'SAVE_CATEGORIES';
export const GET_PRODUCTS = 'GET_PRODUCTS'

const saveCategoriesAction = (categories) => {
  return {
    type: SAVE_CATEGORIES,
    payload: categories
  };
};

const getProductsAction = (products) => {
  return {
    type: GET_PRODUCTS,
    payload: products,
  }
}

export const getCategories = () => async (dispatch) => {
  const categories = await axios.get('https://api.mercadolibre.com/sites/MLB/categories');
  return dispatch(saveCategoriesAction(categories.data));
};

export const getProducts = (category, query) => async (dispatch) => {
  const products = await axios.get(`https://api.mercadolibre.com/sites/MLB/search?category=${category}_ID&q=${query}`);
  return dispatch(getProductsAction(products.data));
}