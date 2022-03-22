import axios from 'axios';

const getProductDetails = async (id) => {
  const details = await axios.get(`https://api.mercadolibre.com/items/${id}`);
  return details;
}

export default getProductDetails;